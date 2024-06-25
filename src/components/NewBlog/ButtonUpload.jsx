export default function ButtonUpload({ file, handleChange }) {
  return (
    <div
      className="ml-[20px] w-fit cursor-pointer px-[15px] py-[5px] rounded-[16px]
        bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white text-[0.9rem]
        hover:from-blue-500 hover:to-fuchsia-500"
    >
      <input
        type="file"
        id="inputFile"
        onChange={handleChange}
        className="hidden"
      />
      <label htmlFor="inputFile" className="cursor-pointer">
        {file != "image-upload.png" ? "Change image" : "Choose image"}
      </label>
    </div>
  );
}
