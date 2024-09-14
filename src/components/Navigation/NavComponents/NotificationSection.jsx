import { NavLink } from "react-router-dom";

import NotificationIcon from "../../../icons/NotificationIcon";

export default function NotificationSection({
  isSignup,
  hoverActive,
  hoverNotActive,
  toggleWarningHandler,
}) {
  return (
    <>
      {isSignup ? (
        <NavLink
          to="/notification"
          className={({ isActive }) =>
            isActive ? hoverActive : hoverNotActive
          }
          key="notification"
        >
          <NotificationIcon />
        </NavLink>
      ) : (
        <button className={hoverNotActive} onClick={toggleWarningHandler}>
          <NotificationIcon />
        </button>
      )}
    </>
  );
}
