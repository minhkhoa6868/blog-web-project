import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../../store/page-context";
import FriendIcon from "../../../icons/FriendIcon";

export default function FiendSection({
  hoverActive,
  hoverNotActive,
}) {
  const pageCtx = useContext(PageContext)

  return (
    <Link
      to="/friend"
      className={pageCtx.active === "friend" ? hoverActive : hoverNotActive}
      onClick={() => pageCtx.updateActive("friend")}
      key="friend"
    >
      <FriendIcon />
    </Link>
  );
}
