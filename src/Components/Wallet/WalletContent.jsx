import BankAccountForm from "./BankAccountForm";
import BankAccountDetails from "./BankAccountDetails";

function WalletContent() {
  return (
    <article className="flex flex-col items-start self-stretch p-4 md:p-7 md:pt-4 pb-6 md:pb-10 mt-3 mb-6 w-full bg-white rounded-xl md:rounded-2xl">
      {/* العنوان */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-relaxed text-gray-800">
        حسابات بنكية
      </h2>

      {/* النص التفسيري */}
      <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-neutral-500">
        إضافة حساباتك البنكية يمكّنك من سحب أموالك إليها. عند إضافة حساب بنكي،
        تأكد من أن:
      </p>

      {/* القائمة النقطية */}
      <ul className="w-full list-none mt-2 md:mt-4">
        <li className="flex gap-2 mt-2 md:mt-3 text-xs md:text-sm text-neutral-500">
          <span className="flex shrink-0 my-auto bg-red-100 rounded-full h-2 w-2 md:h-[9px] md:w-[9px]" />
          <span>
            حساب البنك يعود لك واسم المستفيد يتطابق مع اسم المستفيد في هويتك.
          </span>
        </li>
        <li className="flex gap-2 mt-2 md:mt-3 text-xs md:text-sm text-neutral-500">
          <span className="flex shrink-0 my-auto bg-red-100 rounded-full h-2 w-2 md:h-[9px] md:w-[9px]" />
          <span>
            أنت تتحمل أي خسائر مالية ناتجة عن أي معلومات غير صحيحة أو خاطئة.
          </span>
        </li>
      </ul>

      {/* المكونات الفرعية */}
      <BankAccountForm />
      <BankAccountDetails />
    </article>
  );
}

export default WalletContent;
