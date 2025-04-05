import Logo from "./logo";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavMenuBtn({mobileview,onBtnClick}) {
  return !mobileview?(
    
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => onBtnClick(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>
      ):(
      <div className="flex items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={() => onBtnClick(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>
      </div>
      )
    
  
}
export default NavMenuBtn;
