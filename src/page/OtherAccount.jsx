import { useState, useCallback, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import Follow from "../components/Account/Follow.jsx";
import otherAccountPost from "../utils/otherAccountPost.js";
import countComments from "../utils/countComments.js";
import followers from "../utils/follower.js";
import followings from "../utils/following.js";
import { blogActions } from "../store/blog-slice.js";

const OtherAccountInfo = lazy(
  () => import("../components/OtherAccount/OtherAccountInfo.jsx")
);
const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function OtherAccount() {
  const dispatch = useDispatch();
  const showFollowers = useSelector(state => state.blog.showFollowers);
  const showFollowings = useSelector(state => state.blog.showFollowings);

  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);

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
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <OtherAccountInfo
          numberBlogs={otherAccountPost.length}
          numberFollowers={followers.length}
          numberFollowings={followings.length}
        />
      </Suspense>
      <Follow
        follow={followers}
        status="Followers"
        showFollow={showFollowers}
        openFollow={() => dispatch(blogActions.toggleFollowers())}
      />
      <Follow
        follow={followings}
        status="Followings"
        showFollow={showFollowings}
        openFollow={() => dispatch(blogActions.toggleFollowings())}
      />
      {otherAccountPost.map((item) => (
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
      <ShowBlogType />
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
