import { Link } from "react-router-dom";

function AnchorButton({btnText, link}) {
  return (
    <Link to={link}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold !text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {btnText}
    </Link>
  );
}
export default AnchorButton;
