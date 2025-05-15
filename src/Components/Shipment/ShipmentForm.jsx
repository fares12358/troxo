/* eslint-disable react/prop-types */
import DropDownMenu from "../DropDownMenu";
import { useState } from "react";
import { ProductSelector } from "./../ProductSelector";
import QuantityShipment from "./QuantityShimpent";
import QuantityBox from "./QuantityBox";
import AlertMessage from "./../Alert/AlertMessage";
const FormSection = ({ label, children, required }) => (
  <div
    className={`flex mt-4  flex-col  ${
      label === "عدد البوكسات" || label === "الكمية" ? "items-start gap-2 " : ""
    }    `}
  >
    <div className="flex gap-2 self-start">
      <label className="text-sm md:text-base font-semibold text-slate-950">
        {label}
      </label>
      {required && <span className="text-sm text-red-600">*</span>}
    </div>
    {children}
  </div>
);
const SelectSection = ({ label, children, required }) => (
  <div
    className={`flex mt-4 flex-col ${
      label === "عدد البوكسات" || label === "الكمية" ? "items-start gap-2" : ""
    }`}
  >
    <div className="flex gap-2 self-start">
      <label className="text-sm md:text-base font-semibold text-slate-950">
        {label}
      </label>
      {required && <span className="text-sm text-red-600">*</span>}
    </div>
    {children}
  </div>
);

const ShipmentForm = () => {
  const [activeDetails, setActiveDetails] = useState(null);
  const [selectedStore, setSelectedStore] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const handleRemoveStore = (storeName) => {
    setSelectedStore((prev) =>
      prev.filter((store) => store.name !== storeName)
    );
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomers((prev) => {
      if (prev.some((c) => c.name === customer)) {
        return prev.filter((c) => c.name !== customer);
      } else {
        return [
          ...prev,
          {
            name: customer,
            address: "حي بدر، الدمام", // يمكن جلب هذه البيانات من API
            phone: "+966 50 000 0000",
          },
        ];
      }
    });
  };
  const handleStoreSelect = (storeName) => {
    setSelectedStore((prev) => {
      const isAlreadySelected = prev.length > 0 && prev[0].name === storeName;

      return isAlreadySelected
        ? [] // إذا ضغط على نفس الخيار → إلغاء التحديد
        : [
            {
              name: storeName,
              address: "حي بدر، الدمام",
              phone: "+966 50 000 0000",
            },
          ];
    });
  };

  const toggleDetails = (type) => {
    setActiveDetails(activeDetails === type ? null : type);
  };
  return (
    <section
      className="flex flex-col p-4 md:p-5 w-full rounded-xl bg-slate-50"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-base md:text-lg text-zinc-800">
          شحنتك معنا تصل بأمان إلى كل مكان..!!
        </h2>
      </div>

      {/* Store Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
        {/* Store Info */}
        <div className="space-y-2">
          <label className="text-sm md:text-base text-zinc-400">المتجر</label>
          <div className="flex justify-between items-center ">
            <DropDownMenu
              options={["جولدن جول", "عالم الرياضة", "موضة الرياضة"]}
              placeholder={
                selectedStore.length > 0
                  ? `${selectedStore.length} متجر المحدد`
                  : "يرجى اختيار المتجر"
              }
              icon="/Icones/store.svg"
              title="المتجر"
              selected={selectedStore.map((s) => s.name)}
              onSelect={handleStoreSelect}
              isone={true}
              modalToOpen="store"
            />
          </div>
        </div>

        {/* Store Details */}
        {selectedStore.length > 0 ? (
          activeDetails === "store" ? (
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3>تفاصيل المتجر</h3>
                <button
                  onClick={() => toggleDetails("store")}
                  className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
                >
                  <img
                    src="/Icones/ArrowRight.svg"
                    alt="arrow right"
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                      activeDetails === "store" ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>

              {selectedStore.map((store, index) => (
                <div
                  key={index}
                  className="bg-red-50 rounded-2xl mt-4 p-4 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm md:text-base font-semibold text-slate-950">
                      {store.name}
                    </h3>
                    <button
                      onClick={() => handleRemoveStore(store.name)}
                      className="text-red-500 text-xs hover:text-red-700"
                    >
                      إزالة
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/Icones/Location.svg"
                        alt="location"
                        className="w-4 h-4"
                      />
                      <span className="text-xs md:text-sm">العنوان</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">
                      {store.address}
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/Icones/phone.svg"
                        alt="phone"
                        className="w-4 h-4"
                      />
                      <span className="text-xs md:text-sm">الهاتف</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">
                      {store.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm md:text-base font-semibold text-slate-950 mb-2">
                  تفاصيل المتجر
                </h4>
                <button
                  onClick={() => toggleDetails("store")}
                  className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
                >
                  <img
                    src="/Icones/ArrowRight.svg"
                    alt="arrow right"
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                      activeDetails === "store" ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          )
        ) : (
          <AlertMessage
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bf562eadfe2d8f765faa1b34a91a054e801906ac?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
            title="رسالة تلميح"
            description="أضف متجرك الآن لعرض تفاصيله الكاملة لعملائنا، بما في ذلك رقم الهاتف والعنوان لسهولة الاتصال والوصول!"
          />
        )}
      </div>

      {/* Customer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Customer Info */}
        <div className="space-y-2">
          <label className="text-sm md:text-base text-zinc-400">العميل</label>
          <div className="flex justify-between items-center">
            <DropDownMenu
              options={["عبد الرحمن", "محمد", "علي"]}
              placeholder={
                selectedCustomers.length > 0
                  ? `${selectedCustomers.length} عميل مختار`
                  : "يرجى اختيار العميل"
              }
              icon="/Icones/Profile.svg"
              title="العميل"
              selectedItems={selectedCustomers.map((c) => c.name)} // تمرير الأسماء فقط
              onSelectMulti={handleSelectCustomer} // استخدام دالة الاختيار المتعدد
              isMulti={true}
              modalToOpen="client"
            />
          </div>
        </div>
        {/* Customer Details */}
        {selectedCustomers.length > 0 ? (
          activeDetails === "client" ? (
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3>تفاصيل العميل</h3>
                <button
                  onClick={() => toggleDetails("client")}
                  className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
                >
                  <img
                    src="/Icones/ArrowRight.svg"
                    alt="arrow right"
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                      activeDetails === "client" ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>

              {selectedCustomers.map((customer, index) => (
                <div
                  key={index}
                  className="bg-red-50 rounded-2xl mt-4 p-4 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm md:text-base font-semibold text-slate-950">
                      {customer.name}
                    </h3>
                    <button
                      onClick={() => handleSelectCustomer(customer.name)}
                      className="text-red-500 text-xs"
                    >
                      إزالة
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/Icones/Location.svg"
                        alt="location"
                        className="w-4 h-4"
                      />
                      <span className="text-xs md:text-sm">العنوان</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">
                      {customer.address}
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/Icones/phone.svg"
                        alt="phone"
                        className="w-4 h-4"
                      />
                      <span className="text-xs md:text-sm">الهاتف</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">
                      {customer.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm md:text-base font-semibold text-slate-950 mb-2">
                  تفاصيل العميل
                </h4>
                <button
                  onClick={() => toggleDetails("client")}
                  className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
                >
                  <img
                    src="/Icones/ArrowRight.svg"
                    alt="arrow right"
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                      activeDetails === "client" ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="w-full p-4 md:p-6 text-center text-sm md:text-base font-semibold bg-gray-100 rounded-2xl text-neutral-400">
            لا توجد تفاصيل متجر لعرضها
          </div>
        )}
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Product */}
        <FormSection label="المنتج" required>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <ProductSelector modalToOpen="product" />
          </div>
        </FormSection>

        {/* Quantity */}
        <FormSection label="الكمية">
          <QuantityShipment />
        </FormSection>

        {/* Pickup */}
        <FormSection label="التقاط">
          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              id="pickup"
              className="w-5 h-5 bg-white rounded border border-neutral-400"
            />
            <label
              htmlFor="pickup"
              className="text-sm md:text-base text-gray-500"
            >
              استلام الشحنة من المرسل
            </label>
          </div>
        </FormSection>
      </div>

      <FormSection label="عدد البوكسات">
        <QuantityBox />
      </FormSection>

      {/* Shipment Details */}
      <div className="flex justify-between items-center">
        <h3 className="mt-6 md:mt-8 text-base md:text-lg text-zinc-800">
          تفاصيل الشحنة (الطول، الارتفاع، العرض)
        </h3>
        <button
          onClick={() => toggleDetails("shipment")}
          className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
        >
          <img
            src="/Icones/ArrowRight.svg"
            alt="arrow right"
            className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
              activeDetails === "shipment" ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {activeDetails === "shipment" && (
        <div className="space-y-6">
          {/* أبعاد الشحنة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* الطول */}
            <FormSection label="الطول (سم)" required>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors">
                <img
                  src="/Icones/length.svg"
                  alt="length"
                  className="w-5 h-5 opacity-70"
                />
                <input
                  type="number"
                  placeholder="ادخل الطول"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                  min="1"
                />
              </div>
            </FormSection>

            {/* الارتفاع */}
            <FormSection label="الارتفاع (سم)" required>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors">
                <img
                  src="/Icones/height.svg"
                  alt="height"
                  className="w-5 h-5 opacity-70"
                />
                <input
                  type="number"
                  placeholder="ادخل الارتفاع"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                  min="1"
                />
              </div>
            </FormSection>

            {/* العرض */}
            <FormSection label="العرض (سم)" required>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors">
                <img
                  src="/Icones/width.svg"
                  alt="width"
                  className="w-5 h-5 opacity-70"
                />
                <input
                  type="number"
                  placeholder="ادخل العرض"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                  min="1"
                />
              </div>
            </FormSection>

            {/* الوزن */}
            <FormSection label="الوزن (كجم)" required>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors">
                <img
                  src="/Icones/weight.svg"
                  alt="weight"
                  className="w-5 h-5 opacity-70"
                />
                <input
                  type="number"
                  placeholder="ادخل الوزن"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                  min="0.1"
                  step="0.1"
                />
              </div>
            </FormSection>
          </div>

          {/* معلومات الشحن */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* نوع الشحنة */}
            <SelectSection label="نوع الشحنة" required>
              <div className="relative w-full">
                {/* عنصر الـ select الأصلي مع تعديلات بسيطة */}
                <select className="w-full p-3 pl-10 pr-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 appearance-none cursor-pointer">
                  <option value="" selected className="text-neutral-400">
                    اختر نوع الشحنة
                  </option>
                  <option value="option1">خيار 1</option>
                  <option value="option2">خيار 2</option>
                  <option value="option3">خيار 3</option>
                </select>
                <img
                  src="/images/AarrowDown.svg"
                  alt="arrow"
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </SelectSection>

            {/* شركة الشحن */}
            <SelectSection label="شركة الشحن" required>
              <div className="relative w-full">
                {/* حاوية جديدة لتحديد المواقع */}
                {/* الأيقونة الثابتة */}
                <img
                  src="/Icones/ShipmentsIcone.svg"
                  alt="shipment icon"
                  className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
                {/* عنصر الـ select الأصلي مع تعديلات بسيطة */}
                <select className="w-full p-3 pl-10 pr-8 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 appearance-none cursor-pointer">
                  <option value="" selected className="text-neutral-400">
                    اختر الشركة
                  </option>
                  <option value="option1">خيار 1</option>
                  <option value="option2">خيار 2</option>
                  <option value="option3">خيار 3</option>
                </select>
                <img
                  src="/images/AarrowDown.svg"
                  alt="arrow"
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </SelectSection>

            {/* نوع الخدمة */}
            <SelectSection label="نوع الخدمة" required>
              <div className="relative w-full">
                {/* عنصر الـ select الأصلي مع تعديلات بسيطة */}
                <select className="w-full p-3 pl-10 pr-3 bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 appearance-none cursor-pointer">
                  <option value="" selected className="text-neutral-400">
                    اختر نوع الخدمة
                  </option>
                  <option value="option1">خيار 1</option>
                  <option value="option2">خيار 2</option>
                  <option value="option3">خيار 3</option>
                </select>
                <img
                  src="/images/AarrowDown.svg"
                  alt="arrow"
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </SelectSection>
          </div>
        </div>
      )}
      <button className="px-4 py-2 self-center mt-4 cursor-pointer md:px-6 md:py-4 text-sm md:text-base font-extrabold bg-red-100 text-pink-950 rounded-xl w-full sm:w-auto min-w-[200px]">
        إضافة شحنة
      </button>
    </section>
  );
};

export default ShipmentForm;
