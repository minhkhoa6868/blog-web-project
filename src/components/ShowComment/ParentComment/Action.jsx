export default function Action({ type, handleClick }) {
    return (
        <button className="text-[0.8rem] hover:underline" onClick={handleClick}>{type}</button>
    );
}