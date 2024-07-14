import { useState } from "react";
import LazyLoad from "react-lazyload";
import AppearNotification from "../components/Notification/AppearNotification";
import DeleteWarning from "../components/DeleteWarning";
import notification from "../utils/notification";

export default function Notification() {
  const [deleteWarning, setDeleteWarning] = useState(false);

  const deletePost = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  return (
    <div
      className="border dark:border-gray-700 rounded-xl w-[500px] sm:w-[580px] md:w-[700px] xl:w-[800px] mx-auto my-[20px]
            transition-all ease duration-500 shadow-lg dark:bg-gray-800"
    >
      <h1 className="font-bold text-2xl pl-6 py-4">Notification</h1>
      {notification.map((noti) => (
        <LazyLoad 
          key={noti.id}
          once={true}
          placeholder={<div>Loading...</div>}
        >
         <AppearNotification key={noti.id} noti={noti} handleClick={deletePost} />
        </LazyLoad>
      ))}
      <DeleteWarning warning="Do you want to delete this notifications?" deleteWarning={deleteWarning} deletePost={deletePost} />
    </div>
  );
}
