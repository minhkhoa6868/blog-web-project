import { useState } from "react";
import AccountInfo from "../components/Account/AccountInfo.jsx";
import BlogContent from "../components/BlogContent.jsx";
import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import DeleteWarning from "../components/DeleteWarning";
import Follow from "./Account/Follow.jsx";
import accountPost from "../utils/accountPost.js";
import countComments from "../utils/countComments.js";
import followers from "../utils/follower.js";
import followings from "../utils/following.js";

export default function Account({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showBlogType, setShowBlogType] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);

  function openBlogType() {
    setShowBlogType((prevState) => !prevState);
  }

  function openLike(likes) {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }

  function openComment(comments) {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
    console.log(comments);
  }

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
      <AccountInfo
        numberBlogs={accountPost.length}
        numberFollowers={followers.length}
        numberFollowings={followings.length}
        openBlogType={openBlogType}
        openFollowers={openFollowers}
        openFollowings={openFollowings}
      />
      <Follow follow={followers} status="Followers" showFollow={showFollowers} openFollow={openFollowers} />
      <Follow follow={followings} status="Followings" showFollow={showFollowings} openFollow={openFollowings} />
      {accountPost.map((item) => (
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
      <DeleteWarning warning="Do you want to delete this post?" deleteWarning={deleteWarning} deletePost={deletePost} />
    </div>
  );
}
