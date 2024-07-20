import { useState } from "react";
import FriendCategory from "../components/Friend/FriendCategory";
import FriendRequest from "../components/Friend/FriendRequest";
import DeleteWarning from "../components/DeleteWarning";
import relatedFriends from "../utils/relatedFriend";

export default function Friend() {
  const [showRelated, setShowRelated] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);

  const openRelated = () => {
    setShowRelated((prevState) => !prevState);
  };

  const deleteAccount = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-[20px]">
      <FriendCategory
        category="Related Friends"
        status="Follow"
        statusFriends={relatedFriends}
        openRelated={openRelated}
        deleteAccount={deleteAccount}
      />
      <FriendRequest
        showRequest={showRelated}
        handleClick={openRelated}
        status="Related Friends"
        statusFriends={relatedFriends}
        statusAction="Follow"
        deleteAccount={deleteAccount}
      />
      <DeleteWarning
        warning="Do you want to delete this account?"
        deleteWarning={deleteWarning}
        handleDelete={deleteAccount}
      />
    </div>
  );
}
