import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/productsSlice";
import { updateProduct } from "../../redux/slices/adminProductSlice";
import axios from "axios";
import { useTranslation } from "../../context/useTranslation";
import { useAdminAuthGuard } from "../../hooks/useAdminAuthGuard";

const emptyProductData = {
  name: "",
  nameUk: "",
  description: "",
  descriptionUk: "",
  price: 0,
  countInStock: 0,
  sku: "",
  category: "",
  brand: "",
  sizes: [],
  colors: [],
  collections: "",
  material: "",
  gender: "",
  images: [],
};

const categoryOptions = ["Top Wear", "Bottom Wear"];
const genderOptions = ["Men", "Women", "Unisex"];
const toCleanList = (values) =>
  values.map((value) => value.trim()).filter(Boolean);
const getOptionLabel = (t, value) => {
  const translationKey = `options.${value}`;
  const translatedValue = t(translationKey);
  return translatedValue === translationKey ? value : translatedValue;
};

const normalizeProductData = (product) => ({
  ...emptyProductData,
  ...product,
  sizes: Array.isArray(product?.sizes) ? product.sizes : [],
  colors: Array.isArray(product?.colors) ? product.colors : [],
  images: Array.isArray(product?.images) ? product.images : [],
});

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products,
  );
  const { t } = useTranslation();
  useAdminAuthGuard(error);

  const [productData, setProductData] = useState(null);
  const [uploading, setUploading] = useState(false); //Image uploading state
  const productFormData = normalizeProductData(productData || selectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...normalizeProductData(prevData || selectedProduct),
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: { "Content-type": "multipart/form-data" },
        },
      );
      if (!data.imageUrl) {
        throw new Error("Image upload did not return an image URL");
      }
      setProductData((prevData) => ({
        ...normalizeProductData(prevData || selectedProduct),
        images: [
          ...normalizeProductData(prevData || selectedProduct).images,
          { url: data.imageUrl, altText: "" },
        ],
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalizedProductData = {
      ...productFormData,
      sizes: toCleanList(productFormData.sizes),
      colors: toCleanList(productFormData.colors),
    };

    try {
      await dispatch(
        updateProduct({ id, productData: normalizedProductData }),
      ).unwrap();
      setProductData(null);
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>{t("common.loading")}</p>;
  if (error)
    return (
      <p>
        {t("common.error")}: {error}
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">{t("admin.editProduct")}</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Product Name (EN)
            </label>
            <input
              type="text"
              name="name"
              value={productFormData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Назва товару (UA)
            </label>
            <input
              type="text"
              name="nameUk"
              value={productFormData.nameUk}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {/* Description */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Description (EN)
            </label>
            <textarea
              name="description"
              value={productFormData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Опис (UA)
            </label>
            <textarea
              name="descriptionUk"
              value={productFormData.descriptionUk}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
            ></textarea>
          </div>
        </div>
        {/* Price input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">{t("common.price")}</label>
          <input
            type="number"
            name="price"
            value={productFormData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Count In stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {t("admin.countInStock")}
          </label>
          <input
            type="number"
            name="countInStock"
            value={productFormData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">{t("admin.sku")}</label>
          <input
            type="text"
            name="sku"
            value={productFormData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Brand */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              {t("collection.brand")}
            </label>
            <input
              type="text"
              name="brand"
              value={productFormData.brand}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Material */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              {t("collection.material")}
            </label>
            <input
              type="text"
              name="material"
              value={productFormData.material}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              {t("collection.category")}
            </label>
            <select
              name="category"
              value={productFormData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="" disabled>
                Category
              </option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {getOptionLabel(t, category)}
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              {t("collection.gender")}
            </label>
            <select
              name="gender"
              value={productFormData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>
                Gender
              </option>
              {genderOptions.map((gender) => (
                <option key={gender} value={gender}>
                  {getOptionLabel(t, gender)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Collection */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Collection</label>
          <input
            type="text"
            name="collections"
            value={productFormData.collections}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {t("admin.sizesComma")}
          </label>
          <input
            type="text"
            name="sizes"
            value={productFormData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productFormData,
                sizes: e.target.value
                  .split(",")
                  .map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {t("admin.colorsComma")}
          </label>
          <input
            type="text"
            name="colors"
            value={productFormData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productFormData,
                colors: e.target.value
                  .split(",")
                  .map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {t("admin.uploadImage")}
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            disabled={uploading}
            className="block w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-gray-800"
          />
          {uploading && (
            <p className="mt-2 text-sm text-gray-500">
              {t("admin.uploading")}
            </p>
          )}
          <div className="flex gap-4 mt-4">
            {productFormData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || t("admin.productImage")}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          {t("admin.updateProduct")}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
