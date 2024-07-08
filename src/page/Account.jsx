import { useState } from "react";
import AccountInfo from "../components/Account/AccountInfo.jsx";
import BlogContent from "../components/BlogContent.jsx";
import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import accountPost from "../utils/accountPost.js";

export default function Account({ onSelect }) {
  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showBlogType, setShowBlogType] = useState(false);

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

  return (
    <div className="flex flex-col gap-6">
      <AccountInfo numberBlogs={accountPost.length} openBlogType={openBlogType} />
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
    </div>
  );
}
