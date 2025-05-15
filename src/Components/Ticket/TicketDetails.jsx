/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import AnswerTicketModal from "../Modal/AnswerTicketModal";

function TicketDetails({
  title,
  ticketNumber,
  ticketDetails,
  shipmentNumber,
  companyName,
  ticketType,
  clientNumber,
  ticketStatus,
  ticketDate,
  answerticket,
  imageUrl,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showAnswerTicketModal, setShowAnswerTicketModal] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleAnswerTicketModal = () => {
    setShowAnswerTicketModal(!showAnswerTicketModal);
  };

  return (
    <div className="text-right mb-4" dir="rtl">
      <h3 className="text-base md:text-lg mb-2 font-semibold text-red-400">
        {title}
      </h3>
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-2xl shadow-sm">
        {/* الصف العلوي: معلومات التذكرة الأساسية */}
        <div className="flex  justify-between items-center mb-4 md:mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div className="min-w-[120px]">
              <label className="block text-xs md:text-sm text-gray-500 mb-1">
                رقم التذكرة
              </label>
              <span className="text-sm md:text-base font-semibold block">
                {ticketNumber}
              </span>
            </div>
            <div className="min-w-[120px]">
              <label className="block text-xs md:text-sm text-gray-500 mb-1">
                رقم الشحنة
              </label>
              <span className="text-sm md:text-base font-semibold block">
                {shipmentNumber}
              </span>
            </div>
            <div className="min-w-[120px] flex items-center max-md:justify-between justify-start gap-2">
              <h4 className="text-base md:text-lg font-semibold text-pink-900 ">
                تفاصيل اضافية
              </h4>
              {imageUrl && (
                <button
                  onClick={toggleDetails}
                  className="cursor-pointer ml-2 md:ml-0 flex-shrink-0"
                  aria-label={showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className={`w-6 h-6 md:w-7 md:h-7 ${
                      showDetails ? "rotate-90" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* قسم تفاصيل التذكرة تحت العناصر الأساسية */}

        {/* قسم تفاصيل العنوان */}
        {showDetails && (
          <div className="text-right border-t border-gray-200 pt-4 mt-4">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 gap-3 md:gap-4">
              <div className="">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  اسم الشركة
                </label>
                <span className="text-sm md:text-base font-semibold block">
                  {companyName}
                </span>
              </div>
              <div className="">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  نوع التذكرة
                </label>
                <span className="text-sm md:text-base font-semibold block">
                  {ticketType}
                </span>
              </div>

              {answerticket && (
                <div>
                  <label className="block text-xs md:text-sm text-gray-500 mb-1">
                    رد على التذكرة
                  </label>
                  <span className="text-sm md:text-base">
                    <button
                      className="cursor-pointer"
                      onClick={handleAnswerTicketModal}
                      aria-label="الرد على التذكرة"
                    >
                      <img
                        src={answerticket}
                        alt="رد التذكرة"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </button>
                  </span>
                  {showAnswerTicketModal && (
                    <AnswerTicketModal
                      onClose={() => setShowAnswerTicketModal(null)}
                    />
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  رقم العميل
                </label>
                <span className="text-sm md:text-base">{clientNumber}</span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  حالة التذكرة
                </label>
                <span className="text-sm md:text-base">{ticketStatus}</span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  تاريخ التذكرة
                </label>
                <span className="text-sm md:text-base">{ticketDate}</span>
              </div>

              <div className="col-span-2">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  تفاصيل التذكرة
                </label>
                <div className="text-sm md:text-base bg-gray-50 border border-gray-200 pr-2 pl-12 py-3 text-right rounded-lg font-medium">
                  {ticketDetails}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

TicketDetails.propTypes = {
  title: PropTypes.string.isRequired,
  ticketNumber: PropTypes.string.isRequired,
  ticketDetails: PropTypes.string,
  shipmentNumber: PropTypes.string,
  companyName: PropTypes.string,
  ticketType: PropTypes.string,
  clientNumber: PropTypes.string,
  ticketStatus: PropTypes.string,
  ticketDate: PropTypes.string,
  answerticket: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default TicketDetails;
