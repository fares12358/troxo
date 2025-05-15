function BankAccountForm() {
  return (
    <form className="w-full p-4 md:p-6 md:pr-14 md:pl-6 mt-8 md:mt-12 bg-white rounded-lg border-2 border-solid border-zinc-200">
      <div className="flex flex-col md:flex-row gap-5">
        {/* النموذج الرئيسي */}
        <div className="w-full md:w-[70%]">
          <div className="flex flex-col items-start max-md:items-center mt-2  font-semibold text-pink-950">
            <h3 className="text-base md:text-lg tracking-wide">
              إضافة حسابات بنكية
            </h3>

            <div className="mt-3 md:mt-5 w-full flex flex-col max-md:items-center  space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="حسابات بنكية"
                className="w-[70%] px-4 py-3 md:py-3.5 text-sm md:text-base bg-gray-200 rounded-lg md:rounded-xl"
              />

              <input
                type="text"
                placeholder="رقم IBAN"
                className="w-[70%] px-4 py-3 md:py-3.5 text-sm md:text-base bg-gray-200 rounded-lg md:rounded-xl"
              />

              <select
                className="w-[70%] px-4 py-3 md:py-3.5 text-sm md:text-base bg-gray-200 rounded-lg md:rounded-xl"
                name="bank"
                id="bank"
              >
                <option value="">اسم البنك</option>
                {/* يمكن إضافة خيارات البنوك هنا */}
              </select>
            </div>

            <button
              type="submit"
              className="w-[70%] self-center  px-8 md:px-16 py-2.5 mt-6 md:mt-9 text-sm md:text-base bg-red-100 rounded-lg md:rounded-xl hover:bg-gray-200 transition-colors"
            >
              إضافة حسابات بنكية
            </button>
          </div>
        </div>

        {/* صورة البنك */}
        <div className="w-full md:w-[30%] ml-7 flex justify-center items-center ">
          <img
            src="/images/BankImage.svg"
            alt="Bank illustration"
            className="max-w-[200px] md:max-w-none w-full h-auto aspect-square object-contain"
          />
        </div>
      </div>
    </form>
  );
}

export default BankAccountForm;
