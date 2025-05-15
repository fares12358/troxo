 import { useState } from "react";
 
 const UserCard = () => {
   const [isDisabled, setIsDisabled] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);
 
   const toggleStoreStatus = () => {
     setIsDisabled(!isDisabled);
   };
 
   const toggleExpand = () => {
     setIsExpanded(!isExpanded);
   };
   return (
     <article
       className={`flex flex-col w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${
         isDisabled ? "opacity-70" : ""
       } `}
     >
       {/* Header Section */}
       <header className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
         <div>
           <h3
             className={`text-xl font-bold ${
               isDisabled ? "text-gray-400" : "text-gray-900"
             } `}
           >
             عبدالله
           </h3>
           <p className="text-sm text-gray-500 mt-1">#U-12345</p>
         </div>
         <div className="flex items-center gap-2">
           <span className="text-sm font-medium text-gray-700">
             {isDisabled ? "تعطيل المتجر" : "تفعيل المتجر"}
           </span>
           <button
             onClick={toggleStoreStatus}
             className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
               isDisabled ? "bg-blue-500" : "bg-gray-200"
             }`}
             aria-label="Toggle store status"
             role="switch"
             aria-checked="false"
           >
             <span
               className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                 isDisabled ? "-translate-x-5" : "translate-x-0.5"
               }`}
             />
           </button>
         </div>
       </header>
 
       {/* Stats Section */}
       <div className="p-4 grid grid-cols-2 gap-4">
         {/* Left Column - Labels */}
         <div className="space-y-4">
           <p className="text-sm font-medium text-gray-700">محفظة</p>
           <p className="text-sm font-medium text-gray-700">
             الدفع عند الاستلام
           </p>
           <p className="text-sm font-medium text-gray-700">عدد المتاجر</p>
           <p className="text-sm font-medium text-gray-700">
             عدد الشحنات المحلية
           </p>
           <p className="text-sm font-medium text-gray-700">
             عدد الشحنات الدولية
           </p>
           <p className="text-sm font-medium text-gray-700">عدد العملاء</p>
           <p className="text-sm font-medium text-gray-700">تاريخ آخر شحنة</p>
           <p className="text-sm font-medium text-gray-700">
             مبلغ آخر شحنة لمحفظة
           </p>
         </div>
 
         {/* Right Column - Values */}
         <div className="space-y-3">
           <p className="text-sm rounded-lg p-2 bg-red-100 font-semibold text-gray-900">
             850 ريال سعودي
           </p>
           <p className="text-sm rounded-lg p-2 bg-red-100 font-semibold text-gray-900">
             100 ريال سعودي
           </p>
           <p className="text-sm font-semibold text-gray-900">5 متاجر</p>
           <p className="text-sm font-semibold text-gray-900">20 شحنة</p>
           <p className="text-sm font-semibold text-gray-900">10 شحنة</p>
           <p className="text-sm font-semibold text-gray-900">250 عميل</p>
           <p className="text-sm font-semibold text-gray-900">12/5/2024</p>
           <div className="flex items-center gap-1">
             <span className="text-sm font-semibold text-gray-900">350</span>
             <img
               src="/Icones/Currency.svg"
               alt="ريال سعودي"
               className="w-4 h-4"
             />
           </div>
         </div>
       </div>
 
       {/* Divider */}
       <div className="border-t border-gray-200 mx-4"></div>
 
       {/* Footer Section */}
       <footer className="p-4 border-t border-pink-950 border-opacity-20 flex justify-between items-center">
         <p className="text-sm text-pink-950 font-medium">
           اكتشف المزيد عن الشركة الآن!
         </p>
         <button
           onClick={toggleExpand}
           className="flex items-center gap-1 px-3 py-2 bg-red-100 hover:bg-red-200 rounded-md text-pink-950 font-medium transition-colors"
         >
           {isExpanded ? "إخفاء التفاصيل" : "اقرأ المزيد"}
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className={`h-4 w-4 transition-transform ${
               isExpanded ? "rotate-180" : ""
             }`}
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path
               fillRule="evenodd"
               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
               clipRule="evenodd"
             />
           </svg>
         </button>
       </footer>
     </article>
   );
 };
 
 export default UserCard;