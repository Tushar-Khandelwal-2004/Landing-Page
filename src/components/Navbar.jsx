import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants"
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
function Navbar() {
    const [open, setOpen] = useState(false);
    function toggle() {
        setOpen(c => !c);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80  ">
            <div className="container px-4 mx-auto relative text-sm ">
                <div className="flex justify-between items-center  " >
                    <div className="flex items-center flex-shrink-0 ">
                        <img className="w-10 h-10" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-12 space-x-8 ">
                        {navItems.map((item, index) => (
                            <li key={index} className="px-2">
                                <Link href={item.href} to={item.href} spy={true} smooth={true} offset={-100} duration={500}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-4 ">
                        <a href="#" className="py-2 px-5 border rounded-md ">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded md ">Create an Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end ">
                        <button onClick={toggle}>
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 px-4" >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 ">

                            <a href="#" className="py-2 px-3 border rounded-md " >Sign In</a>
                            <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 " >Create an Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar;