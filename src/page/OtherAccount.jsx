import { useState, lazy, Suspense } from "react";
import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import DeleteWarning from "../components/DeleteWarning";
import Follow from "../components/Account/Follow.jsx";
import otherAccountPost from "../utils/otherAccountPost.js";
import countComments from "../utils/countComments.js";
import followers from "../utils/follower.js";
import followings from "../utils/following.js";

const OtherAccountInfo = lazy(
  () => import("../components/OtherAccount/OtherAccountInfo.jsx")
);
const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function OtherAccount({ onSelect, status, handleFollow }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);
  const [showBlogType, setShowBlogType] = useState(false);
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

  const openFollowers = () => {
    setShowFollowers((prevState) => !prevState);
  };

  const openFollowings = () => {
    setShowFollowings((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <OtherAccountInfo
          numberBlogs={otherAccountPost.length}
          numberFollowers={followers.length}
          numberFollowings={followings.length}
          openBlogType={openBlogType}
          openFollowers={openFollowers}
          openFollowings={openFollowings}
          status={status}
          handleFollow={handleFollow}
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
      {otherAccountPost.map((item) => (
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
    </div>
  );
}
