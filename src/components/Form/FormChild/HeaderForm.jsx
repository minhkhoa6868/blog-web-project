const HeaderForm = ({ header, message }) => {
  return (
    <div className="mb-[15px]">
      <h1 className="text-center font-semibold text-[1.4rem]">{header}</h1>
      <p className="text-center text-[0.9rem] text-gray-400">
        {message}
      </p>
    </div>
  );
};

export default HeaderForm;
