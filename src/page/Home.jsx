import { useState } from "react";
import LazyLoad from "react-lazyload";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import DeleteWarning from "../components/DeleteWarning";
import post from "../utils/homePost";
import countComments from "../utils/countComments";

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
    <div className="flex flex-col gap-6 mb-[20px] h-[100vh] overflow-y-scroll">
      <AddBlog onSelect={onSelect} />
      {post.map((item) => (
        <LazyLoad 
          key={item.id} 
          height={300}
          offset={100}
          once={true}
          placeholder={<div>Loading...</div>}
        >
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
            numberComments={countComments(item.comments)}
            deletePost={deletePost}
          />
        </LazyLoad>
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
      <DeleteWarning
        warning="Do you want to delete this post?"
        deleteWarning={deleteWarning}
        deletePost={deletePost}
      />
    </div>
  );
}
