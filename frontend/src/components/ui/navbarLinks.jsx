import { Link } from "react-router-dom";

function NavbarLinks({ navigation, mobileview }) {
  // console.log(mobileview)
  return !mobileview ? (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-sm/6 font-semibold text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </div>
  ) : (
    <div className="space-y-2 py-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
export default NavbarLinks;
