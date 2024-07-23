import Statistic from "../../Account/AccountInfoChild/Statistic";
import ButtonRequest from "./ButtonRequest";

export default function OtherAccountInfoContent({
  numberBlogs,
  numberFollowers,
  numberFollowings,
  openFollowers,
  openFollowings,
  status,
  handleFollow,
}) {
    
  return (
    <div className="flex flex-col gap-6 translate-y-[-70px] xl:translate-y-0 xl:pt-[80px] xl:pb-7 xl:pr-8">
      <div className="flex justify-center gap-4">
        <Statistic number={numberBlogs} content="Blogs" />
        <Statistic
          number={numberFollowers}
          content="Followers"
          handleClick={openFollowers}
        />
        <Statistic
          number={numberFollowings}
          content="Following"
          handleClick={openFollowings}
        />
      </div>
      <div className="flex justify-center gap-7">
        <ButtonRequest status={status} handleFollow={handleFollow}  />
      </div>
    </div>
  );
}
