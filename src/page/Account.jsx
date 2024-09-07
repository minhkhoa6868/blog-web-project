import { useState, useCallback, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import ShowBlogType from "../components/Account/ShowBlogType.jsx";
import ShowLike from "../components/ShowLike";
import ShowComment from "../components/ShowComment";
import ShowShare from "../components/ShowShare.jsx";
import Follow from "../components/Account/Follow.jsx";
import accountPost from "../utils/accountPost.js";
import countComments from "../utils/countComments.js";
import followers from "../utils/follower.js";
import followings from "../utils/following.js";
import { blogActions } from "../store/blog-slice.js";

const AccountInfo = lazy(() => import("../components/Account/AccountInfo.jsx"));
const BlogContent = lazy(() => import("../components/BlogContent.jsx"));

export default function Account() {
  const dispatch = useDispatch();
  const showFollowers = useSelector(state => state.blog.showFollowers);
  const showFollowings = useSelector(state => state.blog.showFollowings);

  const [showLike, setShowLike] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentComment, setCurrentComment] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [currentShare, setCurrentShare] = useState([]);
  // track active post of options
  const [activeOptionId, setActiveOptionId] = useState(null);

  // show like of each post
  const openLike = useCallback((likes) => {
    setShowLike((prevState) => !prevState);
    setCurrentLike(likes);
  }, []);

  // show comment of each post
  const openComment = useCallback((comments) => {
    setShowComment((prevState) => !prevState);
    setCurrentComment(comments);
  }, []);

  // show share of each post
  const openShare = useCallback((shares) => {
    setShowShare((prevState) => !prevState);
    setCurrentShare(shares);
  }, []);

  // show option of each post
  const openOption = useCallback((postId) => {
    setActiveOptionId((prevId) => (prevId === postId ? null : postId));
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <AccountInfo
          numberBlogs={accountPost.length}
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
      {accountPost.map((item) => (
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
            showOption={activeOptionId === item.id}
            openOption={() => openOption(item.id)}
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
