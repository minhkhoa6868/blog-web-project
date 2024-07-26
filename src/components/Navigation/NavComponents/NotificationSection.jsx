import { Link } from "react-router-dom";
import NotificationIcon from "../../../icons/NotificationIcon";

export default function NotificationSection({
  isSelected,
  onSelect,
  hoverActive,
  hoverNotActive,
}) {
  return (
    <Link
      to="/notification"
      className={isSelected === "notification" ? hoverActive : hoverNotActive}
      onClick={() => onSelect("notification")}
      key="notification"
    >
      <NotificationIcon />
    </Link>
  );
}
