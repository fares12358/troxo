/* eslint-disable react/prop-types */
import { useState } from "react";

const PerformanceInsights = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="p-6 mt-10 w-full rounded-2xl border border-solid bg-zinc-50 border-pink-950 border-opacity-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-pink-950">
            رؤى الأداء للشركات
          </h2>
          <p className="mt-2 text-sm font-medium text-zinc-500">
            مؤشرات التشغيل الرئيسية لتقييم أداء الشركة في لمحة.
          </p>
        </div>
        <button
          onClick={toggleDetails}
          className="flex items-center gap-1 px-3 py-2 text-base font-semibold bg-red-100 rounded-md text-pink-950 hover:bg-red-200 transition-colors"
        >
          <span>{showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل"}</span>
          <img
            src="/Icones/ReadMore.svg"
            alt="arrow icon"
            className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
              showDetails ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <h3 className="mb-5 text-lg font-bold text-pink-950">
        إحصائيات الشحن للشركاء
      </h3>

      {showDetails && (
        <div className="bg-white rounded-2xl border border-solid border-pink-950 border-opacity-20 overflow-hidden">
          <div className="p-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h4 className="text-base font-semibold text-stone-900">
                قسم أداء الشركة
              </h4>
              <button className="flex items-center gap-2 px-4 py-2 font-medium text-neutral-600 hover:bg-gray-100 rounded">
                <img
                  src="/Icones/Filter.svg"
                  alt="filter icon"
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                <span>تصفية</span>
              </button>
            </div>

            <div className="overflow-x-auto block max-h-[320px] overflow-y-auto">
              <div className="relative">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300 sticky top-0 bg-white z-10">
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        رقم.
                      </th>
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        اسم الشركة
                      </th>
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        إجمالي الشحنات
                      </th>
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        وقت التسليم
                      </th>
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        تقييم العميل
                      </th>
                      <th className="px-3 py-3 text-sm font-semibold text-gray-500 text-center">
                        الإيرادات
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <CompanyRow
                      number="01"
                      name="smsa"
                      shipments="1500 شحنة"
                      deliveryTime="2.5 يوم"
                      rating="4.8/5"
                      revenue="50000 دولار"
                    />
                    <CompanyRow
                      number="02"
                      name="DHL"
                      shipments="1200 شحنة"
                      deliveryTime="3.0 يوم"
                      rating="4.8/5"
                      revenue="40000 دولار"
                    />
                    <CompanyRow
                      number="03"
                      name="aramex"
                      shipments="900 شحنة"
                      deliveryTime="1.8 يوم"
                      rating="4.8/5"
                      revenue="30000 دولار"
                    />
                    <CompanyRow
                      number="04"
                      name="fedex"
                      shipments="1500 شحنة"
                      deliveryTime="3.0 يوم"
                      rating="4.8/5"
                      revenue="20000 دولار"
                    />
                    <CompanyRow
                      number="05"
                      name="شركة 5"
                      shipments="1800 شحنة"
                      deliveryTime="2.2 يوم"
                      rating="4.7/5"
                      revenue="45000 دولار"
                    />
                    <CompanyRow
                      number="06"
                      name="شركة 6"
                      shipments="1100 شحنة"
                      deliveryTime="3.5 يوم"
                      rating="4.9/5"
                      revenue="35000 دولار"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PerformanceInsights;

const CompanyRow = ({
  number,
  name,
  shipments,
  deliveryTime,
  rating,
  revenue,
}) => {
  return (
    <tr className="hover:bg-gray-50 border-b border-gray-200">
      <td className="px-4 py-3 text-xs font-bold text-center w-10">{number}</td>
      <td className="px-4 py-3 text-center text-sm capitalize">
        <div className="flex items-center justify-center">
          <span className=" px-3 py-1 rounded-lg bg-gray-100">{name}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-base font-semibold text-center">
        {shipments}
      </td>
      <td className="px-4 py-3 text-base font-semibold text-gray-500 text-center">
        {deliveryTime}
      </td>
      <td className="px-4 py-3 text-base font-medium text-gray-500 text-center">
        {rating}
      </td>
      <td className="px-4 py-3 text-center">
        <div className="flex items-center justify-center">
          <span className=" px-4 py-1 text-base bg-red-100 rounded-lg text-pink-950">
            {revenue}
          </span>
        </div>
      </td>
    </tr>
  );
};
