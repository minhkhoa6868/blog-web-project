import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signupActions } from "../../../store/signup-slice";

const RequireButton = ({ status, navigate }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={navigate}
      onClick={() => dispatch(signupActions.toggleShow())}
      className="px-[15px] py-[5px] h-fit w-[80px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
      rounded-[10px] hover:from-blue-500 hover:to-fuchsia-500 transition-all ease duration-300 text-center"
    >
      {status}
    </Link>
  );
};

export default RequireButton;
