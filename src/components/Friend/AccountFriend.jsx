import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { blogActions } from "../../store/blog-slice";
import { pageActions } from "../../store/page-slice";

export default function AccountFriend({ image, name, status }) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col text-center gap-2 border rounded-xl pb-[10px] shadow-md
      dark:bg-gray-700 dark:border-none"
    >
      <Link
        to="/otheraccount"
        onClick={() => dispatch(pageActions.setActive(""))}
      >
        <img
          src={image}
          alt="image account"
          className="w-[170px] h-[220px] sm:w-[200px] sm:h-[250px] object-cover rounded-t-xl bg-white"
          loading="lazy"
        />
      </Link>
      <Link
        to="/otheraccount"
        onClick={() => dispatch(pageActions.setActive(""))}
        className="font-semibold"
      >
        {name}
      </Link>
      <button
        className="mx-[10px] py-[5px] rounded-lg bg-gradient-to-tr text-white
        from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500
        dark:border-none transition-all ease duration-300 text-[0.9rem]"
      >
        {status}
      </button>
      <button
        onClick={() => dispatch(blogActions.toggleDelete())}
        className="mx-[10px] py-[5px] rounded-lg bg-gray-200 hover:bg-gray-300 
        dark:bg-gray-400 dark:hover:bg-gray-500 transition-all ease duration-300
        text-[0.9rem]"
      >
        Delete
      </button>
    </div>
  );
}
