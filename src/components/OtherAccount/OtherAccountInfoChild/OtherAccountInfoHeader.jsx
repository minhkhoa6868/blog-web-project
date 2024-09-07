import { useDispatch } from "react-redux";

import BlogType from "../../Account/AccountInfoChild/BlogType";
import blogType from "../../../utils/blogType";
import { blogActions } from "../../../store/blog-slice";

export default function OtherAccountInfoHeader() {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col items-center gap-3 translate-y-[-90px] 
        xl:items-start xl:pl-8"
    >
      <img
        src="account2.gif"
        alt="account image"
        id="account-image"
        className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-white
                        dark:border-gray-700"
        loading="lazy"
      />
      <p className="font-semibold text-[1.5rem]" id="other-account-name">
        Steven
      </p>
      <p className="text-sm" id="other-account-nickname">
        __stvn
      </p>
      <div className="w-[350px]">
        <p className="text-center text-sm xl:text-left" id="account-caption">
          hfjklasd sdhjfkhsdjk jh jsdh hfids cjdshfidfd giuv d ndfhdsa jf
          dsjfiewhirewj fmds jvgi s dsmnabvjbsdamnf sdjfudsb ds
          jhidshfidsnfsdnfjk.dsabm v jdb ibdsi vdsmnfiudshfgsifds f mds
          vjdsbjfhdsifhkdshfid
        </p>
      </div>
      <p className="text-sm">Blog type:</p>
      <div className="flex justify-center gap-2 w-[350px] flex-wrap text-sm xl:justify-start">
        {blogType.slice(0, 6).map((type) => (
          <BlogType key={type.id} children={type.type} />
        ))}
        <BlogType children="..." openBlogType={() => dispatch(blogActions.toggleBlogType())} />
      </div>
    </div>
  );
}
