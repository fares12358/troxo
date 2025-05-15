/* eslint-disable react/prop-types */
export default function WalletCard({ title, balance, type }) {
  return (
    <article className="p-4 md:p-5 mb-5 lg:p-6 w-full rounded-2xl border border-solid bg-slate-50 border-pink-950 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="mb-3 md:mb-4 lg:mb-5 max-md:text-lg text-xl  font-extrabold text-gray-800 text-right">
        {title}
      </h2>

      <div className="flex max-mad:flex-col flex-row gap-3 md:gap-4 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 w-full xs:w-auto">
          <div className="currency-icon">
            {type === "wallet" ? (
              <WalletIcon />
            ) : (
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            )}
          </div>
          <span className="max-md:text-base text-lg  font-semibold text-gray-800">
            رصيد {title}
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-xl max-md:text-lg  font-bold text-gray-800">
            {balance}
          </span>
          <CurrencyIcon />
        </div>
      </div>
    </article>
  );
}

function WalletIcon() {
  return (
    <img
      src="/images/wallet.png"
      alt="صورة المحفظة"
      className="w-6 h-6 md:w-7 md:h-7 object-contain"
    />
  );
}

function CurrencyIcon() {
  return (
    <img
      src="/Icones/Currency.svg"
      alt="رمز العملة"
      className="w-4 h-4 md:w-5 md:h-5"
    />
  );
}
