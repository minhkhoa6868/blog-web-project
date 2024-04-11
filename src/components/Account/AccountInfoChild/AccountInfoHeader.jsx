import BlogType from "./BlogType";

export default function AccountInfoHeader() {
  return (
    <div 
        className="flex flex-col items-center gap-3 translate-y-[-90px] 
        xl:items-start xl:pl-8"
    >
      <img
        src="account.gif"
        alt="account image"
        className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-white
                        dark:border-gray-700"
      />
      <p className="font-semibold text-[1.5rem]">Trần Khoa</p>
      <p className="text-center text-sm">Love sneaker, food, family</p>
      <p className="text-sm">Blog type:</p>
        <div className="flex justify-center gap-2 w-[350px] flex-wrap text-sm xl:justify-start">
            <BlogType children="Life" />
            <BlogType children="Sport" />
            <BlogType children="Travel" />
            <BlogType children="Fashion" />
            <BlogType children="Nature" />
            <BlogType children="Entertainment" />
            <BlogType children="..." />
        </div>
    </div>
  );
}
