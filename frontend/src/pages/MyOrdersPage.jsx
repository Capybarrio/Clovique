import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/slices/orderSlice";
import { useTranslation } from "../context/useTranslation";
import { translateProductText } from "../i18n/productTranslations";

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { language, t } = useTranslation();

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  if (loading) return <p>{t("common.loading")}</p>;
  if (error)
    return (
      <p>
        {t("common.error")}: {error}
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        {t("orders.myOrders")}
      </h2>

      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-190 md:min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">{t("orders.image")}</th>
              <th className="py-2 px-4 sm:py-3">{t("orders.orderId")}</th>
              <th className="py-2 px-4 sm:py-3">{t("orders.created")}</th>
              <th className="py-2 px-4 sm:py-3">
                {t("orders.shippingAddress")}
              </th>
              <th className="py-2 px-4 sm:py-3">{t("orders.items")}</th>
              <th className="py-2 px-4 sm:py-3">{t("common.price")}</th>
              <th className="py-2 px-4 sm:py-3">{t("common.status")}</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => {
                const firstItem = order.orderItems[0];
                const translatedName =
                  language === "uk" && firstItem?.nameUk?.trim()
                    ? firstItem.nameUk
                    : translateProductText(
                        firstItem?.translationSourceName || firstItem?.name,
                        language,
                        t,
                      );

                return (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={firstItem.image}
                      alt={translatedName}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()} {""}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress.city
                      ? `${order.shippingAddress.city},${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? t("orders.paid") : t("orders.pending")}
                    </span>
                  </td>
                </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  {t("orders.noOrders")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
