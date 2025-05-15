const SalesChart = () => {
    const companies = [
      {
        icon: "/images/AramecsCompany.png",
        company: "شركة أرامكس",
        value: "8.823",
        valueColor: "text-red-600",
      },
      {
        icon: "/images/FedexCompany.png",
        name: "المبيعات الشهرية",
        company: "شركة فيديكس",
        value: "12.122",
        valueColor: "text-violet-900",
      },
      {
        icon: "/images/ExpressCompany.png",
        name: "المبيعات الشهرية",
        company: "سمسا إكسبريس",
        value: "20.00",
        valueColor: "text-violet-900",
      },
    ];
  
    return (
      <section className="relative flex flex-col px-4 py-6 bg-white border border-gray-300 rounded-lg shadow max-md:mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-6">الهدف مقابل الواقع</h2>
        
       {/* Bar Chart */}
<div className="flex justify-around gap-3 mb-8">
  {["يناير", "فبراير", "مارس", "أبريل", "مايو"].map((month, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <div className="flex gap-1 items-end">
        {/* الأعمدة الثلاثة جنبًا إلى جنب */}
        <div className="w-3 bg-red-400 h-[80px] rounded" /> {/* الهدف */}
        <div className="w-3 bg-purple-800 h-[100px] rounded" /> {/* الواقع */}
        <div className="w-3 bg-green-500 h-[90px] rounded" /> {/* الأداء */}
      </div>
      <span className="text-xs text-gray-600 mt-2">{month}</span>
    </div>
  ))}
</div>
  
        {/* Company Details */}
        <div className="space-y-3">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={company.icon}
                  alt={company.name}
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{company.name}</p>
                  <span className="text-xs text-gray-500">{company.company}</span>
                </div>
              </div>
              <span className={`text-sm font-bold ${company.valueColor}`}>
                {company.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SalesChart;