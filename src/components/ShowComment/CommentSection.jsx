import ParentComment from "./ParentComment";
import ChildComment from "./ChildComment";

export default function CommentSection({ imageAccountParent, nameAccountParent, commentParent, imageAccountChild, nameAccountChild, commentChild }) {
  return (
    <div className="flex flex-col gap-2">
      <ParentComment
        imageAccountParent={imageAccountParent}
        nameAccountParent={nameAccountParent}
        commentParent={commentParent}
      />
      <ChildComment
        imageAccountChild={imageAccountChild}
        nameAccountChild={nameAccountChild}
        commentChild={commentChild}
      />
    </div>
  );
}
