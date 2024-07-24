import { Link } from "react-router-dom";

const SignupButton = () => {
    return (
        <Link
            to="/signup" 
            className="px-[15px] py-[5px] h-fit bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
            rounded-[10px] hover:from-blue-500 hover:to-fuchsia-500 transition-all ease duration-300"
        >
            Signup
        </Link>
    );
}

export default SignupButton;