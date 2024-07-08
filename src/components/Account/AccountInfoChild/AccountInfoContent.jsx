import Statistic from "./Statistic";
import ButtonEdit from "./ButtonEdit";
import ButtonNewBlog from "./ButtonNewBlog";

export default function AccountInfoContent({ numberBlogs }) {
    return (
        <div 
            className="flex flex-col gap-6 translate-y-[-70px] xl:translate-y-0 xl:pt-[80px] xl:pb-7 xl:pr-8"
        >
            <div className="flex justify-center gap-4">
                <Statistic number={numberBlogs} content="Blogs" />
                <Statistic number="100" content="Followers" />
                <Statistic number="100" content="Following" />
            </div>
            <div className="flex justify-center gap-7">
                <ButtonEdit />
                <ButtonNewBlog />
            </div>
        </div>
    );
}