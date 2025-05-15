import DashboardStats from "./../../Components/Company/DashboardStats";
import CompanyForm from "./../../Components/Company/CompanyForm";
import CompanyCard from "./../../Components/Company/CompanyCard";
import PrintReportCompany from "../../Components/Modal/PrintReportCompany";
import { useState } from "react";

function CompanyDetails() {
  const [showPrintModal, setShowPrintModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    // هنا ضع منطق إضافة المتجر (API call أو أي شيء آخر)

    // بعد نجاح الإضافة، عرض modal النجاح
    setShowPrintModal(true);
  };
  return (
    <section className="w-full mb-6 px-4 md:px-6" dir="rtl">
      <div className="mt-8 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl font-medium text-neutral-600">
              إحصائيات اليوم
            </h1>
            <time className="text-sm text-neutral-400">
              الثلاثاء، 14 نوفمبر 2022، 11:30 صباحًا
            </time>
          </div>
          <button
            onClick={onSubmit}
            className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 text-lg font-medium rounded-2xl border border-neutral-400 hover:bg-gray-50 transition-colors"
          >
            <span>طباعة التقرير</span>
            <img
              src="/Icones/PrintReport.svg"
              alt="Print icon"
              className="w-5 h-5"
            />
          </button>
          {showPrintModal && (
            <PrintReportCompany onClose={() => setShowPrintModal(false)} />
          )}
        </div>

        {/* Dashboard Stats */}
        <div className="mb-6">
          <DashboardStats />
        </div>

        {/* Company Card */}
        <div className="mb-6">
          <CompanyCard />
        </div>

        {/* Shipping Companies Section */}
        <div className="mt-6 md:mt-9">
          <CompanyForm />
        </div>
      </div>
    </section>
  );
}

export default CompanyDetails;
