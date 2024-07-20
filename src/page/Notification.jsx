import { useState, lazy, Suspense } from "react";
import DeleteWarning from "../components/DeleteWarning";
import notification from "../utils/notification";

const AppearNotification = lazy(() => import("../components/Notification/AppearNotification"));

export default function Notification() {
  const [deleteWarning, setDeleteWarning] = useState(false);

  const deleteNotification = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  return (
    <div
      className="border dark:border-gray-700 rounded-xl w-[500px] sm:w-[580px] md:w-[700px] xl:w-[800px] mx-auto my-[20px]
            transition-all ease duration-500 shadow-lg dark:bg-gray-800"
    >
      <h1 className="font-bold text-2xl pl-6 py-4">Notification</h1>
      {notification.map((noti) => (
        <Suspense
          key={noti.id}
          fallback={<div>Loading...</div>}
        >
          <AppearNotification
            key={noti.id}
            noti={noti}
            handleClick={deleteNotification}
          />
        </Suspense>
      ))}
      <DeleteWarning
        warning="Do you want to delete this notifications?"
        deleteWarning={deleteWarning}
        handleDelete={deleteNotification}
      />
    </div>
  );
}
