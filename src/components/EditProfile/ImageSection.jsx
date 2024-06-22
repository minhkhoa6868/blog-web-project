import { useState } from "react";

export default function ImageSection() {
  const [imageAccount, setImageAccount] = useState("account.gif");

  function changeImageAccount(e) {
    setImageAccount(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img
        src={imageAccount}
        alt="image-account"
        className="w-[120px] h-[120px] rounded-[50%] object-cover border-[6px] border-gray-300
          dark:border-gray-500"
      />
      <div
        className="w-fit cursor-pointer px-[20px] py-[5px] rounded-[20px] bg-gradient-to-tr 
            from-blue-400 to-fuchsia-400 text-white text-[0.9rem]
            hover:from-blue-500 hover:to-fuchsia-500"
      >
        <input
          type="file"
          id="image-change"
          onChange={changeImageAccount}
          className="hidden"
        />
        <label htmlFor="image-change" className="cursor-pointer font-semibold">
          Change Account Image
        </label>
      </div>
    </div>
  );
}
