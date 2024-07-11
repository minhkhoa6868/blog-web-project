import BlogContentHeader from "./BlogContentChild/BlogContentHeader";
import BlogContentImage from "./BlogContentChild/BlogContentImage";
import BlogContentFooter from "./BlogContentChild/BlogContentFooter";

export default function BlogContent({
  onSelect,
  openLike,
  openComment,
  image,
  accountImage,
  name,
  time,
  numberLikes,
  numberComments,
  deletePost,
}) {
  return (
    <div
      className="flex flex-col gap-3 mx-auto shadow-lg w-[500px] sm:w-[580px] md:w-[680px] xl:w-[720px] 
            py-[15px] h-fit border rounded-xl justify-between dark:bg-gray-700 dark:border-gray-500 
            transition-all ease duration-300"
    >
      <BlogContentHeader
        onSelect={onSelect}
        accountImage={accountImage}
        name={name}
        time={time}
        deletePost={deletePost}
      />
      <BlogContentImage image={image} />
      <BlogContentFooter
        numberLikes={numberLikes}
        numberComments={numberComments}
        openLike={openLike}
        openComment={openComment}
      />
    </div>
  );
}
