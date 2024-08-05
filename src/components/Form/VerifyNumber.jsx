const VerifyNumber = () => {
    return (
        <input 
            type="text" 
            className="border rounded-md bg-transparent w-[50px] h-[80px] outline-none focus:border-violet-400 text-center text-[1.1rem]
            dark:border-gray-500 dark:focus:border-violet-400 transition-all ease duration-300"
            maxLength={1}
        />
    );
};

export default VerifyNumber;