import { Phone } from 'lucide-react';

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center">
      {/* Top Footer Section */}
      <div className="bg-black p-8">
        <div className="flex md:flex-wrap lg:flex-nowrap flex-col md:flex-row flex-wrap justify-center gap-10 max-w-screen-lg lg:w-2/3 mx-auto">
          {/* Box 1: Get Started */}
          <div className="bg-yellow-400 text-black text-left py-6 px-4 rounded w-full md:w-[250px] -mt-20 mb-6 z-10 shadow-xl">
            <span className="text-[18px] font-bold">Get Started with Us</span>
            <br /><br />
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet quis sed qui quas delectus autem sapiente necessitatibus magnam error?
            </p>
            <br />
            <a href="#" className="rounded-md text-white bg-black px-4 py-2 inline-block">Reach us Now</a>
          </div>

          {/* Box 2: About */}
          <div className="text-white md:w-[250px] w-full">
            <span className="font-bold text-[20px]">SB Engineers</span>
            <br /><br />
            <p className="text-[14px]">
              SB Engineers is a premier engineering design firm dedicated to delivering comprehensive solutions for a diverse range of structural projects.
            </p>
          </div>

          {/* Box 3: Quick Links */}
          <div className="text-white md:w-[200px] w-full">
            <span className="font-bold text-[20px]">Quick Links</span>
            <br /><br />
            <ul className="flex flex-col gap-2 text-[14px] font-medium">
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Why SB Engineers</a></li>
              <li><a href="#" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600">Get a Quote</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>

          {/* Box 4: Contact */}
          <div className="text-white md:w-[250px] w-full">
            <span className="font-bold text-[20px]">Quick Contact</span>
            <br /><br />
            <p className="text-[14px]">
              4th West Cross Road, Gandhi Nagar,
              Katpadi Vellore, Tamilnadu.
              <br /><br />
              If you have any questions or need help,
              feel free to contact with our team.
            </p>
            <br />
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +91-9787447307
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <footer className="w-full bg-yellow-400 text-sm text-black py-6 px-6">
        <div className="max-w-screen-lg mx-auto">
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-black">SB Engineers</span>. Concept by Repute.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
