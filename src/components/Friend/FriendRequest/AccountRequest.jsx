import "./buttonStyle.css";
import { Link } from "react-router-dom";

const AccountRequest = ({
  imageAccount,
  nameAccount,
  statusAction,
  deleteAccount,
}) => {
  return (
    <div
      className="flex items-center gap-2 p-[5px] hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500
      rounded-[12px] transition-all ease duration-300"
      id="account-request"
    >
      <Link to="/otheraccount">
        <img
          src={imageAccount}
          alt="image-account"
          className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300 bg-white"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-col items-start gap-1">
        <Link to="/otheraccount">
          <p className="font-semibold text-[0.9rem]" id="name-account">
            {nameAccount}
          </p>
        </Link>
        <div className="flex gap-2 text-[0.8rem]">
          <button
            className="px-[10px] rounded-[7px] bg-gradient-to-tr text-white from-blue-400 to-fuchsia-400 
            hover:from-blue-500 hover:to-fuchsia-500 dark:from-blue-500 dark:to-fuchsia-500
            dark:hover:from-blue-600 dark:hover:to-fuchsia-600 transition-all ease duration-300"
          >
            {statusAction}
          </button>
          <button
            onClick={deleteAccount}
            className="px-[10px] rounded-[7px] bg-gray-300 hover:bg-gray-400 dark:bg-gray-400 dark:hover:bg-gray-600
            transition-all ease duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountRequest;
