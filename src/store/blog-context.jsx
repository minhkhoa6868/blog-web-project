import { createContext, useState } from "react";

export const BlogContext = createContext({
  blogType: false,
  followers: false,
  followings: false,
  delete: false,
  handleBlogType: () => {},
  hanldeFollowers: () => {},
  handleFollowings: () => {},
  handleDelete: () => {},
});

const BlogContextProvider = ({ children }) => {
  const [showBlogType, setShowBlogType] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);

  const openBlogType = () => {
    setShowBlogType((prevState) => !prevState);
  };

  const openFollowers = () => {
    setShowFollowers((prevState) => !prevState);
  };

  const openFollowings = () => {
    setShowFollowings((prevState) => !prevState);
  };

  const deletePost = () => {
    setDeleteWarning((prevState) => !prevState);
  };

  const blogCtx = {
    blogType: showBlogType,
    followers: showFollowers,
    followings: showFollowings,
    delete: deleteWarning,
    handleBlogType: openBlogType,
    hanldeFollowers: openFollowers,
    handleFollowings: openFollowings,
    handleDelete: deletePost,
  };

  return (
    <BlogContext.Provider value={blogCtx}>{children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;