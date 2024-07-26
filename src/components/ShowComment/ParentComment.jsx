import { useState } from "react";
import Action from "./ParentComment/Action";
import Reply from "./ParentComment/Reply";
import HeartIcon from "../../icons/HeartIcon";

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
            loading="lazy"
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
                    <HeartIcon height="15" width="15" />
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
