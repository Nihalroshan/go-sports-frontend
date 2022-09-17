const Button = (props) => {
  const { children, onClick, styleClass } = props;

  return (
    <>
      <button
        onClick={onClick}
        {...props}
        className={`bg-[#1d273b] text-white py-2 px-6 border rounded ${styleClass}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
