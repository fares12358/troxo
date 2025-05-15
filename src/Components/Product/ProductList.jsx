import { FilterButton, ExcelButton, AddProductButton } from "../ActionButtons";
import AddProductModal from "../Modal/AddProductModal";
import { useState, useRef, useEffect } from "react";
import MenuProduct from "./../Menu/MenuProduct";

const productData = [
  {
    id: "P-12345",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67990",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
  {
    id: "P-13579",
    name: "قبعة رياضية",
    length: "50 سم",
    weight: "0.3 كغ",
    height: "23 سم",
    width: "15 سم",
    price: "300 ر.س",
    quantity: "150",
  },
  {
    id: "P-12325",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67890",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
  {
    id: "P-19579",
    name: "قبعة رياضية",
    length: "50 سم",
    weight: "0.3 كغ",
    height: "23 سم",
    width: "15 سم",
    price: "300 ر.س",
    quantity: "150",
  },
  {
    id: "P-12145",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67890",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
];

export const ProductList = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const dropdownRef = useRef(null);

  // يغلق القائمة إذا تم الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !activeModal // مهم: ما تسكر القائمة إذا المودال مفتوح
      ) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  const handleMenuItemClick = () => {
    setSelectedRow(null); // أغلق القائمة

    setTimeout(() => {
      setActiveModal(true); // افتح المودال بعد تأخير
    }, 500);
  };

  const handleAddProductClick = () => {
    setActiveModal("product");
  };
  return (
    <section className="flex flex-col w-full  bg-white rounded-2xl p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 w-full mb-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            المنتجات
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img src="/Icones/search.svg" alt="search icone" className="w-5 h-5"  />
            </div>
            <input
              type="text"
              placeholder="...ابحث عن المنتج"
              className="w-full py-2 pl-4 pr-10 text-sm text-right border border-gray-300 rounded-full  sm:w-64"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex gap-2">
            <FilterButton />
            <ExcelButton />
          </div>
          <AddProductButton onClick={handleAddProductClick} />
        </div>
        {/* عرض المودال عند النقر */}
        {activeModal === "product" && (
          <AddProductModal onClose={() => setActiveModal(null)} />
        )}
      </div>

      {/* Info Message */}
      <p className="text-sm text-right text-pink-700 mb-6 sm:text-base">
        .تتيح لك تروكسو حفظ منتجاتك لتسهيل إدارة الشحنات. لضمان دقة حساب تكاليف
        الشحن، يرجى الحرص على دقة إدخال الأبعاد ووزن المنتج
      </p>

      {/* Responsive Table */}
      <div className="border  border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-red-100">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-3 py-3  text-xs font-medium text-gray-700 text-center uppercase tracking-wider min-w-[150px]"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/box.svg"
                      alt="product name"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base ">اسم المنتج</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/length.svg"
                      alt="product length"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الطول</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/weight.svg"
                      alt="product weight"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الوزن</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/height.svg"
                      alt="product height"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base ">ارتفاع</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/width.svg"
                      alt="product width"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">عرض</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/price.svg"
                      alt="product price"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">السعر</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/Quantity.svg"
                      alt="product quantity"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الكمية</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <span className="sr-only">إجراءات</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productData.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    Po-{index + 1}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    {product.length}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    {product.weight}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    {product.height}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    {product.width}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-800">
                    {product.price}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    {product.quantity}
                  </td>
                  <td
                    className="px-3 py-4 whitespace-nowrap text-right text-sm relative font-medium"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={() => handleMenuToggle(product.id)}
                      className="text-gray-400 hover:text-red-900"
                    >
                      <svg
                        className="w-6 h-6 rotate-90 bg-red-100 rounded-lg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>

                    {selectedRow === product.id && (
                      <div
                        ref={dropdownRef}
                        onClick={handleMenuItemClick}
                        className="absolute left-2 top-10 mt-1 z-50"
                      >
                        <MenuProduct onClose={() => setSelectedRow(null)} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between mt-6 space-y-4 sm:flex-row sm:space-y-0">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-gray-700">عدد الصفوف في كل صفحة:</p>
          <select className="text-sm bg-gray-300 p-2  focus:ring-red-500 focus:border-red-500">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 ">
            <img src="/Icones/ArrowRight.svg" alt="السابق" />
          </button>
          <button className="px-3 py-1 bg-gray-100 text-black rounded-md text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 border  rounded-md text-sm font-medium text-gray-700 ">
            <img src="/Icones/ArrowLeft.svg" alt="تالي" />
          </button>
        </div>
      </div>
    </section>
  );
};
