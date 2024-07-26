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
        className={`rounded-full w-[38px] h-[38px] object-cover m-auto border-[2px] ${isSelected === 'account' ? 'border-white' : 'border-gray-300'}`}
        loading="lazy"
      />
    </Link>
  );
}
