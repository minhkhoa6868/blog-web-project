import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { pageActions } from "../../../store/page-slice";

export default function AccountSection({
  hoverAccountActive,
  hoverAccountNotActive,
}) {
  const dispatch = useDispatch();

  return (
    <NavLink
      to="/account"
      className={({ isActive }) =>
        isActive ? hoverAccountActive : hoverAccountNotActive
      }
      onClick={() => dispatch(pageActions.setActive("account"))}
      key="account"
    >
      <img
        src="account.gif"
        alt="account"
        id="account-img"
        className="rounded-full w-[38px] h-[38px] object-cover m-auto border-[2px] border-gray-300"
        loading="lazy"
      />
    </NavLink>
  );
}
