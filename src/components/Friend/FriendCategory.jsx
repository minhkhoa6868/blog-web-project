import AccountFriend from "./AccountFriend";

export default function FriendCategory({ category, status, statusFriends }) {
  return (
    <div className="w-[500px] md:w-[730px] xl:w-[970px] border rounded-xl shadow-lg 
    py-[20px] dark:bg-gray-800 dark:border-gray-700 transition-all ease duration-300">
        <h1 className="pl-[20px] pb-[20px] font-bold text-2xl">{category}</h1>
      <div
        className="flex flex-wrap justify-center items-center gap-3"
      >
        {statusFriends.map((friend) => (
          <AccountFriend
            key={friend.id}
            image={friend.imageAccount}
            name={friend.nameAccount}
            status={status}
          />
        ))}
        <button
          className="w-full mx-5 py-2 rounded-lg text-blue-600 hover:bg-gray-200
                dark:text-blue-400 dark:hover:bg-gray-600 transition-all ease duration-300"
        >
          More
        </button>
      </div>
    </div>
  );
}
