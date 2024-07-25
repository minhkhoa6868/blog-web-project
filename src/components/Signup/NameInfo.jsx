import InformationSection from "./SignupChild/InformationSection";

const NameInfo = () => {
    return (
        <div className="flex justify-between">
          <InformationSection
            label="First Name"
            name="fname"
            type="text"
            length="w-[170px]"
            idLabel="fname-label"
            idInput="fname"
          />
          <InformationSection
            label="Last Name"
            name="lname"
            type="text"
            length="w-[170px]"
            idLabel="lname-label"
            idInput="lname"
          />
        </div>
    );
}

export default NameInfo;