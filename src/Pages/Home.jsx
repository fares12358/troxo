import StatCard from "./../Components/StatCard";
// import ProductTable from "./../Components/Product/ProductTable";
// import SalesChart from "./../Components/SalesCart";
import { useLocation } from "react-router";
import { useState } from "react";
import WelcomeModal from "../Components/Modal/WelcomeModal";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (location.state?.showWelcomeModal) {
      setShowWelcomeModal(true);
      window.history.replaceState({}, "");
    }
  }, [location.state]);
  return (
    <section
      className="flex flex-col px-4 mb-4 md:px-8 mt-4 md:mt-6 w-full"
      dir="rtl"
    >
      {showWelcomeModal && (
        <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
      )}
      {/* العنوان والمسار */}
      <div className="self-start text-right">
        <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase">
          لوحة التحكم
        </h1>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-neutral-500">
          الرئيسية
        </p>
      </div>

      {/* بطاقات الإحصائيات - الصف الأول */}
      <div className="mt-4 md:mt-6 w-full">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2  gap-2 md:gap-3">
          <StatCard
            title="الشحنات شهريًا"
            value="155"
            change="+5%"
            period="مقارنة باليوم السابق"
            icon="/images/ShippingMonth.svg"
            borderColor="border-indigo-500"
            textColor="text-indigo-500"
            compact
          />

          <StatCard
            title="إجمالي العملاء"
            value="298"
            change="+5%"
            period="مقارنة باليوم السابق"
            icon="/images/AllClients.svg"
            borderColor="border-[#7BAED3]"
            textColor="text-[#7BAED3]"
            compact
          />

          <StatCard
            title="إجمالي الشحنات"
            value="250"
            change="5.39%"
            period="فترة التغيير"
            icon="/images/AllShipping.svg"
            borderColor="border-pink-950"
            textColor="text-pink-950"
            borderOpacity="border-opacity-60"
            compact
          />

          <StatCard
            title="مرتجع"
            value="15"
            change="6.84%"
            period="فترة التغيير"
            icon="/images/Rebot.svg"
            borderColor="border-[#7FA695]"
            textColor="text-[#7FA695]"
            compact
          />
        </div>
      </div>

      {/* الجدول والرسم البياني */}
      {/* <div className="mt-4 md:mt-6 w-full">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
          <div className="w-full lg:w-[68%]">
            <ProductTable />
          </div>
          <div className="w-full lg:w-[32%]">
            <SalesChart />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
