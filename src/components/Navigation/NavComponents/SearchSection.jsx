import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../../store/page-context";
import SeachIcon from "../../../icons/SearchIcon";

export default function SearchSection({ hoverActive, hoverNotActive }) {
  const pageCtx = useContext(PageContext);

  return (
    <Link
      to="/search"
      className={pageCtx.active === "search" ? hoverActive : hoverNotActive}
      onClick={() => pageCtx.updateActive("search")}
      key="search"
    >
      <SeachIcon height="50" width="18" />
    </Link>
  );
}
