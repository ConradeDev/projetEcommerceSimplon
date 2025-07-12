import { Link } from "react-router-dom";

import { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
// import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const navItems = [
    {
      url: "",
      name: "Accueil",
      subItems: [
        {
          ItemSub: "Nouveaute",
          urlSubItems: 1,
        },
        {
          ItemSub: "Promotion",
          urlSubItems: 1,
        },
      ],
    },
    {
      url: "electronique",
      name: "Electronique",
      subItems: [
        {
          ItemSub: "Telephone",
          urlSubItems: 1,
        },
        {
          ItemSub: "Ordinateur",
          urlSubItems: 1,
        },
        {
          ItemSub: "Electromenager",
          urlSubItems: 1,
        },
      ],
    },
    {
      url: "maison",
      name: "Maison & Accessoire",
      subItems: [
        {
          ItemSub: "Meuble",
          urlSubItems: 1,
        },
        {
          ItemSub: "Decoration",
          urlSubItems: 1,
        },
        {
          ItemSub: "Linge",
          urlSubItems: 1,
        },
      ],
    },
    {
      url: "beaute",
      name: "Beauté & Santé",
      subItems: [
        {
          ItemSub: "Cosmetique",
          urlSubItems: 2,
        },
        {
          ItemSub: "Soins Capillaire",
          urlSubItems: 1,
        },
        {
          ItemSub: "Parfums",
          urlSubItems: 1,
        },
      ],
    },
    {
      url: "contact",
      name: "Contact",
      subItems: [
        {
          ItemSub: "Formulaire",
          urlSubItems: 1,
        },
        {
          ItemSub: "Service Client",
          urlSubItems: 1,
        },
      ],
    },
  ];
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  return (
    <div>
      <nav
        className={`container mx-auto flex items-center justify-between
      py-4 px-6  md:justify-between 
         ${showLinks ? "show-navbar" : "hide-nav"}`}
      >
        {/* left Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Conra Shopping
          </Link>
        </div>
        {/* center - navigation link */}

        <ul className="md:flex space-x-4 navbar-links right-[-10px]">
          {navItems.map((item, index) => (
            <li key={index} className="navbar-item slideInDown-1 ">
              <div className=" navbar-link btn btn-sm btn-ghost">
                <Link to={`/${item.url}`}>{item.name}</Link>
                <div onClick={() => toggleSubMenu(index)}>
                  {item.subItems &&
                    (openSubMenu === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    ))}
                </div>
              </div>
              <div>
                {openSubMenu === index && item.subItems && (
                  <div
                    className="flex flex-col md:absolute  mt-2 w-48 bg-white shadow-lg
                        rounded-md py-2 z-10"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Link
                          to={`/${item.url.toLowerCase()}${
                            subItem.urlSubItems ? `#${subItem.ItemSub}` : ""
                          }`}
                          onClick={() => {
                            setOpenSubMenu(null);
                            setShowLinks(false);
                          }}
                        >
                          {subItem.ItemSub}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>

         {/* systeme overlap pour la navigation  en mobile  */}
        <div>
        {showLinks && (
          <div 
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={handleShowLinks}
          >
          </div>
        )}
        </div>

        {/* Right- Icons link */}
        <div className="flex items-center space-x-4">
          <Link to="/admin"
            className="block bg-black px-2 rounded text-sm text-white"
          >
           Admin
          </Link>

          <Link to="/profile">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span
              className="absolute -top-1  bg-fist-color text-white text-xs 
                rounded-full px-2 py-0.5"
            >
              4
            </span>
          </button>

          <div>
        {drawerOpen && (
          <div 
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={toggleCartDrawer}
          >
          </div>
        )}
        </div>

          {/* Search icon */}
          <SearchBar />
          {/* <button>
                <HiBars3BottomRight className="h-6 w-6 text-gray-700"/>
            </button> */}
        </div>
      </nav>



      {/* Car Drawer*/}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </div>
  );
};

export default Navbar;
