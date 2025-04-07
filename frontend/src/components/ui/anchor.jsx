import { Link } from "react-router-dom";

function Anchor({AnchorText}) {
  return (
    <Link to="#" className="font-semibold text-indigo-600">
      <span aria-hidden="true" className="" />
      {AnchorText} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
export default Anchor;
