import Link from "next/link";
import { Button, Input } from "../UI";

const RegisterForm = () => {
  return (
    <div className="h-[500px] w-[500px] bg-[#1d273b] rounded shadow-lg">
      <h1 className="text-white text-center text-3xl font-bold pt-10 mb-3">
        REGISTER
      </h1>
      <div className="grid place-items-center h-full pb-5">
        <Input styleClass="w-full p-4" placeholder="Username" />
        <Input styleClass="w-full p-4" placeholder="Email" />
        <Input styleClass="w-full p-4" placeholder="Password" />
        <Input styleClass="w-full p-4" placeholder="Confirm Password" />
        <Button>REGISTER</Button>
        <Link href="/login">
          <a className="underline pb-20"> Already have an account? Login</a>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
