import React from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "../../context/useTranslation";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">{t("collection.sortDefault")}</option>
        <option value="priceAsc">{t("collection.priceLowHigh")}</option>
        <option value="priceDesc">{t("collection.priceHighLow")}</option>
        <option value="popularity">{t("collection.popularity")}</option>
      </select>
    </div>
  );
};

export default SortOptions;
