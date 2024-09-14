import { useDispatch } from "react-redux";

import Statistic from "./Statistic";
import FunctionButton from "./FunctionButton";
import { blogActions } from "../../../store/blog-slice";

export default function AccountInfoContent({
  numberBlogs,
  numberFollowers,
  numberFollowings,
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-6 translate-y-[-70px] xl:translate-y-0 xl:pt-[80px] xl:pb-7 xl:pr-8">
      <div className="flex justify-center gap-4">
        <Statistic number={numberBlogs} content="Blogs" />
        <Statistic
          number={numberFollowers}
          content="Followers"
          handleClick={() => dispatch(blogActions.toggleFollowers())}
        />
        <Statistic
          number={numberFollowings}
          content="Following"
          handleClick={() => dispatch(blogActions.toggleFollowings())}
        />
      </div>
      <div className="flex justify-center gap-7">
        <FunctionButton status="Edit Profile" navigate="/account/editProfile" />
        <FunctionButton status="Add New Blog" navigate="/newBlog" />
      </div>
    </div>
  );
}
