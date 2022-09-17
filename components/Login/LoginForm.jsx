import Link from "next/link";
import { Input, Button } from "../UI";

function LoginForm() {
  return (
    <div className="h-[400px] w-[500px] bg-[#1d273b] rounded shadow-lg">
      <h1 className="text-white text-center text-3xl font-bold pt-10 mb-3">
        LOGIN
      </h1>
      <div className="grid place-items-center h-full pb-5">
        <Input styleClass="w-full p-4" placeholder="Email" />
        <Input styleClass="w-full p-4" placeholder="Password" />
        <Button>LOGIN</Button>
        <Link href="/register">
          <a className="underline pb-20">
            {" "}
            Don&apos;t have an accout? Register
          </a>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
