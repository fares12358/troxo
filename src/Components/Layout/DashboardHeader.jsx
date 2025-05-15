/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import NotificationsPanel from "../Notifications/NotificationsPanel";
import SettingsMenu from "../Settings/SettingsMenu";
import { NavLink } from "react-router";

const DashboardHeader = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const notificationsRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSettings(false);
  };

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
    setShowNotifications(false);
  };

  return (
    <header className="flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-start md:items-center py-3 px-4 w-full bg-red-100">
      {/* الجزء الأول: القائمة والترحيب */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-3">
          {/* قائمة الهامبرجر */}
          <button
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <img src="/Icones/MenuIcone.svg" alt="Menu" className="w-6 h-6" />
          </button>

          {/* الترحيب والمعلومات */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h2 className="text-lg md:text-xl font-extrabold">مرحبًا</h2>
            <p className="text-sm md:text-base">
              عبد الله <br className="md:hidden" /> #1255
            </p>
          </div>
        </div>

        {/* الأيقونات (للجوال فقط) */}
        <div className="flex items-center gap-3 md:hidden">
          <NavLink to="/admin">
            <button className="flex items-center cursor-pointer justify-center gap-2 px-4 py-2  rounded-lg shadow-sm border border-solid border-pink-950 text-sm md:text-base hover:bg-gray-50 transition-colors">
              <span>إدارة</span>
            </button>
          </NavLink>
          <button
            aria-label="Notifications"
            onClick={toggleNotifications}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <img
              src="/images/Notification.svg"
              alt="Notifications"
              className="w-5 h-5"
            />
          </button>

          {showNotifications && (
            <div className="absolute top-13 right-20 mt-2 z-50">
              <NotificationsPanel />
            </div>
          )}
          <button
            aria-label="World"
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <img
              src="/Icones/worldIcone.svg"
              alt="world icon"
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={toggleSettings}
            aria-label="User profile"
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <img
              src="/images/profileImage.png"
              alt="User profile"
              className="w-8 h-8 rounded-lg"
            />
          </button>
          {showSettings && (
            <div className="absolute top-14 right-10 mt-2 z-[100]">
              <SettingsMenu />
            </div>
          )}
        </div>
      </div>

      {/* الجزء الأوسط: البحث والأزرار */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:flex-1 md:justify-center">
        {/* شريط البحث */}
        <div className="flex items-center w-full md:max-w-[300px] gap-2 px-3 py-2 text-sm border border-solid border-pink-950 rounded-full ">
          <img src="/images/SearchIcone.svg" alt="Search" className="w-4 h-4" />
          <input
            type="search"
            placeholder="ابحث هنا..."
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* الأزرار */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <NavLink to="/home/shipments/addshipment">
            <button className="flex items-center cursor-pointer justify-center gap-2 px-3 py-2  rounded-lg shadow-sm border border-solid border-pink-950 text-sm md:text-base hover:bg-gray-50 transition-colors">
              <span>إضافة شحنة</span>
            </button>
          </NavLink>
          <NavLink to="/home/wallet">
            <button className="flex items-center cursor-pointer justify-center gap-2 px-3 py-2  rounded-lg shadow-sm border border-solid border-pink-950 text-sm md:text-base hover:bg-gray-50 transition-colors">
              <span>إضافة رصيد</span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* الأيقونات (لشاشات الكمبيوتر) */}
      <div className="max-md:hidden flex flex-wrap items-center gap-3  ">
        <NavLink to="/admin">
          <button className="flex items-center cursor-pointer justify-center gap-2 px-4 py-2  rounded-lg shadow-sm border border-solid border-pink-950 text-sm md:text-base hover:bg-gray-50 transition-colors">
            <span>إدارة</span>
          </button>
        </NavLink>
        <div className="relative" ref={notificationsRef}>
          <button
            aria-label="Notifications"
            onClick={toggleNotifications}
            className="p-1 hover:bg-gray-100 rounded-full focus:outline-none cursor-pointer"
          >
            <img
              src="/images/Notification.svg"
              alt="Notifications"
              className="w-5 h-5"
            />
          </button>
          {showNotifications && (
            <div className="absolute left-0 mt-2 z-50">
              <NotificationsPanel />
            </div>
          )}
        </div>

        <button
          aria-label="World"
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <img
            src="/Icones/worldIcone.svg"
            alt="world icon"
            className="w-5 h-5"
          />
        </button>

        <div className="relative" ref={settingsRef}>
          <button
            onClick={toggleSettings}
            aria-label="User profile"
            className="hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          >
            <img
              src="/images/profileImage.png"
              alt="User profile"
              className="w-9 h-9 rounded-lg"
            />
          </button>
          {showSettings && (
            <div className="absolute left-0 mt-2 z-[100]">
              <SettingsMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
