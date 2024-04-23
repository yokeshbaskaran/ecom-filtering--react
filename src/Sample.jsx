import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navListItems } from './data/data1'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleBtn = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="w-full flex justify-between p-3">
                <div className="">YokiEditz</div>
                <nav className="hidden md:flex justify-between space-x-10">
                    {navListItems.map((navitem, index) => (
                        <p key={index}>{navitem}</p>
                    ))}
                </nav>
                <button className="md:hidden" onClick={toggleBtn}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </header>
            {isOpen && (
                <nav className="md:hidden flex border-4 flex-col items-center basis-full flex-wrap transition-all duration-700">
                    {navListItems.map((navitem, index) => (
                        <p key={index}>{navitem}</p>
                    ))}
                </nav>
            )}
        </>
    );
};

const Sample = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
        </>
    );
};

export default Sample;

