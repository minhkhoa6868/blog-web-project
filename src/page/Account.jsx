import { useState, lazy, Suspense } from "react";
import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import DeleteWarning from "../components/DeleteWarning";
import Follow from "../components/Account/Follow.jsx";
import accountPost from "../utils/accountPost.js";
import countComments from "../utils/countComments.js";
import followers from "../utils/follower.js";
import followings from "../utils/following.js";

const AccountInfo = lazy(() => import("../components/Account/AccountInfo.jsx"));
const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function Account({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);
  const [showBlogType, setShowBlogType] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);

  const openBlogType = () => {
    setShowBlogType((prevState) => !prevState);
  };

  const openLike = (likes) => {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  };

  const openComment = (comments) => {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
  };

  const openShare = (shares) => {
    setShowShare((prevState) => !prevState);
    setCurrentShare(shares);
  };

  const deletePost = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  const openFollowers = () => {
    setShowFollowers((prevState) => !prevState);
  };

  const openFollowings = () => {
    setShowFollowings((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <AccountInfo
          numberBlogs={accountPost.length}
          numberFollowers={followers.length}
          numberFollowings={followings.length}
          openBlogType={openBlogType}
          openFollowers={openFollowers}
          openFollowings={openFollowings}
        />
      </Suspense>
      <Follow
        follow={followers}
        status="Followers"
        showFollow={showFollowers}
        openFollow={openFollowers}
      />
      <Follow
        follow={followings}
        status="Followings"
        showFollow={showFollowings}
        openFollow={openFollowings}
      />
      {accountPost.map((item) => (
        <Suspense key={item.id} fallback={<div>Loading...</div>}>
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
        </Suspense>
      ))}
      <ShowBlogType showBlogType={showBlogType} openBlogType={openBlogType} />
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
