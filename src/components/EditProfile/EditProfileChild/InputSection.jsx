const InputSection = ({ name, type, label, placeholder, maxLength }) => {
  return (
    <>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="on"
        className="w-full h-[40px] pl-[10px] py-[4px] border border-gray-300 dark:border-gray-500
        outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
        rounded-[10px]"
      />
    </>
  );
};

export default InputSection;
