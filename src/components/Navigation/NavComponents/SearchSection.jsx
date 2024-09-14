import { NavLink } from "react-router-dom";

import SeachIcon from "../../../icons/SearchIcon";

export default function SearchSection({ hoverActive, hoverNotActive }) {
  return (
    <NavLink
      to="/search"
      className={({ isActive }) => isActive ? hoverActive : hoverNotActive}
      key="search"
    >
      <SeachIcon height="50" width="18" />
    </NavLink>
  );
}
