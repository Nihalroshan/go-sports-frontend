const Input = (props) => {
  const { type, value, placeholder, styleClass } = props;
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`bg-gray-600 rounded-md w-[300px] h-[40px] outline-none ${styleClass}`}
      />
    </div>
  );
};

export default Input;
