import InformationSection from "./FormChild/InformationSection";

const NameInfo = () => {
    return (
        <div className="flex justify-between">
          <InformationSection
            label="First Name"
            name="fname"
            type="text"
            length="w-[160px]"
            idLabel="fname-label"
            idInput="fname"
          />
          <InformationSection
            label="Last Name"
            name="lname"
            type="text"
            length="w-[160px]"
            idLabel="lname-label"
            idInput="lname"
          />
        </div>
    );
}

export default NameInfo;