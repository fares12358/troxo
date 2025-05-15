// import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin"); // التوجيه إلى صفحة تسجيل الدخول
  };

  const menuItems = [
    { icon: "/Icones/Dashboard.svg", text: "الصفحة الرئيسية", path: "/admin" },
    {
      icon: "/Icones/company.svg",
      text: "الشركات",
      path: "/admin/company",
    },
    {
      icon: "/Icones/user.svg",
      text: "المستخدمين",
      path: "/admin/users",
    },
    {
      icon: "/Icones/shipment.svg",
      text: "الشحنات",
      path: "/admin/shipments",
    },
    {
      icon: "/Icones/ticketIcone.svg",
      text: "التذاكر",
      path: "/admin/tickets",
    },
    { icon: "/Icones/chart.svg", text: "المالية", path: "/admin/finance" },
    { icon: "/Icones/wallet.svg", text: "المحفظة", path: "/admin/wallet" },
    {
      icon: "/Icones/track.svg",
      text: "تتبع",
      path: "/admin/tracking",
    },
    { icon: "/Icones/switch.svg", text: "الإعدادات", path: "/settings" },
  ];

  return (
    <nav className="flex flex-col h-full bg-white shadow-[0px_12px_30px_rgba(80,143,244,0.1)]">
      {/* قسم الشعار */}
      <div className="flex-shrink-0 px-14 py-4 bg-slate-50 max-md:px-5">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="object-contain aspect-[3.66] w-[150px]"
        />
      </div>

      {/* القائمة الرئيسية مع إمكانية التمرير */}
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-5 items-start px-8 mt-8 w-full text-base max-md:px-5 pb-4">
          {/* العناصر الرئيسية */}
          {menuItems.map((item, index) => (
            <li key={index} className="flex flex-col -ml-1 w-full">
              <div className="flex items-center">
                <NavLink
                  end
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-start gap-5 w-full px-4 py-2 -mx-4 ${
                      isActive
                        ? "text-pink-950 font-semibold bg-red-100 rounded-lg"
                        : "text-emerald-900"
                    }`
                  }
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  {item.text}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* قسم تسجيل الخروج (ثابت في الأسفل) */}
      <div className="flex-shrink-0 px-8 pb-6 max-md:px-5">
        <button
          onClick={handleLogout}
          className={`flex items-center gap-2 cursor-pointer   w-full px-4 py-2 -mx-4  text-emerald-900
            `}
        >
          <img
            src="/Icones/SignOutIcone.svg"
            alt="Sign out icon"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </nav>
  );
};

export default AdminSidebar;
