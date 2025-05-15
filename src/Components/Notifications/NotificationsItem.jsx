import React from "react";
import IconWrapper from "./IconWrapper";

const NotificationItem = ({ icon, title, description, time, svg }) => {
  return (
    <article
      className="flex gap-3.5 items-start max-sm:gap-2.5"
      role="listitem"
    >
      <div className="flex-1">
        <div className="flex gap-1 items-center mb-1">
          <time className="text-xs leading-5 text-right text-gray-400 w-[67px]">
            {time}
          </time>
          <h3 className="flex-1 text-sm text-right leading-5 text-slate-900">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-6 text-right text-gray-400">
          {description}
        </p>
      </div>
      <IconWrapper icon={icon} svg={svg} />
    </article>
  );
};

export default NotificationItem;
