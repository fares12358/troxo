const DashboardStats = () => {
    const stats = [
      {
        title: "إجمالي الشحنات",
        value: "15,230",
        icon: "📦",
        description: "الشحنات",
        color: "text-pink-950"
      },
      {
        title: "الشحنات الناجحة",
        value: "13,800",
        icon: "✅",
        description: "الشحنات (90%)",
        color: "text-green-600"
      },
      {
        title: "الشحنات المرتجعة",
        value: "430",
        icon: "🔄",
        description: "الشحنات (5%)",
        color: "text-red-600"
      },
      {
        title: "إجمالي الإيرادات",
        value: "250,000",
        icon: "",
        img:"/Icones/Income.svg",
        description: "ريال سعودي",
        color: "text-amber-500"
      },
      {
        title: "معدل الشحن اليومي",
        value: "510",
        icon: "📊",
        description: "شحنة/يوم",
        color: "text-blue-600"
      }
    ];
  
    return (
      <section 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 my-6 bg-white rounded-3xl border-2 border-red-100 border-opacity-40"
        aria-label="إحصائيات الشحن"
      >
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col p-4 ${index !== stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-dashed border-slate-200' : ''}`}
          >
            <h3 className="text-sm font-bold text-pink-950 mb-2">
              {stat.title}
            </h3>
            <div className="flex items-center gap-2">
              {stat.icon ? (
                <span className="text-2xl font-semibold">{stat.icon}</span>
              ) : (
                <img src={stat.img} alt={stat.title} className="w-8 h-8" />
              )}
              <p className={`text-2xl font-semibold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {stat.description}
            </p>
          </div>
        ))}
      </section>
    );
  };
  
  export default DashboardStats;