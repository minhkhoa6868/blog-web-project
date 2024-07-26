import { Link } from "react-router-dom";

const FooterLogin = () => {
  return (
    <>
      <p
        className="text-[0.9rem] text-center text-blue-400 hover:text-blue-500 cursor-pointer transition-all ease duration-300 font-semibold mt-[10px]"
      >
        Forgot password?
      </p>
      <Link
        to="/"
        className="text-center py-[5px] mt-[5px] rounded-md bg-gradient-to-tr from-blue-400 to-fuchsia-400
        text-white hover:from-blue-500 hover:to-fuchsia-500 transition-all ease duration-300"
      >
        Login
      </Link>
      <p className="text-[0.9rem] text-center text-gray-400">
        Don't have an account?
        <span
          className="text-blue-400 hover:text-blue-500 cursor-pointer ml-[4px] transition-all ease duration-300 font-semibold"
        >
          <Link to="/signup">Sign up here</Link>
        </span>
      </p>
    </>
  );
};

export default FooterLogin;
