import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PageContext } from "../../../store/page-context";
import { signupActions } from "../../../store/signup-slice";

const FooterSignup = () => {
  const pageCtx = useContext(PageContext);
  const dispatch = useDispatch();
  const showWarning = useSelector((state) => state.signup.showWarning);

  const navigateHome = () => {
    pageCtx.updateActive("home");
    dispatch(signupActions.hasSignup());
    if (showWarning) dispatch(signupActions.toggleShow());
  }

  return (
    <>
      <Link
        to="/"
        onClick={navigateHome}
        className="text-center py-[5px] mt-[5px] rounded-md bg-gradient-to-tr from-blue-400 to-fuchsia-400
            text-white hover:from-blue-500 hover:to-fuchsia-500 transition-all ease duration-300"
      >
        Sign Up
      </Link>
      <p className="text-[0.9rem] text-center text-gray-400">
        Already have an account?
        <span
          className="text-blue-400 hover:text-blue-500 cursor-pointer ml-[4px] transition-all ease duration-300 font-semibold"
        >
          <Link to="/login">Login here</Link>
        </span>
      </p>
    </>
  );
};

export default FooterSignup;
