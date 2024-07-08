import { useState } from "react";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import post from "../utils/homePost";

export default function Home({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);

  function openLike(likes) {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }

  function openComment(comments) {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
    console.log(comments);
  }

  return (
    <div className="flex flex-col gap-6">
      <AddBlog onSelect={onSelect} />
      {post.map((item) => (
        <BlogContent
          key={item.id}
          onSelect={onSelect}
          openLike={() => openLike(item.likes)}
          openComment={() => openComment(item.comments)}
          image={item.image}
          accountImage={item.accountImage}
          name={item.name}
          time={item.time}
          numberLikes={item.likes.length}
        />
      ))}
      <ShowLike
        showLike={showLike}
        openLike={() => openLike(currentLike)}
        likes={currentLike}
      />
      <ShowComment
        showComment={showComment}
        openComment={() => openComment(currentComment)}
        comments={currentComment}
      />
    </div>
  );
}
