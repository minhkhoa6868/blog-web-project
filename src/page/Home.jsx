import { useState } from "react";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/Home/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";

export default function Home({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [showComment, setShowComment] = useState(false);

  function openLike() {
    setShowLike((prevState) => !prevState);
  }

  function openComment() {
    setShowComment((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col gap-6">
      <AddBlog onSelect={onSelect} />
      <BlogContent
        onSelect={onSelect}
        openLike={openLike}
        openComment={openComment}
        image="image-post.gif"
        accountImage="account.gif"
        name="Trần Khoa"
        time="1"
      />
      <BlogContent
        onSelect={onSelect}
        openLike={openLike}
        openComment={openComment}
        image="account2.gif"
        accountImage="account2.gif"
        name="Steven"
        time="2"
      />
      <BlogContent
        onSelect={onSelect}
        openLike={openLike}
        openComment={openComment}
        image="image-post2.gif"
        accountImage="account3.gif"
        name="David"
        time="1"
      />
      <BlogContent
        onSelect={onSelect}
        openLike={openLike}
        openComment={openComment}
        image="image-post3.gif"
        accountImage="account4.gif"
        name="buffalo"
        time="2"
      />
      <ShowLike showLike={showLike} openLike={openLike} />
      <ShowComment showComment={showComment} openComment={openComment} />
    </div>
  );
}
