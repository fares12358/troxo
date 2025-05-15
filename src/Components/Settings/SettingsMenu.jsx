import SettingsOption from "./SettingsOption";
import Divider from "../Notifications/Divider";

const SettingsMenu = () => {
  const profileIcon = `/Icones/Profile.svg`;

  const settingsIcon = `/Icones/Api.svg`;

  const lockIcon = `/Icones/Lock.svg`;

  const signOutIcon = `/Icones/SignOutIcone.svg`;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <nav
        className="bg-white rounded-lg shadow-sm h-[319px] w-[370px]"
        role="navigation"
        aria-label="Settings menu"
        dir="ltr"
      >
        <header className="w-full text-lg font-bold leading-9 bg-rose-200 rounded-lg h-[59px] text-pink-950 flex items-center justify-center">
          مؤسسة عبد الله
        </header>
        <div className="p-3.5">
          <div className="flex flex-col items-end gap-1.5">
            <SettingsOption icon={profileIcon} text="الملف الشخصي" />
            <Divider />
            <SettingsOption icon={settingsIcon} text="التكاملات" />
            <Divider />
            <SettingsOption icon={lockIcon} text="تغيير كلمة المرور" />
            <SettingsOption
              icon={signOutIcon}
              text="تسجيل الخروج"
              variant="danger"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default SettingsMenu;
