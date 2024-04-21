import FriendCategory from "../components/Friend/FriendCategory";

export default function Friend() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-[20px]">
            <FriendCategory category="Invited Friends" status="Accept" />
            <FriendCategory category="Related Friends" status="+ Add Friend" />
        </div>
    );
}