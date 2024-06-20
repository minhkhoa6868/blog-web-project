import AccountFriend from "./AccountFriend";

export default function FriendCategory({ category, status }) {
  return (
    <div className="w-[500px] md:w-[730px] xl:w-[970px] border rounded-xl shadow-lg 
    py-[20px] dark:bg-gray-800 dark:border-gray-700 transition-all ease duration-300">
        <h1 className="pl-[20px] pb-[20px] font-bold text-2xl">{category}</h1>
      <div
        className="flex flex-wrap justify-center items-center gap-3"
      >
        <AccountFriend image="account.gif" name="fjsdkfjask" status={status} />
        <AccountFriend image="account.gif" name="rwerjkew" status={status} />
        <AccountFriend image="account.gif" name="jrwekrj" status={status} />
        <AccountFriend image="account.gif" name="fjdskf" status={status} />
        <AccountFriend image="account.gif" name="rjewkrljw" status={status} />
        <AccountFriend image="account.gif" name="fdsfndasm" status={status} />
        <AccountFriend image="account.gif" name="fdsnmfansd" status={status} />
        <AccountFriend image="account.gif" name="jrwejnf" status={status} />
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
