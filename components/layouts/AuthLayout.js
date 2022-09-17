import Link from "next/link";
function AuthLayout({ children }) {
  return (
    <>
      <span className="text-lg italic border-l border-r border-white text-white px-2">
        <Link href="/">
          <a>GO SPORTS</a>
        </Link>
      </span>
      <div>{children}</div>
    </>
  );
}

export default AuthLayout;
