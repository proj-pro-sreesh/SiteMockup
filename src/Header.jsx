import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-row gap-x- 2 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold text-amber-400">SB ECC</span>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav and Contact Info - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          <nav>
            <ul className="flex gap-6 text-gray-700 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Company</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Project Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </nav>
          <div className="flex flex-row gap-1 text-sm text-gray-600 ">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-amber-400" />
              +91-9787447307
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-amber-400" />
              admin@sbecc.com
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              4th West Cross Road, Vellore
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 shadow-md space-y-4 text-sm font-medium text-gray-700 ">
          <nav>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Company</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Project Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </nav>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91-9787447307</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>admin@sbecc.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>4th West Cross Road, Vellore</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
