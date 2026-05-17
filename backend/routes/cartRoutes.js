const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const { withSeedProductData } = require("../utils/productImages");

const router = express.Router();

// Helper function to get a cart by user Id or guest ID
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

const getCartProductSnapshot = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) return null;

  const syncedProduct = withSeedProductData(product);
  const translationSourceName =
    syncedProduct.translationSource?.name === syncedProduct.name
      ? syncedProduct.translationSource.name
      : undefined;

  return {
    name: syncedProduct.name,
    nameUk: syncedProduct.nameUk,
    translationSourceName,
    image: syncedProduct.images?.[0]?.url || "",
    price: syncedProduct.price,
  };
};

const syncCartProductSnapshots = async (cart) => {
  if (!cart) return cart;

  await Promise.all(
    cart.products.map(async (item) => {
      const productSnapshot = await getCartProductSnapshot(item.productId);
      if (!productSnapshot) return;

      item.name = productSnapshot.name;
      item.nameUk = productSnapshot.nameUk;
      item.translationSourceName = productSnapshot.translationSourceName;
      item.image = productSnapshot.image;
      item.price = productSnapshot.price;
    }),
  );

  cart.totalPrice = cart.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  await cart.save();

  return cart;
};

// @route POST /api/cart
// @desc Add a product to the cart for a guest or logged in user
// @access Public
router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const productSnapshot = await getCartProductSnapshot(productId);
    if (!productSnapshot) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Determine if the user is logged in or guest
    let cart = await getCart(userId, guestId);

    // If the cart exist, update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color,
      );
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
        cart.products[productIndex].name = productSnapshot.name;
        cart.products[productIndex].nameUk = productSnapshot.nameUk;
        cart.products[productIndex].translationSourceName =
          productSnapshot.translationSourceName;
        cart.products[productIndex].image = productSnapshot.image;
        cart.products[productIndex].price = productSnapshot.price;
      } else {
        cart.products.push({
          productId,
          name: productSnapshot.name,
          nameUk: productSnapshot.nameUk,
          translationSourceName: productSnapshot.translationSourceName,
          image: productSnapshot.image,
          price: productSnapshot.price,
          size,
          color,
          quantity,
        });
      }

      // Recalculate the total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      // Create a new cart for guest or user
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: productSnapshot.name,
            nameUk: productSnapshot.nameUk,
            translationSourceName: productSnapshot.translationSourceName,
            image: productSnapshot.image,
            price: productSnapshot.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: productSnapshot.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/cart
// @cart Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );

    if (productIndex > -1) {
      // update quantity
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1); //Remove product if quantity is 0
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      await cart.save();
      const syncedCart = await syncCartProductSnapshots(cart);
      return res.status(200).json(syncedCart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      await cart.save();
      const syncedCart = await syncCartProductSnapshots(cart);
      return res.status(200).json(syncedCart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/cart
// @desc Get logged-in user`s or guest  user`s cart
// @access Public
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;
  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      const syncedCart = await syncCartProductSnapshots(cart);
      res.json(syncedCart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route POST /api/cart/merge
// @desc Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;

  try {
    // Find the guest cart and user cart
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }

      if (userCart) {
        // Merge guest cart into user cart
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size &&
              item.color === guestItem.color,
          );
          if (productIndex > -1) {
            // If the items exists in the user cart, update the quantity
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            // Otherwise, add the guest item to the cart
            userCart.products.push(guestItem);
          }
        });
        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
        await userCart.save();
        await syncCartProductSnapshots(userCart);

        // Remove the guest cart after merging
        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }
        res.status(200).json(userCart);
      } else {
        // If the user has no existing cart, assing the guest cart to the user
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();
        const syncedCart = await syncCartProductSnapshots(guestCart);
        res.status(200).json(syncedCart);
      }
    } else {
      if (userCart) {
        // Guest cart has already been merged, return user cart
        const syncedCart = await syncCartProductSnapshots(userCart);
        return res.status(200).json(syncedCart);
      }
      res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
