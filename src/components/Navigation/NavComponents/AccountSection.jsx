import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../../store/page-context";

export default function AccountSection({
  hoverAccountActive,
  hoverAccountNotActive,
}) {
  const pageCtx = useContext(PageContext);

  return (
    <Link
      to="/account"
      className={
        pageCtx.active === "account"
          ? hoverAccountActive
          : hoverAccountNotActive
      }
      onClick={() => pageCtx.updateActive("account")}
      key="account"
      id="account"
    >
      <img
        src="account.gif"
        alt="account"
        id="account-img"
        className={`rounded-full w-[38px] h-[38px] object-cover m-auto border-[2px] ${pageCtx.active === "account" ? "border-white" : "border-gray-300"}`}
        loading="lazy"
      />
    </Link>
  );
}
