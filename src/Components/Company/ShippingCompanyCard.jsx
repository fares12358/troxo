/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router";

const ShippingCompanyCard = ({
  logo,
  name,
  stats = {},
  additionalNotes = "ملاحظات إضافية",
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const companyData = {
    cities: "الرياض",
    stats: {
      totalShipments: 1500,
      delayedShipments: { count: 320, percentage: "20%" },
      returnedShipments: { count: 20, percentage: "5%" },
      completedShipments: { count: 10, percentage: "95%" },
      deliveryTime: "2.5 يوم",
      rating: 4.8,
      dailyRevenue: "50,000 ريال",
    },
  };

  const toggleCompanyStatus = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <article
      className={`flex flex-col w-full bg-white rounded-2xl border border-[#4D1A2D]/16 border-opacity-20 overflow-hidden transition-all duration-300 ${
        isDisabled ? "opacity-70" : ""
      }`}
    >
      {/* Header Section */}
      <header className="flex max-lg:flex-col flex-row justify-between max-lg:items-start items-center p-4 md:p-6 bg-stone-50 gap-4">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={`شعار ${name}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h3 className="text-xl font-bold text-stone-900">{name}</h3>
            <p className="text-sm text-neutral-500 mt-1">{additionalNotes}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCompanyStatus}
            className={`text-sm font-bold ${
              isDisabled ? "text-red-600" : "text-stone-900"
            }`}
          >
            {isDisabled ? "تعطيل المتجر" : "تفعيل المتجر"}
          </button>

          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!isDisabled}
              onChange={toggleCompanyStatus}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer  peer-checked:bg-blue-500 transition-colors">
              <div
                className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${
                  !isDisabled ? "" : "translate-x-5"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </header>

      {/* Stats Section */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Cities Section */}
          <div className="flex justify-between items-center">
            <h4 className="text-gray-700">أهم المدن</h4>
            <div className="text-xl font-semibold">
              <span>{companyData.cities}</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-4">
            {/* Each Stat Row now contains both label and value */}
            <div className="flex justify-between items-center">
              <span className="text-gray-700">إجمالي الشحنات</span>
              <StatValue value={companyData.stats.totalShipments} unit="شحنة" />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">الشحنات المتأخرة</span>
              <StatValue
                value={companyData.stats.delayedShipments.count}
                percentage={companyData.stats.delayedShipments.percentage}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">الشحنات المرتجعة</span>
              <StatValue
                value={companyData.stats.returnedShipments.count}
                percentage={companyData.stats.returnedShipments.percentage}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">الشحنات المكتملة</span>
              <StatValue
                value={companyData.stats.completedShipments.count}
                percentage={companyData.stats.completedShipments.percentage}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">وقت التسليم</span>
              <StatValue value={companyData.stats.deliveryTime} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">تقييم العملاء</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">
                  {companyData.stats.rating}/5
                </span>
                <img
                  src={stats.ratingIcon || "/default-rating-icon.svg"}
                  alt="تقييم"
                  className="w-5 h-5"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">الإيرادات اليومية</span>
              <div className="px-3 py-2 bg-red-100 rounded-lg inline-block">
                <span className="font-medium text-pink-950">
                  {companyData.stats.dailyRevenue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 border-t border-[#4D1A2D]/16 border-opacity-20 flex justify-between items-center">
        <p className="text-sm text-pink-950 font-medium">
          اكتشف المزيد عن الشركة الآن!
        </p>
        <NavLink to="/admin/company/details">
          <button className="flex items-center gap-1 px-3 py-2 bg-red-100 hover:bg-red-200 rounded-md text-pink-950 font-medium transition-colors">
            اقرأ المزيد
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </NavLink>
      </footer>
    </article>
  );
};

// Helper Components

const StatValue = ({ value, unit, percentage, color = "text-stone-900" }) => (
  <div className="flex items-baseline gap-2">
    <span className={`text-xl font-semibold ${color}`}>{value}</span>
    {unit && <span className="text-sm text-gray-600">{unit}</span>}
    {percentage && (
      <span className="text-xs text-gray-500">شحنات({percentage})</span>
    )}
  </div>
);

export default ShippingCompanyCard;
