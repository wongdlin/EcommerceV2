import LoginSection from "../components/loginSection";
import { useAuth } from "../context/AuthContext";

function Login() {

const { user,logout } = useAuth();
console.log(user)
  return <LoginSection />;
}
export default Login;
