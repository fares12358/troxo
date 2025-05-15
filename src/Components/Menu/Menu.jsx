/* eslint-disable react/prop-types */
import { MenuItem } from "./MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router";
import CancelShipmentModal from "../Modal/CancelShipmentModal";
import TicketModal from "../Modal/TicketModal";

const menuItems = [
  {
    text: "طباعة البوليصة",
    textColor: "text-sky-600",
    icon: `/Icones/Print.svg`,
    action: "print",
  },
  {
    text: "تتبع الشحنة",
    textColor: "text-amber-500",
    icon: `/Icones/Tracking.svg`,
    action: "track",
  },
  {
    text: "رفع التذكرة",
    textColor: "text-emerald-600",
    icon: `/Icones/RiceTicket.svg`,
    action: "ticket",
  },
  {
    text: "ارجاع الشحنة",
    textColor: "text-blue-600",
    icon: `/Icones/Processing.svg`,
    action: "return",
  },
  {
    text: "الغاء الشحنة",
    textColor: "text-orange-600",
    icon: `/Icones/Cancel.svg`,
    action: "cancel",
  },
];

export default function Menu({ onClose }) {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const handleMenuItemClick = (action) => {
    if (action === "cancel") {
      setActiveModal("cancel");
    }
    if (action === "return") {
      setActiveModal("return");
    }
    if (action === "ticket") {
      setActiveModal("ticket");
    }
    // يمكنك إضافة حالات أخرى هنا
  };
  return (
    <div
      className="bg-white rounded-lg shadow-sm w-[185px] py-2 border border-gray-200"
      // منع إغلاق القائمة عند النقر عليها
    >
      <div className="flex flex-col items-start space-y-1 px-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            icon={item.icon}
            textColor={item.textColor}
            className="hover:bg-gray-100 rounded px-2 py-1"
            onClick={() => handleMenuItemClick(item.action)}
          />
        ))}
        {/* عرض المودال عند النقر */}
        {activeModal === "cancel" && (
          <CancelShipmentModal
            onClose={() => {
              setActiveModal(null);
              onClose(); // إغلاق القائمة بعد إغلاق المودال
            }}
          />
        )}
        {activeModal === "ticket" && (
          <TicketModal
            onClose={() => {
              setActiveModal(null);
              onClose(); // إغلاق القائمة بعد إغلاق المودال
            }}
          />
        )}
        {activeModal === "return" && navigate("/home/shipments/checkout")}
      </div>
    </div>
  );
}
