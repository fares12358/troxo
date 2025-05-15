import PrintReportCompany from "../../Components/Modal/PrintReportCompany";
import DashboardStats from "./../../Components/Company/DashboardStats";
import ShippingCompanyCard from "./../../Components/Company/ShippingCompanyCard";
import { useState } from "react";

const Company = () => {
  const shippingCompanies = [
    {
      logo: "/images/SMSACompany.png",
      name: "SMSA",
      stats: {
        ratingIcon: "/Icones/Star.svg",
      },
    },
    {
      logo: "/images/AramecsCompany.png",
      name: "أرامكس",
      stats: {
        ratingIcon: "/Icones/Star.svg",
      },
    },
    {
      logo: "/images/ExpressCompany.png",
      name: "فيدكس",
      stats: {
        ratingIcon: "/Icones/Star.svg",
      },
    },
    {
      logo: "/images/DHLCompany.png",
      name: "DHL",
      stats: {
        ratingIcon: "/Icones/Star.svg",
      },
    },
  ];
  const [showPrintModal, setShowPrintModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    // هنا ضع منطق إضافة المتجر (API call أو أي شيء آخر)

    // بعد نجاح الإضافة، عرض modal النجاح
    setShowPrintModal(true);
  };

  return (
    <main
      className="bg-white min-h-screen pb-20 px-4 sm:px-6 lg:pl-4"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <section className="w-full">
            <div className="flex flex-col mt-6 md:mt-9 w-full">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
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

              <DashboardStats />

              {/* Shipping Companies Section */}
              <div className="mt-6 md:mt-9">
                <h2 className="text-lg md:text-xl font-bold text-pink-950">
                  نظرة عامة مفصلة عن أداء شركات الشحن
                </h2>

                <p className="mt-2 md:mt-4 text-sm md:text-base leading-relaxed text-zinc-500 max-w-3xl">
                  استكشف أداء 4 شركات شحن مع إحصائيات مفصلة تشمل عدة شحنات،
                  التكلفة الإجمالية، وتفاصيل الأداء اليومية والأسبوعية والشهرية
                  - لوحة تحكم ذكية مصممة لتبسيط المراقبة وتحسين العمليات.
                </p>

                <div className="mt-6 grid grid-cols-2  max-sm:grid-cols-1   gap-4 md:gap-6">
                  {shippingCompanies.map((company, index) => (
                    <ShippingCompanyCard key={index} {...company} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Company;
