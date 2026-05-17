import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
import { fetchAllOrders } from "../redux/slices/adminOrderSlice";
import { useTranslation } from "../context/useTranslation";
import { useAdminAuthGuard } from "../hooks/useAdminAuthGuard";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.adminProducts);
  const {
    orders,
    totalOrders,
    totalSales,
    loading: ordersLoading,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);
  const { t } = useTranslation();
  useAdminAuthGuard(productsError, ordersError);

  useEffect(() => {
    dispatch(fetchAdminProducts());
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("admin.dashboard")}</h1>
      {productsLoading || ordersLoading ? (
        <p>{t("common.loading")}</p>
      ) : productsError ? (
        <p className="text-red-500">
          {t("admin.errorProducts")}: {productsError}
        </p>
      ) : ordersError ? (
        <p className="text-red-500">
          {t("admin.errorOrders")}: {ordersError}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{t("admin.revenue")}</h2>
            <p className="text-2xl">${totalSales.toFixed(2)}</p>
          </div>
          <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{t("admin.totalOrders")}</h2>
            <p className="text-2xl">{totalOrders}</p>
            <Link to="/admin/orders" className="text-blue-500 hover:underline">
              {t("admin.manageOrders")}
            </Link>
          </div>
          <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">
              {t("admin.totalProducts")}
            </h2>
            <p className="text-2xl">{products.length}</p>
            <Link
              to="/admin/products"
              className="text-blue-500 hover:underline"
            >
              {t("admin.manageProducts")}
            </Link>
          </div>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">{t("admin.recentOrders")}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">{t("orders.orderId")}</th>
                <th className="py-3 px-4">{t("common.user")}</th>
                <th className="py-3 px-4">{t("admin.totalPrice")}</th>
                <th className="py-3 px-4">{t("common.status")}</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">
                      {order.user?.name || t("admin.deletedUser")}
                    </td>
                    <td className="p-4">{order.totalPrice.toFixed(2)}</td>
                    <td className="p-4">
                      {t(`options.${order.status}`)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    {t("admin.noRecentOrders")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
