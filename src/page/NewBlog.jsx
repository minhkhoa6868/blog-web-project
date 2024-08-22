import { useState, useEffect, useCallback } from "react";
import ChooseType from "../components/NewBlog/ChooseType";
import ChooseVisibility from "../components/NewBlog/ChooseVisibility";
import ButtonUpload from "../components/NewBlog/ButtonUpload";
import UploadImage from "../components/NewBlog/UploadImage";
import UploadPost from "../components/NewBlog/UploadPost";

export default function NewBlog() {
  const [file, setFile] = useState("image-upload.png");
  const [countPost, setCountPost] = useState(0);

  useEffect(() => {
    const post = document.getElementById("post");

    post.addEventListener("keyup", () => {
      setCountPost(post.value.length);
    });
    
    return () => {
      post.removeEventListener("keyup", () => {
        setCountPost(post.value.length);
      });
    };
  })

  const handleChange = useCallback((e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  });

  return (
    <div
      className="flex flex-col gap-5 w-[400px] h-fit sm:w-[600px] md:w-[720px] xl:w-[800px] border
      mx-auto my-[20px] shadow-xl transition-all ease duration-300 dark:border-gray-500 dark:bg-gray-700
      rounded-xl"
    >
      <div className="flex flex-row justify-between px-[20px]">
        <div className="flex flex-row gap-3 justify-center items-center mt-[10px]">
          <img
            src="account.gif"
            alt="account"
            className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
            loading="lazy"
          />
          <span className="font-semibold">Trần Khoa</span>
        </div>
        <div className="flex flex-row gap-3 mt-[15px]">
          <ChooseType />
          <ChooseVisibility />
        </div>
      </div>
      <ButtonUpload file={file} handleChange={handleChange} />
      <div className="flex flex-col gap-3 px-[10px]">
        <UploadImage file={file} />
        <UploadPost countPost={countPost} />
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