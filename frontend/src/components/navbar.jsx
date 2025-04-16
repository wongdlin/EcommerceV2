import Logo from "./ui/logo"
import NavMenuBtn from "./ui/navMenuBtn"
import NavbarLinks from "./ui/navbarLinks"
import { useState } from 'react'
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
    { name: 'Categories', href: '/categories' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className={`flex items-center justify-between p-6 lg:px-8 ${
            mobileMenuOpen ? "invisible" : ""
          }`}
        >
          <div className="flex lg:flex-1">{<Logo />}</div>
          <NavMenuBtn
            mobileview={mobileMenuOpen}
            onBtnClick={setMobileMenuOpen}
          />
          <NavbarLinks navigation={navigation} mobileview={mobileMenuOpen} />
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <NavMenuBtn
              mobileview={mobileMenuOpen}
              onBtnClick={setMobileMenuOpen}
            />
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <NavbarLinks
                  navigation={navigation}
                  mobileview={mobileMenuOpen}
                />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )

}
export default Navbar