import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../../store/page-context";
import HomeIcon from "../../../icons/HomeIcon";

export default function HomeSection({ hoverActive, hoverNotActive }) {
  const pageCtx = useContext(PageContext);

  return (
    <Link
      to="/"
      className={pageCtx.active === "home" ? hoverActive : hoverNotActive}
      onClick={() => pageCtx.updateActive("home")}
      key="home"
    >
      <HomeIcon />
    </Link>
  );
}
