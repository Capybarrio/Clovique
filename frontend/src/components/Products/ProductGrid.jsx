import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../context/useTranslation";
import { translateProduct } from "../../i18n/productTranslations";

const ProductGrid = ({ products, loading, error }) => {
  const { language, t } = useTranslation();

  if (loading) {
    return <p>{t("common.loading")}</p>;
  }
  if (error) {
    return (
      <p>
        {t("common.error")}: {error}
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((product, index) => {
        const displayProduct = translateProduct(product, language, t);

        return (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{displayProduct.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              $ {product.price}
            </p>
          </div>
        </Link>
      );
      })}
    </div>
  );
};

export default ProductGrid;
