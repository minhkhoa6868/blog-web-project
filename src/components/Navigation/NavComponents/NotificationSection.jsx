import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../../store/page-context";
import NotificationIcon from "../../../icons/NotificationIcon";

export default function NotificationSection({ hoverActive, hoverNotActive }) {
  const pageCtx = useContext(PageContext);

  return (
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
  );
}
