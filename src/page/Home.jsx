import { useState } from "react";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/Home/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import post from "../utils/homePost";

export default function Home({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);

  function openLike(likes) {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }

  function openComment() {
    setShowComment((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col gap-6">
      <AddBlog onSelect={onSelect} />
      {post.map((item) => (
        <BlogContent
          key={item.id}
          onSelect={onSelect}
          openLike={() => openLike(item.likes)}
          openComment={openComment}
          image={item.image}
          accountImage={item.accountImage}
          name={item.name}
          time={item.time}
        />
      ))}
      <ShowLike
        showLike={showLike}
        openLike={() => openLike(currentLike)}
        likes={currentLike}
      />
      <ShowComment showComment={showComment} openComment={openComment} />
    </div>
  );
}
