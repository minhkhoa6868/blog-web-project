import { useContext } from "react";
import BlogType from "./BlogType";
import blogType from "../../../utils/blogType";
import { BlogContext } from "../../../store/blog-context";

export default function AccountInfoHeader() {
  const blogCtx = useContext(BlogContext);

  return (
    <div
      className="flex flex-col items-center gap-3 translate-y-[-90px] 
        xl:items-start xl:pl-8"
    >
      <img
        src="account.gif"
        alt="account image"
        id="account-image"
        className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-white
                        dark:border-gray-700"
        loading="lazy"
      />
      <p className="font-semibold text-[1.5rem]">Trần Khoa</p>
      <p className="text-sm" id="account-nickname">
        __mkhoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
      <div className="flex justify-center gap-2 w-[320px] sm:w-[350px] flex-wrap text-sm xl:justify-start">
        {blogType.slice(0, 6).map((type) => (
          <BlogType key={type.id} children={type.type} />
        ))}
        <BlogType children="..." openBlogType={blogCtx.handleBlogType} />
      </div>
    </div>
  );
}
