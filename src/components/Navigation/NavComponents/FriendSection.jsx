import { NavLink } from "react-router-dom";

import FriendIcon from "../../../icons/FriendIcon";

export default function FiendSection({
  isSignup,
  hoverActive,
  hoverNotActive,
  toggleWarningHandler,
}) {
  return (
    <>
      {isSignup ? (
        <NavLink
          to="/friend"
          className={({ isActive }) =>
            isActive ? hoverActive : hoverNotActive
          }
          key="friend"
        >
          <FriendIcon />
        </NavLink>
      ) : (
        <button className={hoverNotActive} onClick={toggleWarningHandler}>
          <FriendIcon />
        </button>
      )}
    </>
  );
}
