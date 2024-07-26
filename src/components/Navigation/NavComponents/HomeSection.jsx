import { Link } from "react-router-dom";
import HomeIcon from "../../../icons/HomeIcon";

export default function HomeSection({
  isSelected,
  onSelect,
  hoverActive,
  hoverNotActive,
}) {
  return (
    <Link
      to="/"
      className={isSelected === "home" ? hoverActive : hoverNotActive}
      onClick={() => onSelect("home")}
      key="home"
    >
      <HomeIcon />
    </Link>
  );
}
