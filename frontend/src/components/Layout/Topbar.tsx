import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
const Topbar = () => {
  return (
    <div className="bg-fist-color text-white">
      <div className="container mx-auto flex justify-betwen items-center py-3 px-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Nous somme une boutique en ligne</span>
        </div>
        <div className="text-sm md:block hidden">
          <a href="tel:+2290160168813" className="hover:text-gray-300">
            +229 01 60-16-88-13
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
