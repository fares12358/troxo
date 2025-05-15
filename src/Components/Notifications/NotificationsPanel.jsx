import NotificationItem from "./NotificationsItem";
import Divider from "./Divider";

const NotificationsPanel = () => {
  return (
    <section
      className="bg-white rounded-lg shadow-sm w-[370px] max-md:mx-auto max-md:my-0  max-md:max-w-[250px] max-md:shadow-none"
      role="region"
      aria-label="Notifications panel"
      dir="ltr"
    >
      <header className="px-0 py-2 text-lg font-bold text-center bg-rose-200 rounded-[8px_8px_0_0] text-pink-950">
        <h2>الاشعارات</h2>
      </header>
      <div className="flex flex-col  gap-4 p-5 max-sm:p-4">
        <NotificationItem
          icon="message-notif"
          title="كاثرين أرسلت لك رسالة"
          description="اضغط لرؤية الرسالة"
          time="منذ دقيقتين"
          svg={`/Icones/message-notif.svg`}
        />
        <Divider />
        <NotificationItem
          icon="box"
          title="تم تسليم شحنتك بالفعل"
          description="اضغط لرؤية تفاصيل الشحن"
          time="منذ دقيقتين"
          svg={`/Icones/box.svg`}
        />
        <Divider />
        <NotificationItem
          icon="message-notif"
          title="Tracky! جرب أحدث خدمة من "
          description="دعنا نجرب الميزة التي نقدمها"
          time="منذ دقيقتين"
          svg={`/Icones/message-notif.svg`}
        />
        <Divider />
        <NotificationItem
          icon="discount-shape"
          title="احصل على خصم 20% على المعاملة الأولى!"
          description="لكل المعاملات بدون متطلبات"
          time="منذ 10 دقائق"
          svg={`/Icones/discount-shape.svg`}
        />
      </div>
    </section>
  );
};

export default NotificationsPanel;
