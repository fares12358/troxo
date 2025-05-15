const ProductTable = () => {
    const products = [
      {
        name: "ملابس رياضية متوفرة",
        store: "جول الذهبي",
        weight: "186",
        quantity: "92",
        remaining: "92",
      },
      {
        name: "عدة المدرسة غير متوفرة",
        store: "جول الذهبي",
        weight: "95",
        quantity: "31",
        remaining: "31",
      },
      {
        name: "ملابس رياضية متوفرة",
        store: "جول الذهبي",
        weight: "329",
        quantity: "256",
        remaining: "256",
      },
      {
        name: "ملابس رياضية متوفرة",
        store: "جول الذهبي",
        weight: "804",
        quantity: "697",
        remaining: "697",
      },
      {
        name: "عدة المدرسة غير متوفرة",
        store: "جول الذهبي",
        weight: "95",
        quantity: "31",
        remaining: "12",
      },
      {
        name: "عدة المدرسة غير متوفرة",
        store: "جول الذهبي",
        weight: "95",
        quantity: "31",
        remaining: "31",
      },
      {
        name: "ملابس رياضية متوفرة",
        store: "جول الذهبي",
        weight: "329",
        quantity: "256",
        remaining: "256",
      },
      {
        name: "ملابس رياضية متوفرة",
        store: "جول الذهبي",
        weight: "804",
        quantity: "697",
        remaining: "697",
      },
      {
        name: "عدة المدرسة غير متوفرة",
        store: "جول الذهبي",
        weight: "95",
        quantity: "31",
        remaining: "12",
      },
    ];
  
    return (
      <section className="px-5 py-6 mx-auto w-full bg-white rounded-lg border border-solid border-gray-300 max-md:px-3 max-md:mt-6 max-md:max-w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">أفضل المنتجات مبيعًا</h2>
            <p className="mt-1 text-xs text-gray-500">اعتبارًا من 25 مايو 2023</p>
          </div>
          <nav className="flex gap-3 mt-4 max-md:flex-col">
            <button className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
              شهر
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-white bg-red-500 rounded-lg">
              يوم
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
              أسبوع
            </button>
          </nav>
        </div>
        <div className="mt-5 overflow-auto">
          <table className="w-full table-auto border-collapse border-spacing-0">
            <thead>
              <tr className="text-sm text-gray-500 bg-gray-50">
                <th className="px-4 py-2 text-right border-b">اسم المنتج</th>
                <th className="px-4 py-2 text-right border-b">المتجر</th>
                <th className="px-4 py-2 text-right border-b">الوزن</th>
                <th className="px-4 py-2 text-right border-b">الكمية</th>
                <th className="px-4 py-2 text-right border-b">المتبقي</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 text-right text-sm font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-gray-600">
                    {product.store}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-gray-600">
                    {product.weight}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-gray-600">
                    {product.quantity}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-gray-600">
                    {product.remaining}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  
  export default ProductTable;
  