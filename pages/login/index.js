import AuthLayout from "../../components/layouts/AuthLayout";
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="grid place-items-center h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;

Login.Layout = AuthLayout;
