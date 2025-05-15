import { useState } from "react";
import AdminDashHeader from './../Components/AdminLayout/AdminDashHeader';
import { Outlet } from 'react-router';
import AdminSidebar from "../Components/AdminLayout/AdminSidebar";
const AdminDashLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <div className="flex flex-col md:flex-row">
        {/* السايدبار - ارتفاع تلقائي */}
        <aside
  className={`w-[280px] max-md:w-[70%] max-lg:w-[300px] bg-white shadow-lg md:shadow-none
    transform transition-transform duration-300 md:transform-none
    ${isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
    fixed md:static z-50 h-[100vh] md:h-auto`}
>
  <AdminSidebar />
</aside>

        {/* المحتوى الرئيسي */}
        <main className="flex-1 max-md:ml-0 min-h-screen">
          <div className="w-full max-md:max-w-full">
            <AdminDashHeader toggleSidebar={toggleSidebar} />
            <Outlet />
          </div>
        </main>
      </div>

      {/* طبقة التعتيم للجوال */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

     
    </div>
  );
};

export default AdminDashLayout;
