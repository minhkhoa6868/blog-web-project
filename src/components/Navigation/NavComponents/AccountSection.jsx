import { Link } from "react-router-dom";

export default function HomeSection({
  isSelected,
  onSelect,
  hoverAccountActive,
  hoverAccountNotActive,
}) {
  return (
    <Link
      to="/account"
      className={
        isSelected === "account" ? hoverAccountActive : hoverAccountNotActive
      }
      onClick={() => onSelect("account")}
      key="account"
      id="account"
    >
      <img
        src="account.gif"
        alt="account"
        id="account-img"
        className="rounded-full w-[38px] h-[38px] object-cover m-auto border-[3px] border-gray-400"
        loading="lazy"
      />
    </Link>
  );
}
