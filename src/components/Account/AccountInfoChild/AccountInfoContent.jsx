import { useContext } from "react";
import Statistic from "./Statistic";
import ButtonEdit from "./ButtonEdit";
import ButtonNewBlog from "./ButtonNewBlog";
import { BlogContext } from "../../../store/blog-context";

export default function AccountInfoContent({
  numberBlogs,
  numberFollowers,
  numberFollowings,
}) {
  const blogCtx = useContext(BlogContext);
  return (
    <div className="flex flex-col gap-6 translate-y-[-70px] xl:translate-y-0 xl:pt-[80px] xl:pb-7 xl:pr-8">
      <div className="flex justify-center gap-4">
        <Statistic number={numberBlogs} content="Blogs" />
        <Statistic
          number={numberFollowers}
          content="Followers"
          handleClick={blogCtx.hanldeFollowers}
        />
        <Statistic
          number={numberFollowings}
          content="Following"
          handleClick={blogCtx.handleFollowings}
        />
      </div>
      <div className="flex justify-center gap-7">
        <ButtonEdit />
        <ButtonNewBlog />
      </div>
    </div>
  );
}
