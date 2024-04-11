import BlogContentAccountHeader from "./BlogContentChildAccount/BlogContentAccountHeader";
import BlogContentAccountImage from "./BlogContentChildAccount/BlogContentAccountImage";
import BlogContentAccountFooter from "./BlogContentChildAccount/BlogContentAccountFooter";


export default function BlogContentAccount({ onSelect, image }) {
    return (
        <div 
            className="flex flex-col gap-3 mx-auto shadow-lg w-[500px] sm:w-[580px] md:w-[680px] xl:w-[720px] 
            py-[15px] h-fit border rounded-xl justify-between dark:bg-gray-700 dark:border-gray-500 
            transition-all ease duration-300"
        >
            <BlogContentAccountHeader onSelect={onSelect} />
            <BlogContentAccountImage image={image} />
            <BlogContentAccountFooter />
        </div>
    );
}