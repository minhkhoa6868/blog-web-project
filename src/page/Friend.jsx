import { useState } from "react";
import FriendCategory from "../components/Friend/FriendCategory";
import FriendRequest from "../components/Friend/FriendRequest";
import invitedFriends from "../utils/invitedFriend";
import relatedFriends from "../utils/relatedFriend";

export default function Friend() {
  const [showInvited, setShowInvited] = useState(false);
  const [showRelated, setShowRelated] = useState(false);

  const openInvited = () => {
    setShowInvited((prevState) => !prevState);
  };

  const openRelated = () => {
    setShowRelated((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-[20px]">
      <FriendCategory
        category="Invited Friends"
        status="Accept"
        statusFriends={invitedFriends}
        handleClick={openInvited}
      />
      <FriendCategory
        category="Related Friends"
        status="+ Add"
        statusFriends={relatedFriends}
        handleClick={openRelated}
      />
      <FriendRequest
        showRequest={showInvited}
        handleClick={openInvited}
        status="Invited Friends"
        statusFriends={invitedFriends}
        statusAction="Accept"
      />
      <FriendRequest
        showRequest={showRelated}
        handleClick={openRelated}
        status="Related Friends"
        statusFriends={relatedFriends}
        statusAction="+ Add"
      />
    </div>
  );
}
