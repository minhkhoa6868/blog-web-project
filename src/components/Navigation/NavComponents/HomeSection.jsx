import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomeIcon from "../../../icons/HomeIcon";
import { pageActions } from "../../../store/page-slice";

export default function HomeSection({ hoverActive, hoverNotActive }) {
  const dispatch = useDispatch();

  return (
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? hoverActive : hoverNotActive)}
      onClick={() => dispatch(pageActions.setActive("home"))}
      key="home"
    >
      <HomeIcon />
    </NavLink>
  );
}
