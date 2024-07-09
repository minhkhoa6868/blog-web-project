const ActionButton = ({ status, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white text-[0.9rem]
            hover:from-blue-500 hover:to-fuchsia-500 w-[80px] h-[30px] rounded-[15px]"
        >
            {status}
        </button>
    );
}

export default ActionButton;