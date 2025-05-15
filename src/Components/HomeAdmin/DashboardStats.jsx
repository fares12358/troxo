import PrintReportModal from "../Modal/PrintReportModal";
import StatCard from "./StatCard";
import { useState } from "react";

const DashboardStats = () => {
  // تنسيق التاريخ باللغة العربية
  const arabicDate = new Date().toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const [showPrintModal, setShowPrintModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    // هنا ضع منطق إضافة المتجر (API call أو أي شيء آخر)

    // بعد نجاح الإضافة، عرض modal النجاح
    setShowPrintModal(true);
  };

  return (
    <div className="mx-4 lg:mx-8">
      <div className=" mb-6 flex flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            إحصائيات اليوم
          </h2>
          <p className="text-sm text-gray-500 mt-1">{arabicDate}</p>
        </div>

        <button
          onClick={onSubmit}
          className="flex items-center cursor-pointer gap-2 px-4 py-3 text-base font-medium rounded-xl border border-black  hover:bg-gray-50 transition-colors shadow-xs"
          aria-label="طباعة التقرير"
        >
          <span>طباعة التقرير</span>
          <img
            src="/Icones/PrintReport.svg"
            alt="Print Report"
            className="w-5 h-5"
            aria-hidden="true"
          />
        </button>
        {showPrintModal && (
          <PrintReportModal onClose={() => setShowPrintModal(false)} />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* عنوان التقرير وزر التحكم */}

        {/* بطاقة الإيرادات */}
        <div className="md:col-span-1">
          <StatCard
            title="إجمالي الإيرادات"
            amount="1,700"
            Picture="/Icones/AllIncome.svg"
            icon="/Icones/Currency.svg"
            currency="ر.س"
            trend="up"
          />
        </div>

        {/* بطاقة الطلبات المكتملة */}
        <div className="md:col-span-1">
          <StatCard
            title="إجمالي الطلبات المكتملة"
            amount="2,500"
            Picture="/Icones/CompleteOrder.svg"
            unit="طلب"
            trend="up"
          />
        </div>

        {/* بطاقة الرصيد المستحق */}
        <div className="md:col-span-1">
          <StatCard
            title="الرصيد المستحق"
            amount="300,000"
            Picture="/Icones/CreditCard.svg"
            icon="/Icones/Currency.svg"
            currency="ر.س"
          />
        </div>

        {/* بطاقة معدل النمو */}
        <div className="md:col-span-1">
          <StatCard
            title="معدل النمو العام"
            amount="+%12"
            Picture="/Icones/AverageGrow.svg"
            trend="up"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
