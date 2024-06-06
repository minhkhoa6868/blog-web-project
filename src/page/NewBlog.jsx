import { useState, useEffect } from "react";

export default function NewBlog() {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      className="flex flex-col gap-5 w-[500px] h-fit sm:w-[650px] sm:h-fit md:w-[720px] xl:w-[800px] border
            mx-auto my-[20px] shadow-xl transition-all ease duration-300 dark:border-gray-500 dark:bg-gray-700
            rounded-xl"
    >
      <div className="flex flex-row justify-between px-[20px]">
        <div className="flex flex-row gap-3 justify-center items-center mt-[10px]">
          <img
            src="account.gif"
            alt="account"
            className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
          />
          <span className="font-semibold">Trần Khoa</span>
        </div>
        <div className="flex flex-row gap-3 mt-[15px]">
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
          <select
            name="visibility"
            id="type-visibility"
            className="h-[40px] border px-[5px] border-gray-300 rounded-[10px] focus:outline-none
                        text-[0.9rem] bg-transparent"
          >
            <option value="">Choose the visibility</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
      </div>
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
            {file ? 'Change image' : 'Choose image'}
        </label>
      </div>
      <div className="flex gap-3 px-[10px]">
        <div className="flex justify-center items-center">
            <img src={file} className="w-[350px] object-cover" />
        </div>
        <textarea
          name="post"
          id="post"
          placeholder="Enter your content..."
          className="w-full h-[500px] p-[10px] border border-gray-300 rounded-[10px] outline-none 
            dark:border-gray-500 focus:border-gray-500 transition-all ease duration-300 dark:focus:border-gray-200
            bg-transparent resize-none sm:h-[400px]"
        ></textarea>
      </div>
      <div className="flex justify-end mr-[20px] mb-[20px]">
        <button 
            className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
            hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px]"
        >
            Post
        </button>
      </div>
    </div>
  );
}
