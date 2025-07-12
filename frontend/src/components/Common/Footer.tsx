import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 shadow-lg flex flex-col bg-gray-900">
      <div
        className="container mx-auto grid sm:grid-cols-2  md:grid-cols-4 gap-8 px-4
    lg:px-0"
      >
        <div>
          <h3 className="text-lg text-gray-100 mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Be the first to hear about new products,exclusive events, and online
            offers
          </p>
          <p
            className="font-medium text-sm text-gray-400 
                     mb-6"
          >
            Sign up and get 10% off your first order.
          </p>
          {/* Newsletter form  */}
          <form action="" className="flex">
            <input
              type="Email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-l border-b border-gray-300 rounded-l-md
                focus:outline-none focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm
                rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop links  */}
        <div>
          <h3 className="text-lg text-gray-100 mb-4">SHOP</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                Electronique
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                House
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                Accueil
              </Link>
            </li>
          </ul>
        </div>

        {/* Support links  */}
        <div>
          <h3 className="text-lg text-gray-100 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us  */}
        <div>
          <h3 className="text-lg text-gray-50 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-4  text-gray-50">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <RiTwitterXLine className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-200"> Call Us</p>
          <p className="text-gray-100">
            <FiPhoneCall className="w-5 h-5 inline-block mr-2" />
            01-60-16-88-13
          </p>
        </div>
      </div>
      {/* footer bottom  */}
      <div className="container mx-auto mt-12 px-4 border-t border-gray-200 pt-6">
        <p className="text-gray-200 text-sm tracking-tighter text-center">
          {new Date().getFullYear()} CopyRight All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
