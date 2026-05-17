const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");
const {
  withSeedProductData,
  withSeedProductDataList,
} = require("../utils/productImages");

const router = express.Router();

// @route POST /api/product
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      nameUk,
      description,
      descriptionUk,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      nameUk,
      description,
      descriptionUk,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the admin who created it
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// "@route PUT /api/products/:id"
// @desc Update an existing product ID
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "nameUk",
      "description",
      "descriptionUk",
      "price",
      "discountPrice",
      "countInStock",
      "category",
      "brand",
      "sizes",
      "colors",
      "collections",
      "material",
      "gender",
      "images",
      "isFeatured",
      "isPublished",
      "tags",
      "dimensions",
      "weight",
      "sku",
    ];
    const updates = allowedFields.reduce((result, field) => {
      if (req.body[field] !== undefined) {
        result[field] = req.body[field];
      }

      return result;
    }, {});

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(withSeedProductData(updatedProduct));
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/products/id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      // Remove the product from DB
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public
router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    const toList = (value) =>
      value
        ? value
            .split(",")
            .map((item) => item.trim().toLowerCase())
            .filter(Boolean)
        : [];

    const matchesOne = (value, selectedValues) =>
      selectedValues.length === 0 ||
      selectedValues.includes(String(value || "").toLowerCase());

    const matchesAny = (values, selectedValues) =>
      selectedValues.length === 0 ||
      (Array.isArray(values) &&
        values.some((value) =>
          selectedValues.includes(String(value || "").toLowerCase()),
        ));

    const normalizedCollection = String(collection || "").toLowerCase();
    const normalizedCategory = String(category || "").toLowerCase();
    const selectedSizes = toList(size);
    const selectedColors = toList(color);
    const selectedMaterials = toList(material);
    const selectedBrands = toList(brand);
    const normalizedGender = String(gender || "").toLowerCase();
    const normalizedSearch = String(search || "").trim().toLowerCase();
    const min = minPrice ? Number(minPrice) : null;
    const max = maxPrice ? Number(maxPrice) : null;
    // Sort Logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }
    let products = withSeedProductDataList(await Product.find({}));

    products = products.filter((product) => {
      if (
        normalizedCollection &&
        normalizedCollection !== "all" &&
        String(product.collections || "").toLowerCase() !== normalizedCollection
      ) {
        return false;
      }

      if (
        normalizedCategory &&
        normalizedCategory !== "all" &&
        String(product.category || "").toLowerCase() !== normalizedCategory
      ) {
        return false;
      }

      if (!matchesAny(product.sizes, selectedSizes)) return false;
      if (!matchesAny(product.colors, selectedColors)) return false;
      if (!matchesOne(product.material, selectedMaterials)) return false;
      if (!matchesOne(product.brand, selectedBrands)) return false;
      if (
        normalizedGender &&
        String(product.gender || "").toLowerCase() !== normalizedGender
      ) {
        return false;
      }

      if (min !== null && product.price < min) return false;
      if (max !== null && product.price > max) return false;

      if (normalizedSearch) {
        const searchableText = `${product.name} ${product.description}`.toLowerCase();
        if (!searchableText.includes(normalizedSearch)) return false;
      }

      return true;
    });

    products.sort((a, b) => {
      if (sort.price) return (a.price - b.price) * sort.price;
      if (sort.rating) return (a.rating - b.rating) * sort.rating;
      return 0;
    });

    res.json(products.slice(0, Number(limit) || products.length));
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products/best-seller
// @desc Retrive the product with highest rating
// @access Public
router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 });
    if (bestSeller) {
      res.json(withSeedProductData(bestSeller));
    } else {
      res.status(404).json({ message: "No best seller found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 products - Creation date
// @access Public
router.get("/new-arrivals", async (req, res) => {
  try {
    // Fetch latest 8 products
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
    res.json(withSeedProductDataList(newArrivals));
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product`s gender amd category
// @access Public
router.get("/similar/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = withSeedProductData(await Product.findById(id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = withSeedProductDataList(await Product.find({}))
      .filter(
        (item) =>
          String(item._id) !== id &&
          item.gender === product.gender &&
          item.category === product.category,
      )
      .slice(0, 4);

    res.json(similarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products/:id
// @desc Get a single product by ID
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(withSeedProductData(product));
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
