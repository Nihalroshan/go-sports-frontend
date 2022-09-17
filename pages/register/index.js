import AuthLayout from "../../components/layouts/AuthLayout";
import RegisterForm from "../../components/Login/RegisterForm";

const Register = () => {
  return (
    <div className="grid place-items-center h-screen">
      <RegisterForm />
    </div>
  );
};

export default Register;

Register.Layout = AuthLayout;
