import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar-container">
            <input type="checkbox" id="menu" className="hidden" />
            <header className={`flex items-center justify-between h-16 p-6 py-4 md:px-8 fixed w-full shadow-xl z-30 transition-all duration-300 ${scrolling ? 'scrolled' : 'bg-transparent'}`}>
                <h1 className="font-bold text-primary text-lg md:text-2xl lg:text-3xl">Rizky Nugraha</h1>
                <nav className="flex gap-5 max-md:gap-1 max-md:absolute max-md:top-16 max-md:left-0 max-md:bg-base-100 max-md:flex-col max-md:w-full max-md:items-center max-md:h-0 max-md:transition-all max-md:duration-500 max-md:overflow-hidden">
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">Home</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">About</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Project</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Contact</Link>
                </nav>
                <div className="flex items-center md:hidden">
                    <label htmlFor="menu" className="cursor-pointer max-md:w-11 max-md:h-4 max-md:relative ">
                        <div className="max-md:w-full max-md:h-1 max-md:bg-primary max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300"></div>
                        <div className="max-md:w-full max-md:h-1 max-md:bg-primary max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300 max-md:top-1/2"></div>
                        <div className="max-md:w-full max-md:h-1 max-md:bg-primary max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300 max-md:top-full"></div>
                    </label>
                </div>
            </header>
        </div>
    );
}
