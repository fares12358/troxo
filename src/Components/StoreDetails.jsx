/* eslint-disable react/prop-types */
import { useState } from "react";
import EditStoreModal from "./Modal/EditStoreModal";
function StoreDetails({
  storeName,
  country,
  title,
  city,
  phone,
  address,
  imageUrl,
}) {
  const [activeModal, setActiveModal] = useState(false);

  const handleEditStoreClick = () => {
    setActiveModal(true);
  };
  return (
    <div className="text-right mb-4" dir="ltr">
      {/* إضافة اتجاه RTL هنا */}
      <h3 className="text-base mb-2 font-semibold text-gray-800">{title}</h3>
      <div className="rtl flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm">
        {/* الصف العلوي: اسم المتجر ورقم الهاتف والصورة */}
        <div className="flex flex-row-reverse justify-between items-start mb-6">
          <div className="flex flex-row-reverse items-center gap-8">
            <div>
              <label className="block text-sm text-gray-500 mb-1 text-right">
                اسم المتجر
              </label>
              <span className="text-lg font-semibold text-right block">
                {storeName}
              </span>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1 text-right">
                رقم الهاتف
              </label>
              <span className="text-lg font-semibold text-red-500 text-right block">
                {phone}
              </span>
            </div>
          </div>
          {imageUrl && (
            <button onClick={handleEditStoreClick} className="cursor-pointer">
              <img src={imageUrl} alt={storeName} className="w-6 h-6 " />
            </button>
          )}
          {activeModal === true && (
            <EditStoreModal onClose={() => setActiveModal(null)} />
          )}
        </div>

        {/* قسم تفاصيل العنوان */}
        <div className="text-right">
          <h4 className="text-lg font-semibold text-pink-900 mb-3">
            تفاصيل عنوان المتجر
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                العنوان
              </label>
              <span className="text-base">{address}</span>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                المدينة
              </label>
              <span className="text-base">{city}</span>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">البلد</label>
              <span className="text-base">{country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreDetails;
