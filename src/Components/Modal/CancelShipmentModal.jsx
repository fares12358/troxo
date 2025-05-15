/* eslint-disable react/prop-types */
import { useState } from "react";

const CancelShipmentModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    ticketNumber: "T-1234567",
    shipmentNumber: "",
    companyName: "",
    ticketType: "",
    additionalComplaints: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[10000] flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 bg-slate-50 rounded-t-2xl">
          <span className="text-base font-medium text-red-500">
            الغاء الشحنة
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="إغلاق النافذة"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M14.3936 9.59473L9.60156 14.3867"
                stroke="#FC746C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3956 14.3898L9.59961 9.59277"
                stroke="#FC746C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z"
                stroke="#FC746C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto"
        >
          <h2 className="text-xl font-bold text-right mb-2 text-indigo-950">
            الغاء الشحنة
          </h2>
          <p className="text-gray-600 mb-6 text-right">
            يمكنك الغاء الشحنة من هنا
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ticket Number */}

            {/* Shipment Number */}
            <div className=" text-start mb-4">
              <label
                htmlFor="shipmentNumber"
                className="block mb-2 font-bold text-indigo-950"
              >
                رقم الشحنة
              </label>
              <input
                id="shipmentNumber"
                type="text"
                placeholder="رقم الشحنة"
                value={formData.shipmentNumber}
                onChange={handleChange}
                className="p-3 w-full rounded-lg border border-gray-200 transition-colors"
              />
            </div>

            {/* Company Name */}

            {/* Ticket Type */}
            <div className=" text-start mb-4">
              <label
                htmlFor="ticketType"
                className="block mb-2 font-bold text-indigo-950"
              >
                سبب الغاء الشحنة
              </label>
              <select
                id="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                className="p-3 w-full rounded-lg border border-gray-200 transition-colors"
              >
                <option value="" disabled>
                  سبب الغاء الشحنة
                </option>
                <option value="noShipment">لم اعد الشحن</option>
                <option value="changeCompany">اريد تغير شركة الشحن</option>
              </select>
            </div>

            {/* Additional Complaints - Full width */}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 w-full md:w-auto text-base font-bold bg-red-100 rounded-2xl text-pink-950 hover:bg-red-200 transition-colors  "
            >
              الغاء الشحنة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelShipmentModal;
