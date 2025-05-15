const EmptyNotifications = () => {
  return (
    <section className="text-lg font-medium leading-9 text-center max-w-[370px] text-slate-700">
      <article
        className="flex flex-col justify-center items-center px-20 py-16 w-full bg-white rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.25)]"
        role="alert"
        aria-label="No notifications"
      >
        <div className="flex flex-col max-w-full w-[137px]">
          <img
            src="/images/noNotify.png"
            alt="No notifications illustration"
            className="object-contain self-center w-20 rounded-none aspect-[0.92]"
          />
          <h2
            className="mt-8 text-lg font-extrabold"
            style={{
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(52,75,103,1)",
            }}
          >
            لا يوجد اشعارات
          </h2>
        </div>
      </article>
    </section>
  );
};

export default EmptyNotifications;
