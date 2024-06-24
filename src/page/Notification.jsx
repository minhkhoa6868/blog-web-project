import AppearNotification from "../components/Notification/AppearNotification";

export default function Notification() {
  return (
    <div
      className="border dark:border-gray-700 rounded-xl w-[500px] sm:w-[580px] md:w-[700px] xl:w-[800px] mx-auto my-[20px]
            transition-all ease duration-500 shadow-lg dark:bg-gray-800"
    >
      <h1 className="font-bold text-2xl pl-6 py-4">Notification</h1>
      <AppearNotification content='Khoa have uploaded a blog! Check out here!' />
      <AppearNotification content='David accept your request! You and David are friend now!' />
      <AppearNotification content='Steven send you request to be your friend' />
      {Array(10).fill(true).map((_,i) => <AppearNotification key={i} content='Khoa have uploaded a blog! Check out here!' />)}
    </div>
  );
}
