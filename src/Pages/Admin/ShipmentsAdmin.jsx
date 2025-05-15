import StatCardAdmin from "./../../Components/StatCardAdmin";
import PrintReportModal from "./../../Components/Modal/PrintReportModal";
import { useState } from "react";
import { NavLink } from "react-router";

const ShipmentsAdmin = () => {
  // تنسيق التاريخ باللغة العربية
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const arabicDate = new Date().toLocaleDateString("ar-SA", options);
  const [showPrintModal, setShowPrintModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    // هنا ضع منطق إضافة المتجر (API call أو أي شيء آخر)

    // بعد نجاح الإضافة، عرض modal النجاح
    setShowPrintModal(true);
  };

  return (
    <section className="px-4 md:px-6 w-full" dir="rtl">
      <div className="w-full max-w-7xl mx-auto">
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              إحصائيات الشحن
            </h2>
            <time className="text-sm text-gray-500 mt-1 block">
              {arabicDate}
            </time>
          </div>
          <div className="flex gap-2 items-center">
            <button
            onClick={onSubmit}
            className="flex items-center cursor-pointer gap-2 px-4 py-3 text-base font-medium rounded-2xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <span>طباعة التقرير</span>
            <img
              src="/Icones/PrintReport.svg"
              alt="أيقونة الطباعة"
              className="w-5 h-5"
            />
          </button>
          <NavLink to="/admin/shipments/details">
          <button
            className="flex items-center cursor-pointer gap-2 px-4 py-3 text-base font-medium rounded-2xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <span>تفاصيل</span>
            <img
              src="/Icones/details.svg"
              alt="أيقونة التفاصيل"
              className="w-5 h-5"
            />
          </button></NavLink>
          </div>
          
          {showPrintModal && (
            <PrintReportModal onClose={() => setShowPrintModal(false)} />
          )}
        </div>

        {/* بطاقات الإحصائيات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCardAdmin
            title="عدد الشحنات الدولية"
            value="155"
            change="+5%"
            period="مقارنة باليوم السابق"
            iconSrc="/images/ShippingMonth.svg"
            borderColor="border-indigo-500"
            textColor="text-indigo-500"
          />

          <StatCardAdmin
            title="عدد الشحنات المبردة"
            value="144"
            change="5.39%"
            period="فترة التغيير"
            iconSrc="/Icones/ShippingAverage.svg"
            borderColor="border-rose-400"
            textColor="text-rose-400"
          />

          <StatCardAdmin
            title="إجمالي عدد الشحنات المجمدة"
            value="298"
            change="+5%"
            period="مقارنة باليوم السابق"
            iconSrc="/Icones/Frozen.svg"
            borderColor="border-[#7BAED3]"
            textColor="text-[#7BAED3]"
          />

          <StatCardAdmin
            title="عدد الشحنات المحلية"
            value="250"
            change="5.39%"
            period="فترة التغيير"
            iconSrc="/images/AllShipping.svg"
            borderColor="border-pink-950 border-opacity-60"
            textColor="text-pink-950"
          />

          <StatCardAdmin
            title="عدد الشحنات المعبأة"
            value="155"
            change="+5%"
            period="مقارنة باليوم السابق"
            iconSrc="/images/ShippingMonth.svg"
            borderColor="border-indigo-500"
            textColor="text-indigo-500"
          />

          <StatCardAdmin
            title="عدد الشحنات الملغاة"
            value="15"
            change="6.84%"
            period="فترة التغيير"
            iconSrc="/images/Rebot.svg"
            borderColor="border-[#7FA695]"
            textColor="text-[#7FA695]"
          />

          <StatCardAdmin
            title="عدد التذاكر"
            value="298"
            change="+5%"
            period="مقارنة باليوم السابق"
            iconSrc="/Icones/Tickets.svg"
            borderColor="border-[#7BAED3]"
            textColor="text-[#7BAED3]"
          />

          <StatCardAdmin
            title="عدد شحنات الدفع عند التسليم"
            value="520"
            change="5.39%"
            period="فترة التغيير"
            iconSrc="/images/DeliveryTime.svg"
            borderColor="border-orange-500"
            textColor="text-orange-500"
          />

          <StatCardAdmin
            title="أكثر مدينة إرسالاً"
            value="الرياض"
            change=""
            period=""
            iconSrc="/Icones/CityMost.svg"
            borderColor="border-rose-400"
            textColor="text-rose-400"
          />
        </div>
      </div>
    </section>
  );
};

export default ShipmentsAdmin;
