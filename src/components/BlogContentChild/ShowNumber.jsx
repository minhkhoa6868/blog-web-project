const ShowNumber = ({ number, status, handleClick }) => {
    return (
        <button className="hover:underline" onClick={handleClick}>{number} {status}</button>
    );
}

export default ShowNumber;