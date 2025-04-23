import LoginSection from "../components/loginSection";
import { useAuth } from "../context/authContext";

function Login() {

const { user,logout } = useAuth();
console.log(user)
  return <LoginSection />;
}
export default Login;
