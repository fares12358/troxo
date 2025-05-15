/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import MenuTicket from "./../Menu/MenuTicket";
function TicketTableRow({ ticket }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const dropdownRef = useRef(null);
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
    <div className="grid grid-cols-12  gap-4 items-center  p-4 border-b border-gray-200 w-full">
      <div className="text-sm col-span-3 sm:col-span-2  text-center text-gray-800">
        {ticket.id}
      </div>
      <div className="text-sm col-span-2 sm:col-span-2  text-center text-gray-800">
        {ticket.shipmentId}
      </div>
      <div className="text-sm col-span-3 sm:col-span-3  text-center text-gray-800">
        {ticket.companyName}
      </div>
      <div className="text-sm col-span-2 sm:col-span-3  text-center text-gray-800  ">
        {ticket.tickettype}
      </div>
      <div
        className="text-sm col-span-2 sm:col-span-2  text-gray-800 text-center  "
        ref={dropdownRef}
      >
        <div className="relative inline-block">
          <button
            onClick={() => handleMenuToggle(ticket.id)}
            className="text-gray-400 hover:text-red-900"
          >
            <svg
              className="w-6 h-6 rotate-90 bg-red-100 rounded-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>

          {selectedRow === ticket.id && (
            <div className="absolute left-2 top-full mt-1 z-50">
              <MenuTicket onClose={() => setSelectedRow(null)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketTableRow;
