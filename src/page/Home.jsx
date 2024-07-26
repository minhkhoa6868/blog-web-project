import { useState, lazy, Suspense } from "react";
import AddBlog from "../components/Home/AddBlog";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import DeleteWarning from "../components/DeleteWarning";
import post from "../utils/homePost";
import countComments from "../utils/countComments";

const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function Home({ isActive, onSelect }) {
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
    <div className="flex flex-col gap-6">
      <AddBlog onSelect={onSelect} />
      {post.map((item) => (
        <Suspense
          key={item.id}
          fallback={<div>Loading...</div>}
        >
          <BlogContent
            key={item.id}
            isActive={isActive}
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
        </Suspense>
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
        handleDelete={deletePost}
      />
    </div>
  );
}
