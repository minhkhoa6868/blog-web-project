export default function ChooseType() {
  return (
    <select
      name="type"
      id="type-blog"
      className="h-[40px] border px-[5px] border-gray-300 rounded-[10px] focus:outline-none
                        text-[0.9rem] bg-transparent"
    >
      <option value="">Choose type</option>
      <option value="Sport">Sport</option>
      <option value="Travel">Travel</option>
      <option value="Nature">Nature</option>
      <option value="Fashion">Fashion</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Life">Life</option>
    </select>
  );
}
