/* eslint-disable react/prop-types */
import { StatusBadge } from "./../StatusBadge";
import Menu from "./../Menu/Menu";
import { useState, useEffect, useRef } from "react";
import MenuShipReturned from "../Menu/MenuShipReturned";

function ShipmentRow({ shipment, activeTab }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  return (
    <div className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-200 w-full">
      <div className="text-sm col-span-3 sm:col-span-2 text-center text-gray-800">
        # {shipment.id}
      </div>
      <div className="text-sm col-span-3 sm:col-span-3 text-center text-gray-800">
        <img
          src={shipment.company}
          alt="Shipping Company"
          className="w-14 h-7 object-contain rounded-md mx-auto"
        />
      </div>
      <div className="text-sm col-span-2 sm:col-span-3 text-center text-gray-800">
        {shipment.address}
      </div>
      <div className="text-sm col-span-2 sm:col-span-2 text-center text-gray-800">
        <StatusBadge status={shipment.status} />
      </div>
      <div className="text-sm col-span-2 sm:col-span-2 text-gray-800 text-center">
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => handleMenuToggle(shipment.id)}
            className="text-gray-400 hover:text-red-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 rotate-90 bg-red-100 rounded-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>

          {selectedRow === shipment.id && (
            <div className="absolute left-2 top-full mt-1 z-50">
              {activeTab === "return" || activeTab === "canceled" ? (
                <MenuShipReturned onClose={() => setSelectedRow(null)} />
              ) : (
                <Menu onClose={() => setSelectedRow(null)} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShipmentRow;
