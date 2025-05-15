// ShipmentStatus.js
import { useState } from "react";
import { FilterButton } from "./../../Components/ActionButtons";
import ShipmentGlobal from "../../Components/Shipment/ShipmentGlobal";
import ShipmentLocal from "../../Components/Shipment/ShipmentLocal";
import ShipmentAdminTable from "../../Components/Shipment/ShipmentAdminTable";
import ShipmentAdminCanceled from "../../Components/Shipment/ShipmentAdminCanceled";
import ShipmentAdminReturn from "../../Components/Shipment/ShipmentAdminReturn";

export const ShipmentAdminDetails = () => {
  const [activeTab, setActiveTab] = useState("status"); // status | return

  return (
    <div className="w-full px-4 mb-6 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-6 lg:mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800">
          الشحنات
        </h2>

        {/* Breadcrumb */}
        <nav
          className="mt-2 md:mt-3 text-sm md:text-base text-neutral-500"
          aria-label="breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li className="text-gray-700">
              {activeTab === "status"
                ? "الشحنات"
                : activeTab === "canceled"
                ? "الشحنات الملغاة"
                : activeTab === "global"
                ? "الشحنات الدولية"
                : activeTab === "local"
                ? "الشحنات المحلية"
                : "شحنات المرتجعة"}
            </li>
          </ol>
        </nav>

        {/* Tabs */}
        <article className="flex flex-col w-full p-4 mt-6 bg-white rounded-2xl md:p-6">
          <div className="flex flex-col w-full gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col w-full justify-between lg:flex-row items-start gap-3 lg:items-center ">
              <div className="grid grid-cols-5 max-md:grid-cols-3 bg-slate-50 rounded-full p-1 mt-4">
                <button
                  onClick={() => setActiveTab("status")}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeTab === "status"
                      ? "bg-white shadow-md text-pink-950"
                      : "text-neutral-600"
                  }`}
                >
                  الشحنات
                </button>
                <button
                  onClick={() => setActiveTab("global")}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeTab === "global"
                      ? "bg-white shadow-md text-pink-950"
                      : "text-neutral-600"
                  }`}
                >
                  الشحنات الدولية
                </button>
                <button
                  onClick={() => setActiveTab("local")}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeTab === "local"
                      ? "bg-white shadow-md text-pink-950"
                      : "text-neutral-600"
                  }`}
                >
                  الشحنات المحلية
                </button>
                <button
                  onClick={() => setActiveTab("return")}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeTab === "return"
                      ? "bg-white shadow-md text-pink-950"
                      : "text-neutral-600"
                  }`}
                >
                  الشحنات المرتجعة
                </button>
                <button
                  onClick={() => setActiveTab("canceled")}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeTab === "canceled"
                      ? "bg-white shadow-md text-pink-950"
                      : "text-neutral-600"
                  }`}
                >
                  الشحنات الملغاة
                </button>
              </div>

              {/* Search Box */}
              <div className="relative lg:w-64">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="/Icones/search.svg"
                    className="w-4 h-4"
                    alt="Search icon"
                  />
                </div>
                <input
                  type="text"
                  className="w-full pr-10 text-sm border border-gray-300 rounded-full py-3 px-5 text-right focus:border-black focus:outline-none"
                  placeholder="ابحث عن العميل..."
                />
              </div>

              {/* Filter and Add Buttons */}
              <div className="lg:self-center self-start">
                <FilterButton />
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full mt-4 md:mt-6 overflow-x-auto">
            <div className="min-w-[600px] md:min-w-full">
              {activeTab === "status" ? (
                <ShipmentAdminTable />
              ) : activeTab === "global" ? (
                <ShipmentGlobal />
              ) : activeTab === "local" ? (
                <ShipmentLocal />
              ) : activeTab === "canceled" ? (
                <ShipmentAdminCanceled />
              ) : activeTab === "return" ? (
                <ShipmentAdminReturn />
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ShipmentAdminDetails;
