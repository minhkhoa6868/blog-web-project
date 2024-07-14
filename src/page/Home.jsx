import { useState } from "react";
import LazyLoad from "react-lazyload";
import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/BlogContent";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import DeleteWarning from "../components/DeleteWarning";
import post from "../utils/homePost";
import countComments from "../utils/countComments";

export default function Home({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);
  const [deleteWarning, setDeleteWarning] = useState(false);

  function openLike(likes) {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }

  function openComment(comments) {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
  }

  const openShare = (shares) => {
    setShowShare((prevState) => !prevState);
    setCurrentShare(shares);
  };

  const deletePost = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-6 h-[100vh] overflow-y-scroll">
      <AddBlog onSelect={onSelect} />
      {post.map((item) => (
        <LazyLoad 
          key={item.id} 
          once={true}
          placeholder={<div>Loading...</div>}
        >
          <BlogContent
            key={item.id}
            onSelect={onSelect}
            openLike={() => openLike(item.likes)}
            openComment={() => openComment(item.comments)}
            openShare={() => openShare(item.shares)}
            image={item.image}
            accountImage={item.accountImage}
            name={item.name}
            time={item.time}
            numberLikes={item.likes.length}
            numberComments={countComments(item.comments)}
            numberShares={item.shares.length}
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
      <ShowShare
        showShare={showShare}
        openShare={() => openShare(currentShare)}
        shares={currentShare}
      />
      <DeleteWarning
        warning="Do you want to delete this post?"
        deleteWarning={deleteWarning}
        deletePost={deletePost}
      />
    </div>
  );
}
