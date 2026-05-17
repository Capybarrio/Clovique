const seedProducts = require("../data/products");

const seedProductsBySku = new Map(
  seedProducts.map((product) => [product.sku, product]),
);

const seedProductsByName = new Map(
  seedProducts.map((product) => [product.name, product]),
);

const toPlainProduct = (product) =>
  typeof product.toObject === "function" ? product.toObject() : product;

const getSeedProduct = (product) =>
  seedProductsBySku.get(product.sku) || seedProductsByName.get(product.name);

const withSeedProductData = (product) => {
  if (!product) return product;

  const plainProduct = toPlainProduct(product);
  const seedProduct = getSeedProduct(plainProduct);

  if (!seedProduct) return plainProduct;

  return {
    ...plainProduct,
    translationSource: {
      name: seedProduct.name,
      description: seedProduct.description,
    },
    images: plainProduct.images?.length
      ? plainProduct.images
      : seedProduct.images || [],
  };
};

const withSeedImages = (product) => {
  if (!product) return product;

  const plainProduct = toPlainProduct(product);
  const seedProduct = getSeedProduct(plainProduct);

  return {
    ...plainProduct,
    images: plainProduct.images?.length
      ? plainProduct.images
      : seedProduct?.images || [],
  };
};

const withSeedImagesList = (products) => products.map(withSeedImages);
const withSeedProductDataList = (products) => products.map(withSeedProductData);

module.exports = {
  withSeedImages,
  withSeedImagesList,
  withSeedProductData,
  withSeedProductDataList,
};
