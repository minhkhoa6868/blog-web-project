import Statistic from "./Statistic";
import ButtonEdit from "./ButtonEdit";

export default function AccountInfoContent() {
    return (
        <div 
            className="flex flex-col gap-6 translate-y-[-70px] xl:translate-y-0 xl:pt-[80px] xl:pb-7 xl:pr-8"
        >
            <div className="flex justify-center gap-4">
                <Statistic number="4" content="Blogs" />
                <Statistic number="100" content="Followers" />
                <Statistic number="100" content="Following" />
            </div>
            <div className="flex justify-center gap-7">
                <ButtonEdit children="Edit Profile" />
                <ButtonEdit children="Add New Blog" />
            </div>
        </div>
    );
}