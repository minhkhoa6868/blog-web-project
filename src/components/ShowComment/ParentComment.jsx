import { useState } from "react";
import Action from "./ParentComment/Action";
import Reply from "./ParentComment/Reply";

export default function ParentComment({ comment }) {
  const [editMode, setEditMode] = useState(false);
  const [replyMode, setReplyMode] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-2 w-full">
        <button>
          <img
            src={comment.imageAccount}
            alt="image-account"
            className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300 bg-white"
          />
        </button>
        <div className="text-[0.8rem] w-5/6 break-words">
          <button className="font-semibold">{comment.nameAccount}</button>
          {editMode ? (
            <>
              <textarea
                placeholder="Change comment"
                className="border pl-[10px] pt-[5px] outline-none border-gray-300 focus:border-gray-400 rounded-xl
                w-full h-fit resize-none bg-transparent dark:border-gray-500 dark:focus:border-gray-400
                transition-all ease duration-300"
              />
              <div className="flex gap-2 items-start">
                <Action type="Save" />
                <Action
                  type="Cancel"
                  handleClick={() => {
                    setEditMode(false);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <p>{comment.comment}</p>
              <div className="flex gap-2 items-start">
                <Action type="Reply" handleClick={() => setReplyMode(true)} />
                <Action
                  type="Edit"
                  handleClick={() => {
                    setEditMode(true);
                  }}
                />
                <Action type="Delete" />
                <div className="flex gap-1 w-fit h-fit">
                  <button className="fill-red-400 hover:fill-red-500 transition-all ease duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="15"
                      width="15"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  </button>
                  <button className="text-[0.8rem] hover:underline">2</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {replyMode && (
        <div className="pl-10">
          <Reply handleClick={() => setReplyMode(false)} />
        </div>
      )}
      {comment.items && comment.items.length > 0 && (
        <div className="pl-10">
          {comment.items.map((nestedComment) => (
            <ParentComment key={nestedComment.id} comment={nestedComment} />
          ))}
        </div>
      )}
    </div>
  );
}
