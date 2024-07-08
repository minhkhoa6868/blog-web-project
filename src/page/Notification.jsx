import AppearNotification from "../components/Notification/AppearNotification";
import notification from "../utils/notification";

export default function Notification() {
  return (
    <div
      className="border dark:border-gray-700 rounded-xl w-[500px] sm:w-[580px] md:w-[700px] xl:w-[800px] mx-auto my-[20px]
            transition-all ease duration-500 shadow-lg dark:bg-gray-800"
    >
      <h1 className="font-bold text-2xl pl-6 py-4">Notification</h1>
      {notification.map((noti) => (
        <AppearNotification key={noti.id} noti={noti} />
      ))}
    </div>
  );
}
