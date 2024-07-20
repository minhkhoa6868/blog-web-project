import ActionButton from "./DeleteWarning/ActionButton";

const DeleteWarning = ({ warning, deleteWarning, handleDelete }) => {
  return (
    <div
      className={
        deleteWarning
          ? "flex justify-center items-center fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-50 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col items-center justify-center gap-3 bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500
        transition-all ease duration-300"
      >
        <p>{warning}</p>
        <div className="flex gap-4">
          <ActionButton status="Delete" handleClick={handleDelete} />
          <ActionButton status="Cancel" handleClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteWarning;
