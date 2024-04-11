import AccountInfo from "../components/Account/AccountInfo";
import BlogContentAccount from "../components/Account/BlogContentAccount";

export default function Account({ onSelect }) {
    return (
        <div className="flex flex-col gap-6">
            <AccountInfo />
            <BlogContentAccount onSelect={onSelect} image="image-post.gif" />
            <BlogContentAccount onSelect={onSelect} image="account.gif" />
            <BlogContentAccount onSelect={onSelect} image="image-post2.gif" />
            <BlogContentAccount onSelect={onSelect} image="image-post3.gif" />
        </div>
    );
}