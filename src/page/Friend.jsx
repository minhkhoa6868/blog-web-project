import { useState, useContext } from "react";
import FriendCategory from "../components/Friend/FriendCategory";
import FriendRequest from "../components/Friend/FriendRequest";
import DeleteWarning from "../components/DeleteWarning";
import relatedFriends from "../utils/relatedFriend";
import { BlogContext } from "../store/blog-context";

export default function Friend() {
  const blogCtx = useContext(BlogContext);

  const [showRelated, setShowRelated] = useState(false);

  const openRelated = () => {
    setShowRelated((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-[20px]">
      <FriendCategory
        category="Related Friends"
        status="Follow"
        statusFriends={relatedFriends}
        openRelated={openRelated}
        deleteAccount={blogCtx.handleDelete}
      />
      <FriendRequest
        showRequest={showRelated}
        handleClick={openRelated}
        status="Related Friends"
        statusFriends={relatedFriends}
        statusAction="Follow"
        deleteAccount={blogCtx.handleDelete}
      />
      <DeleteWarning warning="Do you want to delete this account?" />
    </div>
  );
}
