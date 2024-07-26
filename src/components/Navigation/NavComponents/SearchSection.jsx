import { Link } from "react-router-dom";
import SeachIcon from "../../../icons/SearchIcon";

export default function SearchSection({
  isSelected,
  onSelect,
  hoverActive,
  hoverNotActive,
}) {
  return (
    <Link
      to="/search"
      className={isSelected === "search" ? hoverActive : hoverNotActive}
      onClick={() => onSelect("search")}
      key="search"
    >
      <SeachIcon height="50" width="18" />
    </Link>
  );
}
