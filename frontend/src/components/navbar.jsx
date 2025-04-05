import Logo from "./ui/logo"
import NavMenuBtn from "./ui/navMenuBtn"
import NavbarLinks from "./ui/navbarLinks"
import { useState } from 'react'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  

function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        {<Logo/>}
      </div>
      {/* mobile menu button */}
      <NavMenuBtn mobileview={mobileMenuOpen} onBtnClick={setMobileMenuOpen}/>
      {/* end of mobile menu button */}
      {/* navbar links */}
      <NavbarLinks navigation={navigation} mobileview={mobileMenuOpen}/>
      {/* end of navbar links */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    )

}
export default Navbar