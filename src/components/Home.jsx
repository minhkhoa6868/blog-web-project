import AddBlog from "./AddBlog";
import BlogContent from "./BlogContent";

export default function Home({ onSelect }) {
    return (
        <div className="flex flex-col gap-6">
            <AddBlog onSelect={onSelect} />
            <BlogContent onSelect={onSelect} image="image-post.jpg" />
            <BlogContent onSelect={onSelect} image="account.jpg" />
        </div>
    );
}