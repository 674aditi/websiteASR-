import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-[#DAFBFC] shadow-md w-screen">
      <h1 className="text-xl font-bold text-black">Portfolio</h1>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center transition-transform ${isOpen ? "block" : "hidden md:flex"}`}>
        {["Home", "About us", "Services", "Contact", "Portfolio"].map((item) => (
          <a key={item} href="#" className="text-gray-700 text-lg md:text-base">
            {item}
          </a>
        ))}
        <button className="px-4 py-2 bg-red-800 text-white rounded-lg">Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
