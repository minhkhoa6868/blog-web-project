import { useState, useCallback, lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import AddBlog from "../components/Home/AddBlog";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import DeleteWarning from "../components/DeleteWarning";
import SignupWarning from "../components/SignupWarning.jsx";
import post from "../utils/homePost";
import countComments from "../utils/countComments";

const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function Home() {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);

  const isSignup = useSelector((state) => state.signup.isSignup);
  const showWarning = useSelector((state) => state.signup.showWarning);

  const openLike = useCallback((likes) => {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  });

  const openComment = useCallback((comments) => {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
  });

  const openShare = useCallback((shares) => {
    setShowShare((prevState) => !prevState);
    setCurrentShare(shares);
  });

  return (
    <div className="flex flex-col">
      {isSignup && <AddBlog />}
      <div className="flex flex-col gap-6 my-[25px]">
        {post.map((item) => (
          <Suspense key={item.id} fallback={<div>Loading...</div>}>
            <BlogContent
              key={item.id}
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
            />
          </Suspense>
        ))}
      </div>
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
      <DeleteWarning warning="Do you want to delete this post?" />
      {showWarning && <SignupWarning />}
    </div>
  );
}
