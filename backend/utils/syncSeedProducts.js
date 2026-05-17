const Product = require("../models/Product");
const User = require("../models/User");
const seedProducts = require("../data/products");

const getSyncUser = async () => {
  let user = await User.findOne({ role: "admin" });

  if (!user) {
    user = await User.findOne();
  }

  if (!user) {
    user = await User.create({
      name: "Catalog Admin",
      email: "catalog-admin@example.com",
      password: "123456",
      role: "admin",
    });
  }

  return user;
};

const syncSeedProducts = async () => {
  const syncUser = await getSyncUser();

  const results = await Promise.all(
    seedProducts.map(async (seedProduct) => {
      const existingProduct = await Product.findOne({ sku: seedProduct.sku });
      const user = existingProduct?.user || syncUser._id;

      return Product.findOneAndUpdate(
        { sku: seedProduct.sku },
        {
          $set: {
            user,
          },
          $setOnInsert: {
            ...seedProduct,
          },
        },
        {
          returnDocument: "after",
          upsert: true,
          setDefaultsOnInsert: true,
        },
      );
    }),
  );

  return results.length;
};

module.exports = syncSeedProducts;
