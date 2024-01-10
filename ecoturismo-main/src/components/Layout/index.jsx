import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Logo from "../../assets/logoEco.webp";
import { IoCloseOutline, IoReorderThreeOutline } from "react-icons/io5";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Contacto", href: "/contacto" },
];

export default function Layout({ children, inView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden overflow-y-auto">
      <div className="relative w-screen h-screen bg-white isolate snap-y snap-mandatory">
        <div className={`pr-6 py-4 fixed z-10  md:px-8 w-full`}>
          <nav className="flex items-center justify-between h-9 " aria-label="Global">
            <div className="flex md:min-w-0 md:flex-1" aria-label="Global">
              <Link to={"/"} className="ml-2 mt-1.5 sm:ml-0 sm:mt-0 inline-flex items-center">
                <img src={Logo} alt="Tecnosoluciones" width={70} height={160} />
                <span className={`font-semibold ${inView ? "text-white" : "text-gray-900"}`}>EcoTurismo</span>
              </Link>
            </div>
            <div className="z-10 flex sm:hidden">
              <button
                type="button"
                className={`${inView ? "text-white" : "text-gray-900"} -m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <IoReorderThreeOutline className="w-8 h-8" />
              </button>
            </div>
            <ul className="hidden md:flex md:min-w-0 md:flex-1 md:justify-center md:gap-x-12">
              {navigation.map((item) => (
                <li className="group" key={item.name}>
                  <Link to={item.href} className={`font-semibold ${inView ? "text-white" : "text-gray-900"} `}>
                    {item.name}
                  </Link>
                  <div className="h-0.5 bg-emerald-400 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-end"></div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 py-6 pr-6 overflow-y-auto bg-white md:hidden">
              <div className="flex items-center justify-between h-9">
                <div className="flex">
                  <Link className="-m-1.5 p-2 inline-flex items-center">
                    <img src={Logo} alt="Tecnosoluciones" width={70} height={200} />
                    <span className={`font-semibold text-gray-900`}>EcoTurismo</span>
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lg text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <IoCloseOutline className="w-8 h-8" />
                  </button>
                </div>
              </div>
              <div className="flow-root px-6 mt-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
