import "./typeStyle.css"

export default function ChooseType() {
  return (
    <div>
      <input 
        type="text"
        list="type-blog" 
        id="choose-blog" 
        name="chooseBlog" 
        placeholder="Types..."
        className="h-[40px] w-[130px] border px-[5px] border-gray-300 rounded-[10px] focus:outline-none
        text-[0.9rem] bg-transparent "
      />
      <datalist id="type-blog">
        <option value="Sport"></option>
        <option value="Travel"></option>
        <option value="Nature"></option>
        <option value="Fashion"></option>
        <option value="Entertainment"></option>
        <option value="Life"></option>
      </datalist>
    </div>
  );
}
