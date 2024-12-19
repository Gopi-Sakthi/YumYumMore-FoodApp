import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="h-24 bg-gradient-to-r from-blue-400 via-purple-400  to-pink-400 text-white flex flex-col items-center justify-center">
            <div className="text-cente">
                &copy; {new Date().getFullYear()} YumYumMore. All rights reserved.
            </div>
            <div className="ml-4">
                <Link to="/about" className=" hover:text-gray-800">About Us</Link>
                <span className="mx-2">|</span>
                <Link to="/contact" className=" hover:text-gray-800">Contact</Link>
            </div>
        </div>
    );
};

export default Footer;