 import UserCard from "./UserCard";
 import { FilterButton } from "../ActionButtons";
 
 const MainContent = () => {
   return (
     <main className="lg:ml-5 w-full">
       <div className="w-full px-4 lg:px-6">
         <section className="flex flex-col mt-6">
           <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
             المستخدمون
           </h2>
 
           <div className="flex flex-col pt-4 pb-6 md:pb-9 mt-6 w-full bg-white rounded-2xl shadow-sm">
             {/* Search and Filter Section */}
             <div className="flex flex-col self-end max-md:self-stretch md:flex-row justify-end items-center gap-4 px-4 md:px-6">
               <div className="flex w-full md:w-auto flex-grow md:flex-grow-0 items-center gap-3 px-4 py-3 border border-gray-300 rounded-full">
                 <img
                   src="/Icones/search.svg"
                   alt="Search"
                   className="w-4 h-4 opacity-70"
                 />
                 <input
                   type="search"
                   placeholder="ابحث عن المستخدم..."
                   className="w-full text-sm md:text-base text-gray-600 bg-transparent border-none focus:outline-none placeholder-gray-400"
                   aria-label="Search users"
                 />
               </div>
 
               <div className="self-end md:self-auto">
                 <FilterButton />
               </div>
             </div>
 
             {/* Users Grid */}
             <div className="px-4 md:px-8 lg:px-16 mt-6 md:mt-8 w-full">
               <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2  gap-5">
                 <UserCard />
                 <UserCard />
                 <UserCard />
                 <UserCard />
                 {/* يمكن إضافة المزيد من بطاقات المستخدمين هنا */}
               </div>
             </div>
           </div>
         </section>
       </div>
     </main>
   );
 };
 
 export default MainContent;