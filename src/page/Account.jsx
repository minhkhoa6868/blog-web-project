import { useState } from "react";
import AccountInfo from "../components/Account/AccountInfo";
import BlogContentAccount from "../components/Account/BlogContentAccount";
import ShowBlogType from "../components/Account/ShowBlogType";

export default function Account({ onSelect }) {
    const [showBlogType, setShowBlogType] = useState(false);

    function openBlogType() {
        setShowBlogType((prevState) => !prevState);
    }

    return (
        <div className="flex flex-col gap-6">
            <AccountInfo openBlogType={openBlogType} />
            <BlogContentAccount onSelect={onSelect} image="image-post.gif" />
            <BlogContentAccount onSelect={onSelect} image="account.gif" />
            <BlogContentAccount onSelect={onSelect} image="image-post2.gif" />
            <BlogContentAccount onSelect={onSelect} image="image-post3.gif" /> 
            <ShowBlogType showBlogType={showBlogType} openBlogType={openBlogType} />
        </div>
    );
}