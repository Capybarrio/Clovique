import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderDetails } from "../redux/slices/orderSlice";
import { useTranslation } from "../context/useTranslation";
import { translateProductText } from "../i18n/productTranslations";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);
  const { language, t } = useTranslation();
  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>{t("common.loading")}</p>;
  if (error)
    return (
      <p>
        {t("common.error")}: {error}
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {t("orders.orderDetails")}
      </h2>
      {!orderDetails ? (
        <p>{t("orders.noOrderDetails")}</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {t("orders.orderId")}: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? t("orders.approved") : t("orders.pending")}
              </span>
              <span
                className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered
                  ? t("options.Delivered")
                  : t("orders.pendingDelivery")}
              </span>
            </div>
          </div>
          {/* Customer, Payment, Shipping Info  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {t("orders.paymentInfo")}
              </h4>
              <p>
                {t("orders.paymentMethod")}: {orderDetails.paymentMethod}
              </p>
              <p>
                {t("common.status")}:{" "}
                {orderDetails.isPaid ? t("orders.paid") : t("orders.unpaid")}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {t("orders.shippingInfo")}
              </h4>
              <p>
                {t("orders.shippingMethod")}: {orderDetails.shippingMethod}
              </p>
              <p>
                {t("orders.address")}:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">
              {t("common.products")}
            </h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">{t("common.name")}</th>
                  <th className="py-2 px-4">{t("orders.unitPrice")}</th>
                  <th className="py-2 px-4">{t("common.quantity")}</th>
                  <th className="py-2 px-4">{t("common.total")}</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => {
                  const translatedName =
                    language === "uk" && item.nameUk?.trim()
                      ? item.nameUk
                      : translateProductText(
                          item.translationSourceName || item.name,
                          language,
                          t,
                        );

                  return (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={translatedName}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {translatedName}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Back to Orders Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            {t("orders.backToMyOrders")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
