import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { useTranslation } from "../context/useTranslation";
import { translateProductText } from "../i18n/productTranslations";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { order: storedOrder } = useSelector((state) => state.checkout);
  const order = location.state?.order || storedOrder;
  const { language, t } = useTranslation();

  useEffect(() => {
    if (order && order._id) {
      dispatch(clearCart());
    } else {
      navigate("/my-orders");
    }
  }, [order, dispatch, navigate]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        {t("orders.thankYou")}
      </h1>
      {order ? (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date*/}
            <div>
              <h2 className="text-xl font-semibold">
                {t("orders.orderId")}: {order._id}
              </h2>
              <p className="text-gray-500">
                {t("orders.orderDate")}:{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 tetx-sm">
                {t("orders.estimatedDelivery")}:{" "}
                {calculateEstimatedDelivery(order.createdAt)}
              </p>
            </div>
          </div>
          {/* Ordered Items */}
          <div className="mb-20">
            {order.orderItems.map((item) => {
              const translatedName =
                language === "uk" && item.nameUk?.trim()
                  ? item.nameUk
                  : translateProductText(
                      item.translationSourceName || item.name,
                      language,
                      t,
                    );

              return (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={translatedName}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">
                    {translatedName}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {translateProductText(item.color, language, t)} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">
                    {t("orders.qty")}: {item.quantity}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
          {/* Payment and Delivery Info*/}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {t("orders.payment")}
              </h4>
              <p className="text-gray-600">Visa/Mastercard</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {t("orders.delivery")}
              </h4>
              <p className="text-gray-600">
                {order.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {order.shippingAddress.city}, {""}
                {order.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          {t("orders.unavailable")}
        </p>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
