import StoreDetails from "../Components/StoreDetails";
import { useState } from "react";
import AddStoreModal from "./../Components/Modal/AddStoreModal";

function Shopes() {
  const [activeModal, setActiveModal] = useState(false);

  const handleAddStoreClick = () => {
    setActiveModal(true);
  };
  return (
    <div className="w-full px-4 md:px-6" dir="rtl">
      <section className="flex flex-col grow items-start mt-10  max-md:max-w-full">
        <h1 className="text-2xl font-black leading-tight text-gray-800 uppercase">
          المتاجر
        </h1>
        <nav className="mt-2 text-sm text-neutral-500" aria-label="breadcrumb">
          الرئيسية &gt; المتاجر
        </nav>
        <div className="flex overflow-hidden flex-col self-stretch px-7 pt-5 pb-10 mt-7 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
          <h2 className="text-3xl font-bold tracking-tighter leading-relaxed text-gray-800">
              المتاجر
            </h2>
            <button
              onClick={handleAddStoreClick}
              className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 my-auto text-sm font-semibold tracking-normal leading-6 bg-red-100 rounded-md text-pink-950"
            >
              <div className="flex overflow-hidden gap-2 items-start">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e95660b64d80ec70fafcd1a47dbccf9a97e8de4?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
                  alt=""
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                <span>إضافة متاجر</span>
              </div>
            </button>
           
          </div>
          <p className="self-start mt-2 text-sm text-neutral-500 max-md:max-w-full">
            نستخدم عناوين المتاجر وتفاصيل الاتصال لاستقبال الشحنات من ممثلي
            التوصيل. يرجى التأكد من صحة البيانات لتسهيل الوصول إليك.
          </p>
          <div className="flex overflow-hidden items-end flex-col px-11 pt-10 mt-12 w-full rounded-2xl bg-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full" dir="ltr">
            <StoreDetails
              title="تفاصيل المتجر - الأول"
              storeName="جولدن جول"
              phone="+966 53 337 3122"
              address="الشرائع، الشارع 32، ذوات السواري، خطة 2"
              country="المملكة العربية السعودية"
              city="مكة المكرمة"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <StoreDetails
              title="تفاصيل المتجر - الثاني"
              storeName="جولدن جول"
              phone="+966 53 337 3122"
              country="المملكة العربية السعودية"
              city="مكة المكرمة"
              address="الشرائع، الشارع 32، ذوات السواري، خطة 2"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <StoreDetails
              title="تفاصيل المتجر - الثالث"
              storeName="جولدن جول"
              phone="+966 53 337 3122"
              country="المملكة العربية السعودية"
              city="مكة المكرمة"
              imageUrl="/Icones/ButtonArrowRight.svg"
              address="الشرائع، الشارع 32، ذوات السواري، خطة 2"
              compact
            />
          </div>
        </div>
        {/* عرض المودال عند النقر */}
        {activeModal === true && (
          <AddStoreModal onClose={() => setActiveModal(null)} />
        )}
      </section>
    </div>
  );
}

export default Shopes;
