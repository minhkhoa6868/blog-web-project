import { Outlet, Link } from "react-router-dom";
import DeleteButton from "../DeleteButton";
import OptionButton from "../OptionButton";
import BlogOption from "../BlogOption";
import PublicIcon from "../../icons/PublicIcon";

export default function BlogContentHeader({
  isActive,
  onSelect,
  accountImage,
  name,
  time,
  deletePost,
  showOption,
  openOption
}) {
  return (
    <div className="flex flex-col gap-3 px-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Link to="/account" onClick={() => onSelect("account")} key="account">
            <img
              src={accountImage}
              alt="account-img"
              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300 bg-white"
              loading="lazy"
            />
          </Link>
          <div>
            <Link
              className="font-semibold"
              to="/account"
              onClick={() => onSelect("account")}
              key="account"
            >
              <span>{name}</span>
            </Link>
            <div className="flex gap-2 text-gray-400 text-[0.85rem] fill-sky-400">
              <span id="time">{time} hour</span>
              <div id="public">
                <PublicIcon height="22" width="12" />
              </div>
            </div>
          </div>
        </div>
        {isActive === "home" ? (
          <DeleteButton deletePost={deletePost} />
        ) : isActive === "account" ? (
          <div>
            <OptionButton openOption={openOption} />
            <BlogOption showOption={showOption} />
          </div>
        ) : undefined}
      </div>
      <p className="text-justify text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
      </p>
      <Outlet />
    </div>
  );
}