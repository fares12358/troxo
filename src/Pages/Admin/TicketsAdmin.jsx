import TicketDetails from "../../Components/Ticket/TicketDetails";

function TicketsAdmin() {
  return (
    <div className="w-full px-4 mb-4 md:px-6" dir="rtl">
      <section className="flex flex-col grow items-start mt-10  max-md:max-w-full">
        <h1 className="text-2xl font-black leading-tight text-gray-800 uppercase">
          التذاكر
        </h1>
        <nav className="mt-2 text-sm text-neutral-500" aria-label="breadcrumb">
          الرئيسية &gt; التذاكر
        </nav>
        <div className="flex overflow-hidden flex-col self-stretch px-7 pt-5 pb-10 mt-7 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap justify-between max-md:max-w-full">
            <h2 className="text-3xl font-bold tracking-tighter leading-relaxed text-gray-800">
              التذاكر
            </h2>
          </div>

          <div
            className="flex overflow-hidden  flex-col px-11 pt-10 mt-5 w-full rounded-2xl bg-slate-50 max-md:px-5 max-md:mt-3 max-md:max-w-full"
            dir="ltr"
          >
            <TicketDetails
              title="تذكرة - الأولى"
              ticketNumber="T-1234567"
              shipmentNumber="SH-1234567"
              companyName="SMSA"
              ticketDetails="تفاصيل التذكرة"
              ticketType="الغاء الشحنة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDate="2025-05-01"
              answerticket="/Icones/answer.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <TicketDetails
              title="تذكرة - الثانية"
              ticketNumber="T-1134567"
              shipmentNumber="SH-1234567"
              companyName="SSH"
              ticketType="الغاء الشحنة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDetails="تفاصيل التذكرة"
              ticketDate="2025-05-01"
              answerticket="/Icones/answer.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <TicketDetails
              title="تذكرة - الثالثة"
              ticketNumber="T-1232567"
              shipmentNumber="SH-1234567"
              companyName="SSH"
              ticketType="الغاء الشحنة"
              ticketDetails="تفاصيل التذكرة"
              clientNumber="C-1234567"
              ticketStatus="قيد التنفيذ"
              ticketDate="2025-05-01"
              answerticket="/Icones/answer.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TicketsAdmin;
