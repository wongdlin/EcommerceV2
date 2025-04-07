import { Link } from "react-router-dom";

function Logo() {
  return (
    
    <Link to="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img
        alt=""
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </Link>
  );
}
export default Logo;

