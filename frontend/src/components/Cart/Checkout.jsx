import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createCheckout,
  finalizeCheckout,
} from "../../redux/slices/checkoutSlice";
import { useTranslation } from "../../context/useTranslation";
import { translateProductText } from "../../i18n/productTranslations";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { language, t } = useTranslation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Ensure cart is loaded before proceeding
  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if (!cart || cart.products.length === 0) return;

    setIsProcessing(true);
    setCheckoutError(null);

    try {
      const checkout = await dispatch(
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Visa/Mastercard",
          totalPrice: cart.totalPrice,
        }),
      ).unwrap();

      const order = await dispatch(finalizeCheckout(checkout._id)).unwrap();
      navigate("/order-confirmation", { state: { order } });
    } catch (error) {
      setCheckoutError(error?.message || t("checkout.failed"));
      setIsProcessing(false);
    }
  };

  if (!cart || !cart.products || cart.products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">{t("checkout.title")}</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">{t("checkout.contactDetails")}</h3>
          <div className="mb-4">
            <label className="block text-gray-700">{t("common.email")}</label>
            <input
              type="email"
              value={user ? user.email : ""}
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">{t("checkout.delivery")}</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">
                {t("checkout.firstName")}
              </label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                {t("checkout.lastName")}
              </label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t("checkout.address")}</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">{t("checkout.city")}</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                {t("checkout.postalCode")}
              </label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t("checkout.country")}</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t("checkout.phone")}</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {checkoutError && (
              <p className="text-red-600 text-sm mb-3">{checkoutError}</p>
            )}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-black text-white py-3 rounded disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? t("checkout.processing") : t("checkout.continuePayment")}
            </button>
          </div>
        </form>
      </div>
      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">{t("checkout.orderSummary")}</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => {
            const translatedName =
              language === "uk" && product.nameUk?.trim()
                ? product.nameUk
                : translateProductText(
                    product.translationSourceName || product.name,
                    language,
                    t,
                  );

            return (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={translatedName}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">
                    {translatedName}
                  </h3>
                  <p className="text-gray-500">
                    {t("common.size")}: {product.size}
                  </p>
                  <p className="text-gray-500">
                    {t("common.color")}:{" "}
                    {translateProductText(product.color, language, t)}
                  </p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>{t("common.subtotal")}</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>{t("common.shipping")}</p>
          <p>{t("common.free")}</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>{t("common.total")}</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
