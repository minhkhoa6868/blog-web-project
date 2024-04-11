import AddBlog from "../components/Home/AddBlog";
import BlogContent from "../components/Home/BlogContent";

export default function Home({ onSelect }) {
    return (
        <div className="flex flex-col gap-6">
            <AddBlog onSelect={onSelect} />
            <BlogContent onSelect={onSelect} image="image-post.gif" accountImage="account.gif" />
            <BlogContent onSelect={onSelect} image="account.gif" accountImage="account2.gif" />
            <BlogContent onSelect={onSelect} image="image-post2.gif" accountImage="account3.gif" />
            <BlogContent onSelect={onSelect} image="image-post3.gif" accountImage="account4.gif" />
        </div>
    );
}