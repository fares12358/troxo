// ShipmentStatus.js

import TicketModal from "./../Components/Modal/TicketModal";
import { useState } from "react";
import TicketDetails from "./../Components/Ticket/TicketDetails";

export const Ticket = () => {
  const [activeModal, setActiveModal] = useState(false);

  const handleAddTicketClick = () => {
    setActiveModal(true);
  };
  return (
    <div className="w-full px-4 mb-6 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-6 lg:mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800">
          تذاكر
        </h2>

        {/* Breadcrumb */}
        <nav
          className="mt-2 md:mt-3 text-sm md:text-base text-neutral-500"
          aria-label="breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li className="">الشحنات</li>
            <li aria-hidden="true" className="px-1">
              &gt;
            </li>
            <li aria-current="page" className="font-medium text-gray-800">
              تذاكر
            </li>
          </ol>
        </nav>

        {/* Tabs */}
        <section className="flex flex-col w-full p-4 mt-6 bg-white rounded-2xl md:p-6">
          <div className="flex flex-row  w-full gap-4 mb-6 max-lg:flex-col max-lg:items-start  items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              تذاكر
            </h2>
            {/* Search Box */}

            <div>
              <button
                onClick={handleAddTicketClick}
                className={`flex items-center cursor-pointer gap-2 px-4 py-2  font-medium text-pink-950 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2`}
                aria-label="إضافة منتج جديد"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">إضافة تذكرة</span>
              </button>
              {/* عرض المودال عند النقر */}
              {activeModal && (
                <TicketModal onClose={() => setActiveModal(false)} />
              )}
            </div>
          </div>

          {/* Table Section */}
          <div
            className="flex overflow-hidden  flex-col px-11 pt-10 mt-5 w-full rounded-2xl bg-slate-50 max-md:px-5 max-md:mt-3 max-md:max-w-full"
            dir="ltr"
          >
            <TicketDetails
              title="تذكرة - الأولى"
              ticketNumber="T-1234567"
              shipmentNumber="SH-1234567"
              companyName="SMSA"
              ticketDetails="تفاصيل التذكرة"
              ticketType="الغاء الشحنة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDate="2025-05-01"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <TicketDetails
              title="تذكرة - الثانية"
              ticketNumber="T-1134567"
              shipmentNumber="SH-1234567"
              companyName="SSH"
              ticketType="الغاء الشحنة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDetails="تفاصيل التذكرة"
              ticketDate="2025-05-01"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <TicketDetails
              title="تذكرة - الثالثة"
              ticketNumber="T-1232567"
              shipmentNumber="SH-1234567"
              companyName="SSH"
              ticketType="الغاء الشحنة"
              ticketDetails="تفاصيل التذكرة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDate="2025-05-01"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ticket;
