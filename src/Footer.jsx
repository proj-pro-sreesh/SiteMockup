import { Phone} from 'lucide-react';

function Footer() {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="bg-black p-8 flex flex-row justify-center"> <div className="flex flex-row justify-evenly w-2/3 ">
                <div className="bg-yellow-400 text-black text-left py-6 h-75 px-4 rounded w-70 mx-4 -mt-20 z-10 shadow-xl">
                    <span className="text-[18px] ml-4 font-bold">Get Started with Us</span><br/><br/>
                    <p className="ml-4 text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet quis sed qui quas delectus autem sapiente necessitatibus magnam error?</p><br/>
                    <a href="#" className="rounded-md text-white bg-black px-4 py-4 m-4">Reach us Now</a>
                </div>
                <div className="text-white w-70 pl-4"><span className="font-bold text-[20px]">SB Engineers</span><br/><br/>
                <p className="text-white text-[14px]">
                    SB Engineers is a premier engineering design firm dedicated to delivering comprehensive solutions for a diverse range of structural projects.
                </p>
                </div>
                <div className="text-white w-50 px-4"><span className="font-bold text-[20px]">Quick Links</span><br/><br/><ul className="flex flex-col md:flex-col gap-4 text-white text-[14px] font-medium">
                        <li><a href="#" className="hover:text-blue-600">Serivces</a></li>
                        <li><a href="#" className="hover:text-blue-600">Why SB Engineers</a></li>
                        <li><a href="#" className="hover:text-blue-600">Projects</a></li>
                        <li><a href="#" className="hover:text-blue-600">About Us Portfolio</a></li>
                        <li><a href="#" className="hover:text-blue-600">Get a Quote</a></li>
                        <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                    </ul>
                </div>
                <div className="text-white w-70 "><span className="font-bold text-[20px]">Quick Contact</span>
                    <br/><br/>
                    <p className="text-white text-[14px]">4th West Cross Road, Gandhi Nagar,
                        Katpadi Vellore, Tamilnadu.<br/><br/>
                        If you have any questions or need help,
                        feel free to contact with our team.</p><br/>
                        <div className="flex items-center gap-1">
                            <Phone className="w-5 h-5" />
                            +91-9787447307
                        </div>
                </div>

            </div></div>
            <footer className="w-full bg-yellow-400 text-left text-sm text-black py-6 px-60 shadow-inner ">
                <p>Copyright &copy; {new Date().getFullYear()} <span className="font-medium text-black">SB Engineers</span>. Concept by Repute.</p>
            </footer>
        </div>
    );
}

export default Footer;