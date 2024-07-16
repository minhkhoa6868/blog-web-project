import { useState } from "react";
import LazyLoad from "react-lazyload";
import OtherAccountInfo from "../components/OtherAccount/OtherAccountInfo.jsx";
import BlogContent from "../components/BlogContent.jsx";
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

export default function OtherAccount({ onSelect, status, handleFollow }) {
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
        deletePost={deletePost}
      />
    </div>
  );
}
