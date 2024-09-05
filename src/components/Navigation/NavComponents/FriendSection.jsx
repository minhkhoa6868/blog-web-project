import { useContext } from "react";
import { Link } from "react-router-dom";

import { PageContext } from "../../../store/page-context";
import FriendIcon from "../../../icons/FriendIcon";

export default function FiendSection({
  isSignup,
  hoverActive,
  hoverNotActive,
  toggleWarningHandler,
}) {
  const pageCtx = useContext(PageContext);

  return (
    <>
      {isSignup ? (
        <Link
          to="/friend"
          className={pageCtx.active === "friend" ? hoverActive : hoverNotActive}
          onClick={() => pageCtx.updateActive("friend")}
          key="friend"
        >
          <FriendIcon />
        </Link>
      ) : (
        <button className={hoverNotActive} onClick={toggleWarningHandler}>
          <FriendIcon />
        </button>
      )}
    </>
  );
}
