import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin"); // التوجيه إلى صفحة تسجيل الدخول
  };

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    {
      icon: "/Icones/HomeIcone.svg",
      text: "لوحة التحكم",
      path: "/home",
    },

    {
      icon: "/Icones/StoresIcone.svg",
      text: "المتاجر",
      path: "/home/stores",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "المنتج",
          path: "/home/stores/product",
        },
        {
          icon: "/Icones/StatIcone.png",
          text: "التصنيفات",
          path: "/home/stores/classification",
        },
      ],
    },
    {
      icon: "/Icones/ShipmentsIcone.svg",
      text: "الشحنات",
      path: "/home/shipments",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "العميل",
          path: "/home/shipments/customer",
        },
        {
          icon: "/Icones/StatIcone.png",
          text: "فواتيري",
          path: "/home/shipments/bills",
        },
        {
          icon: "/Icones/StatIcone.png",
          text: "تذكرة ",
          path: "/home/shipments/ticket",
        },
      ],
    },
    {
      icon: "/Icones/WalletIcone.svg",
      text: "المحفظة",
      path: "/home/wallet",
    },
    {
      icon: "/Icones/Statistics.svg",
      text: "الاحصائيات و تقارير",
      path: "/home/statistics",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "احصائيات مالية",
          path: "/home/statistics/financial",
        },
        {
          icon: "/Icones/StatIcone.png",
          text: "احصائيات متجر",
          path: "/home/statistics/store",
        },
      ],
    },
    {
      icon: "/Icones/SettingIcone.svg",
      text: "الإعدادات",
      path: "/home/settings",
    },
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
      <div className="flex-1 ">
        <ul className="flex flex-col gap-5 items-start px-8 mt-8 w-full text-base max-md:px-5 pb-4">
          {/* العناصر الرئيسية */}
          {menuItems.map((item, index) => (
            <li key={index} className="flex flex-col -ml-1 w-full">
              <div className="flex items-center">
                <NavLink
                  end
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-start  w-full px-4 py-2 -mx-4 ${
                      isActive
                        ? "text-pink-950 gap-4 font-semibold bg-red-100 rounded-lg"
                        : "text-emerald-900 gap-2"
                    }`
                  }
                  onClick={() => {
                    if (item.subMenu) toggleMenu(item.text);
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  {item.text}
                  {item.icone && (
                    <img
                      src={item.icone}
                      alt="Down arrow icon"
                      className={`object-contain  shrink-0 w-5 aspect-square ${
                        openMenus[item.text] ? "rotate-90" : "rotate-180"
                      }`}
                    />
                  )}
                </NavLink>
              </div>

              {item.subMenu && openMenus[item.text] && (
                <ul className="mt-1 space-y-1">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.path}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-lg text-sm ${
                            isActive
                              ? "bg-red-100 text-pink-950"
                              : "text-gray-600 hover:bg-gray-100"
                          }`
                        }
                      >
                        <img
                          src={subItem.icon}
                          alt={subItem.text}
                          className="object-contain shrink-0 w-5 aspect-square"
                        />
                        {subItem.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* قسم تسجيل الخروج (ثابت في الأسفل) */}
      <div className="flex-shrink-0 px-8 pb-6 max-md:px-5">
        <button
          onClick={handleLogout}
          className={`flex items-center gap-2 cursor-pointer  w-full px-4 py-2 -mx-4  text-emerald-900
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

export default Sidebar;
