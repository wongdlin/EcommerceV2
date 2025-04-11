import { Link } from "react-router-dom";
import Logo from "./ui/logo";

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Licensing', href: '#' },
    { name: 'Contact', href: '#' },
  ]

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tailwind
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          {navigation.map((item) =>(
            <li key={item.name}>
              <Link  to={item.href} className="hover:underline mx-4">
              {item.name}
              </Link>
            </li>
          ))}
            
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            Tailwind
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
