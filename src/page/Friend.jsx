import FriendCategory from "../components/Friend/FriendCategory";
import invitedFriends from "../utils/invitedFriend";
import relatedFriends from "../utils/relatedFriend";

export default function Friend() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-[20px]">
            <FriendCategory category="Invited Friends" status="Accept" statusFriends={invitedFriends} />
            <FriendCategory category="Related Friends" status="+ Add Friend" statusFriends={relatedFriends} />
        </div>
    );
}