/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import NotificationsPanel from "../Notifications/NotificationsPanel";

const AdminDashHeader = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className=" z-40 flex flex-col md:flex-row justify-between items-start md:items-center py-3 px-4 w-full bg-white border-b border-gray-200 shadow-sm">
      {/* الجزء الأول: القائمة والبحث */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* زر القائمة للجوال */}
        <button
          className="md:hidden p-1 rounded-lg hover:bg-gray-100"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <img src="/Icones/MenuIcone.svg" alt="Menu" className="w-6 h-6" />
        </button>

        {/* شريط البحث */}
        <div className="flex items-center mx-4 md:mx-0 w-full max-w-md">
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src="/images/SearchIcone.svg"
                alt="Search"
                className="w-4 h-4 text-gray-400"
              />
            </div>
            <input
              type="search"
              placeholder="ابحث هنا..."
              className="w-full pr-10 pl-4 py-2 text-sm border border-pink-950 rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-pink-500"
            />
          </div>
        </div>
      </div>

      {/* الجزء الثاني: الأزرار والإشعارات */}
      <div className="flex items-center flex-row-reverse gap-3 mt-3 md:mt-0">
       
      
        {/* زر الإشعارات */}
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={toggleNotifications}
            className="p-2 rounded-full hover:bg-gray-100  focus:outline-none"
            aria-label="Notifications"
          >
            <img
              src="/images/Notification.svg"
              alt="Notifications"
              className="w-5 h-5"
            />
          </button>

          {showNotifications && (
            <div className="absolute max-md:-right-18 max-md:top-7 left-16 top-6 mt-2 max-md:w-72 w-80 z-50">
              <NotificationsPanel />
            </div>
          )}
        </div>
        <NavLink to="/home">
          <button className="flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium rounded-lg border border-pink-950 hover:bg-gray-50 transition-colors">
            <span>مستخدم</span>
          </button>
        </NavLink>

      </div>
    </header>
  );
};

export default AdminDashHeader;
