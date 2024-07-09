import { useState } from "react";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import DeleteWarning from "../components/DeleteWarning";
import post from "../utils/homePost";

export default function Home({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [deleteWarning, setDeleteWarning] = useState(false);

  function openLike(likes) {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }

  function openComment(comments) {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
  }

  const deletePost = () => {
    setDeleteWarning((prevState) => !prevState);
  };

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
          deletePost={deletePost}
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
      <DeleteWarning warning="Do you want to delete this post?" deleteWarning={deleteWarning} deletePost={deletePost} />
    </div>
  );
}
