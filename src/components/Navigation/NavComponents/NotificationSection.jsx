import { useContext } from "react";
import { Link } from "react-router-dom";

import { PageContext } from "../../../store/page-context";
import NotificationIcon from "../../../icons/NotificationIcon";

export default function NotificationSection({
  isSignup,
  hoverActive,
  hoverNotActive,
  toggleWarningHandler
}) {
  const pageCtx = useContext(PageContext);

  return (
    <>
      {isSignup ? (
        <Link
          to="/notification"
          className={
            pageCtx.active === "notification" ? hoverActive : hoverNotActive
          }
          onClick={() => pageCtx.updateActive("notification")}
          key="notification"
        >
          <NotificationIcon />
        </Link>
      ) : (
        <button className={hoverNotActive} onClick={toggleWarningHandler}>
          <NotificationIcon />
        </button>
      )}
    </>
  );
}
