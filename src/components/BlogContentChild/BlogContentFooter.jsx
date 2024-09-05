import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowNumber from "./ShowNumber";
import AddCommentSection from "./AddCommentSection";
import HeartIcon from "../../icons/HeartIcon";
import CommentIcon from "../../icons/CommentIcon";
import ShareIcon from "../../icons/ShareIcon";
import { signupActions } from "../../store/signup-slice";

export default function BlogContentFooter({
  numberLikes,
  numberComments,
  numberShares,
  openLike,
  openComment,
  openShare,
}) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const isSignup = useSelector((state) => state.signup.isSignup);

  const likeHandler = () => {
    setLike((prevState) => !prevState);
  };

  const toggleWarningHandler = () => {
    dispatch(signupActions.toggleShow());
  };

  return (
    <div className="flex flex-col gap-3 px-[20px] sm:px-[30px]">
      <div className="flex gap-5 transition-all ease duration-300">
        <button 
          onClick={likeHandler}
          className={like ? 
            "fill-red-400 hover:fill-red-500 transition-all ease duration-300": 
            "fill-gray-300 hover:fill-gray-400 dark:fill-gray-400 dark:hover:fill-gray-300 transition-all ease duration-300"
          }
        >
          <HeartIcon height="50" width="30" />
        </button>
        <button
          className="fill-gray-700 hover:fill-black dark:fill-gray-400 dark:hover:fill-gray-300
                transition-all ease duration-300"
          onClick={() => isSignup ? openComment() : toggleWarningHandler()}
        >
          <CommentIcon height="50" width="30" />
        </button>
        <button className="fill-cyan-400 hover:fill-cyan-500 transition-all ease duration-300">
          <ShareIcon height="50" width="30" />
        </button>
      </div>
      <div className="flex justify-between text-[15px] text-gray-600 dark:text-gray-300 font-semibold">
        <ShowNumber
          number={numberLikes}
          status="likes"
          handleClick={() => isSignup ? openLike() : toggleWarningHandler()}
        />
        <div className="flex gap-3">
          <ShowNumber
            number={numberComments}
            status="comments"
            handleClick={() => isSignup ? openComment() : toggleWarningHandler()}
          />
          <ShowNumber
            number={numberShares}
            status="shares"
            handleClick={() => isSignup ? openShare() : toggleWarningHandler()}
          />
        </div>
      </div>
      <AddCommentSection openComment={() => isSignup ? openComment() : toggleWarningHandler()} />
    </div>
  );
}
