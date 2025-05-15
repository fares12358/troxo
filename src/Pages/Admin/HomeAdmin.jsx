import PerformanceInsights from "./../../Components/HomeAdmin/PerformanceInsights";
import DashboardStats from "./../../Components/HomeAdmin/DashboardStats";

const HomeAdmin = () => {
  return (
    <div className="w-full mb-10 px-4 md:px-6 " dir="rtl">
      <main className="mx-auto max-w-7xl">
        {/* قسم الإحصائيات الرئيسية */}
        <section className="mt-6 md:mt-8 lg:mt-10">
          <DashboardStats />
        </section>

        {/* قسم رؤى الأداء */}
        <section className="mt-10  md:mt-12 lg:mt-14">
          <PerformanceInsights />
        </section>
      </main>
    </div>
  );
};

export default HomeAdmin;
