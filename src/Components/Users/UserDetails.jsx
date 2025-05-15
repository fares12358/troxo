/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";

function UserDetails({
  title,
  userNumber,
  userName,
  wallet,
  cashOnDelivery,
  numberStores,
  numberLocalShipments,
  numberGlobalShipments,
  dateLastShipment,
  amountLastWallet,
  currency,
  imageUrl,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
                رقم المستخدم
              </label>
              <span className="text-sm md:text-base font-semibold block">
                {userNumber}
              </span>
            </div>
            <div className="min-w-[120px]">
              <label className="block text-xs md:text-sm text-gray-500 mb-1">
                اسم المستخدم
              </label>
              <span className="text-sm md:text-base font-semibold block">
                {userName}
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

        {/* قسم تفاصيل العنوان */}
        {showDetails && (
          <div className="text-right border-t border-gray-200 pt-4 mt-4">
            <div className="grid grid-cols-3 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-2 gap-3 md:gap-4">
              <div className="">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  المحفظة
                </label>
                <span className="text-sm md:text-base font-semibold block">
                  {wallet}
                </span>
              </div>
              <div className="">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  الدفع عند الاستلام
                </label>
                <span className="text-sm md:text-base font-semibold block">
                  {cashOnDelivery}
                </span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  عدد المتاجر
                </label>
                <span className="text-sm md:text-base">{numberStores}</span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  عدد الشحنات المحلية
                </label>
                <span className="text-sm md:text-base">
                  {numberLocalShipments}
                </span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  عدد الشحنات الدولية
                </label>
                <span className="text-sm md:text-base">
                  {numberGlobalShipments}
                </span>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  تاريخ اخر شحنة
                </label>
                <span className="text-sm md:text-base">{dateLastShipment}</span>
              </div>

              <div className="">
                <label className="block text-xs md:text-sm text-gray-500 mb-1">
                  مبلغ اخر شحنة المحفظة
                </label>
                <div className="text-sm md:text-base flex items-center   font-medium">
                  <span>{amountLastWallet}</span>
                  <img src={currency} alt="currency" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  title: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
  cashOnDelivery: PropTypes.string.isRequired,
  numberStores: PropTypes.string.isRequired,
  numberLocalShipments: PropTypes.string.isRequired,
  numberGlobalShipments: PropTypes.string.isRequired,
  dateLastShipment: PropTypes.string.isRequired,
  amountLastWallet: PropTypes.string.isRequired,
  currency: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default UserDetails;
