export default function TransactionTable() {
  const transactions = [
    {
      id: "P-293325",
      description: "شحن المحفظة",
      date: "12-03-2025",
      balance: "696",
      amount: { value: "50", type: "credit" },
    },
    {
      id: "P-458255",
      description: "طلب الشحنة",
      date: "22-02-2025",
      balance: "696",
      amount: { value: "120", type: "debit" },
    },
    {
      id: "P-157828",
      description: "إلغاء الشحنة",
      date: "12-01-2025",
      balance: "576",
      amount: { value: "100", type: "credit" },
    },
  ];

  return (
    <section className="mt-8 lg:mt-10 px-4 lg:px-0">
      <h2 className="mb-4 lg:mb-5 text-lg md:text-xl font-semibold text-pink-950 text-right">
        عمليات المحفظة
      </h2>

      <div className="rounded-xl lg:rounded-2xl border border-red-100 bg-slate-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="bg-red-100">
                <th className="p-3 md:p-4 text-sm md:text-base font-semibold text-zinc-800 text-center">
                  رقم المعاملة
                </th>
                <th className="p-3 md:p-4 text-sm md:text-base font-semibold text-zinc-800 text-center">
                  بيان العملية
                </th>
                <th className="p-3 md:p-4 text-sm md:text-base font-semibold text-zinc-800 text-center">
                  تاريخ العمليات
                </th>
                <th className="p-3 md:p-4 text-sm md:text-base font-semibold text-zinc-800 text-center">
                  رصيد المحفظة
                </th>
                <th className="p-3 md:p-4 text-sm md:text-base font-semibold text-zinc-800 text-center">
                  رصيد الحركة
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300">
              {transactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 text-sm text-blue-950 text-center">
                    {transaction.id}
                  </td>
                  <td
                    className={`p-3 md:p-4 text-sm text-center `}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span>{transaction.description}</span>
                      <img
                        src={
                          transaction.amount.type === "credit"
                            ? "/Icones/Charging.svg"
                            : "/Icones/request.svg"
                        }
                        alt="عملة"
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-sm text-blue-950 text-center">
                    {transaction.date}
                  </td>
                  <td className="p-3 md:p-4 text-sm text-blue-950 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span>{transaction.balance}</span>
                      <img
                        src="/Icones/Currency.svg"
                        alt="عملة"
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                  <td
                    className={`p-3 md:p-4 text-sm text-center ${
                      transaction.amount.type === "credit"
                        ? "text-emerald-600"
                        : "text-orange-600"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span>{transaction.amount.value}</span>
                      <img
                        src={
                          transaction.amount.type === "credit"
                            ? "/Icones/CurrencyGreen.svg"
                            : "/Icones/CurrencyRed.svg"
                        }
                        alt="عملة"
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
