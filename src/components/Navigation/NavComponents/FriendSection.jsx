import { Link } from "react-router-dom";
import FriendIcon from "../../../icons/FriendIcon";

export default function FiendSection({
  isSelected,
  onSelect,
  hoverActive,
  hoverNotActive,
}) {
  return (
    <Link
      to="/friend"
      className={isSelected === "friend" ? hoverActive : hoverNotActive}
      onClick={() => onSelect("friend")}
      key="friend"
    >
      <FriendIcon />
    </Link>
  );
}
