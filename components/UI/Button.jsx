const Button = ({ children, onClick, props }) => {

    return (
        <>
            <button onClick={onClick} {...props} className="bg-[#1d273b] text-white py-2 px-6 border rounded">{children}</button>
        </>
    )
}

export default Button