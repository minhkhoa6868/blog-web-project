import OtherAccountInfoHeader from "./OtherAccountInfoChild/OtherAccountInfoHeader";
import OtherAccountInfoContent from "./OtherAccountInfoChild/OtherAccountInfoContent";

export default function OtherAccountInfo({
  numberBlogs,
  numberFollowers,
  numberFollowings,
  openBlogType,
  openFollowers,
  openFollowings,
  status,
  handleFollow,
}) {
  return (
    <div className="flex justify-center mt-5">
      <div
        className="border rounded-xl shadow-lg w-[400px] sm:w-[580px] md:w-[680px] 
        xl:w-[870px] h-fit dark:bg-gray-700 dark:border-gray-500 
        transition-all ease duration-300"
      >
        <div className="w-full rounded-t-lg h-[150px] bg-gradient-to-tr from-blue-400 to-fuchsia-400"></div>
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <OtherAccountInfoHeader openBlogType={openBlogType} />
          <OtherAccountInfoContent
            numberBlogs={numberBlogs}
            numberFollowers={numberFollowers}
            numberFollowings={numberFollowings}
            openFollowers={openFollowers}
            openFollowings={openFollowings}
            status={status}
            handleFollow={handleFollow}
          />
        </div>
      </div>
    </div>
  );
}
