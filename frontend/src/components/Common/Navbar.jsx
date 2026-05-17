import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useTranslation } from "../../context/useTranslation";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { language, toggleLanguage, t } = useTranslation();

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 px-4 sm:px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium whitespace-nowrap">
            Clovique
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6">
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap"
          >
            {t("nav.men")}
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap"
          >
            {t("nav.women")}
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap"
          >
            {t("nav.topWear")}
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap"
          >
            {t("nav.bottomWear")}
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="hidden sm:block bg-black px-2 rounded text-sm text-white whitespace-nowrap"
            >
              {t("common.admin")}
            </Link>
          )}

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("nav.languageLabel")}
            className="flex h-8 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-semibold uppercase text-gray-700 hover:border-black hover:text-black transition"
          >
            {language === "en" ? "UA" : "EN"}
          </button>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="lg:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">{t("common.menu")}</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              {t("nav.men")}
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              {t("nav.women")}
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              {t("nav.topWear")}
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              {t("nav.bottomWear")}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              className="mt-2 flex h-10 w-20 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold uppercase text-gray-700 hover:border-black hover:text-black transition"
            >
              {language === "en" ? "UA" : "EN"}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
