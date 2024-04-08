import AddBlog from "./AddBlog";
import BlogContent from "./BlogContent";

export default function Home() {
    return (
        <div className="flex flex-col gap-7">
            <AddBlog />
            <BlogContent />
        </div>
    );
}