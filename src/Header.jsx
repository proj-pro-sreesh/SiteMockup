import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
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
      <div className="mx-auto sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-xl font-semibold text-amber-300">SB ECC</span>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-4 text-gray-700 text-sm md:text-base font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Company</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Project Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact Info with Icons */}
        <div className="flex flex-wrap items-right gap-4 text-sm text-gray-600 text-center md:text-right">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 fill-amber-300" />
            +91-9787447307
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 fill-amber-300" />
            admin@sbecc.com
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 fill-amber-300" />
            4th West Cross Road, Vellore
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
