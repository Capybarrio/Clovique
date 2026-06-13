/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "../../context/useTranslation";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [brands, setBrands] = useState([]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    { value: "Black", swatch: "#111827" },
    { value: "White", swatch: "#f9fafb" },
    { value: "Gray", swatch: "#9ca3af" },
    { value: "Charcoal", swatch: "#374151" },
    { value: "Blue", swatch: "#2563eb" },
    { value: "Light Blue", swatch: "#93c5fd" },
    { value: "Dark Blue", swatch: "#1e3a8a" },
    { value: "Navy", swatch: "#172554" },
    { value: "Navy Blue", swatch: "#1e3a8a" },
    { value: "Red", swatch: "#dc2626" },
    { value: "Burgundy", swatch: "#7f1d1d" },
    { value: "Pink", swatch: "#f9a8d4" },
    { value: "Beige", swatch: "#d6c2a1" },
    { value: "Khaki", swatch: "#b8a46f" },
    { value: "Olive", swatch: "#6b8e23" },
    { value: "Green", swatch: "#16a34a" },
    { value: "Dark Green", swatch: "#166534" },
    { value: "Dark Wash", swatch: "#1f2937" },
    { value: "Heather Gray", swatch: "#9ca3af" },
    { value: "Brown", swatch: "#7c2d12" },
    { value: "Yellow", swatch: "#facc15" },
    { value: "Lavender", swatch: "#c4b5fd" },
    { value: "Navy Palms", swatch: "#1e40af" },
    { value: "Tropical Print", swatch: "#22c55e" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Cotton Blend",
    "Denim",
    "Polyester",
    "Viscose",
    "Fleece",
  ];

  const genders = ["Men", "Women"];
  const getOptionLabel = (value) => {
    const translationKey = `options.${value}`;
    const translatedValue = t(translationKey);
    return translatedValue === translationKey ? value : translatedValue;
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/brands`,
        );
        setBrands(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to load product brands", error);
        setBrands([]);
      }
    };

    fetchBrands();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    if (type == "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">
        {t("collection.filter")}
      </h3>
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("collection.category")}
        </label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">
              {getOptionLabel(category)}
            </span>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("collection.gender")}
        </label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{getOptionLabel(gender)}</span>
          </div>
        ))}
      </div>
      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("common.color")}
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.value}
              name="color"
              value={color.value}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color.value ? "ring-2 ring-blue-500" : ""}`}
              style={{ backgroundColor: color.swatch }}
              title={getOptionLabel(color.value)}
            ></button>
          ))}
        </div>
      </div>
      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("common.size")}
        </label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("collection.material")}
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">
              {getOptionLabel(material)}
            </span>
          </div>
        ))}
      </div>
      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          {t("collection.brand")}
        </label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>
      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          {t("collection.priceRange")}
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
