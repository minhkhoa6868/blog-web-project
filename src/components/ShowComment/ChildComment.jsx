export default function ChildComment({ imageAccountChild, nameAccountChild, commentChild }) {
  return (
    <div className="flex justify-between ml-[40px]">
      <div className="flex items-start gap-2">
        <button>
          <img
            src={imageAccountChild}
            alt="image-account"
            className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300 bg-white"
          />
        </button>
        <div 
            className="text-[0.8rem] w-[250px] sm:w-[320px] md:w-[400px] xl:w-[460px]"
        >
          <button className="font-semibold">{nameAccountChild}</button>
          <p>{commentChild}</p>
          <button className="text-[0.7rem] hover:underline">Reply</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="fill-red-400 hover:fill-red-500 transition-all ease duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="15"
            width="15"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </button>
        <button className="text-[0.7rem] hover:underline">2</button>
      </div>
    </div>
  );
}
