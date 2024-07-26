const InformationSection = ({ label, name, type, length, idInput, idLabel, maxLength }) => {
    return (
        <div
            className="flex items-end relative h-[45px]"
        >
            <input 
                name={name} 
                type={type} 
                id={idInput}
                placeholder="form"
                maxLength={maxLength}
                className={`border-b ${length} outline-none border-gray-200 focus:border-gray-400 transition-all ease duration-300
                bg-transparent dark:border-gray-500 dark:focus:border-gray-400 py-[3px] text-[0.9rem] rounded-none`}
            />
            <label 
                id={idLabel}
                htmlFor={name}
                className="absolute translate-y-[-5px] text-gray-400 transition-all ease duration-300"
            >
                {label}
            </label>
        </div>
    );
}

export default InformationSection;