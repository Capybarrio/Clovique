const CART_STORAGE_KEY = "clovique_cart";
const CART_UPDATED_EVENT = "clovique-cart-updated";

const isBrowser = typeof window !== "undefined";

const readCart = () => {
  if (!isBrowser) return [];

  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
  if (!storedCart) return [];

  try {
    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
};

const writeCart = (cartItems) => {
  if (!isBrowser) return;

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
};

const findCartItemIndex = (cartItems, productId, size, color) =>
  cartItems.findIndex(
    (item) =>
      item.productId === productId && item.size === size && item.color === color,
  );

export const getCartItems = () => readCart();

export const getCartItemsCount = () =>
  readCart().reduce((total, item) => total + item.quantity, 0);

export const addCartItem = (product) => {
  const cartItems = readCart();
  const itemIndex = findCartItemIndex(
    cartItems,
    product.productId,
    product.size,
    product.color,
  );

  if (itemIndex > -1) {
    cartItems[itemIndex].quantity += product.quantity;
  } else {
    cartItems.push(product);
  }

  writeCart(cartItems);
};

export const updateCartItemQuantity = (productId, size, color, quantity) => {
  const cartItems = readCart();
  const itemIndex = findCartItemIndex(cartItems, productId, size, color);

  if (itemIndex === -1) return;

  if (quantity <= 0) {
    cartItems.splice(itemIndex, 1);
  } else {
    cartItems[itemIndex].quantity = quantity;
  }

  writeCart(cartItems);
};

export const removeCartItem = (productId, size, color) => {
  const cartItems = readCart().filter(
    (item) =>
      !(
        item.productId === productId &&
        item.size === size &&
        item.color === color
      ),
  );

  writeCart(cartItems);
};

export const subscribeToCartUpdates = (callback) => {
  if (!isBrowser) return () => {};

  window.addEventListener(CART_UPDATED_EVENT, callback);
  return () => window.removeEventListener(CART_UPDATED_EVENT, callback);
};
