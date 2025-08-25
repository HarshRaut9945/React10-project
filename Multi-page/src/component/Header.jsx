import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch, CiDiscount1 } from "react-icons/ci";
import { FaHireAHelper, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const links = [
    { icon: <CiSearch size={20} />, name: "Search" },
    { icon: <CiDiscount1 size={20} />, name: "Offers", sup: "New" },
    { icon: <FaHireAHelper size={20} />, name: "Help" },
    { icon: "", name: "Sign in" },
    { icon: <FaShoppingCart size={20} />, name: "Cart", sup: "(2)" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
      >
        {/* Side Menu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-[300px] h-full bg-white shadow-xl p-5 transition-transform duration-500 absolute top-0 left-0 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="text-xl font-bold mb-5">Menu</h2>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg font-medium hover:text-[#fc8019] cursor-pointer"
              >
                {link.icon}
                {link.name}
                {link.sup && <sup className="text-sm text-red-500">{link.sup}</sup>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header */}
      <header className="p-4 shadow-md bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[120px]">
            <img className="w-full" src="./images/logo.png.png" alt="Logo" />
          </div>

          {/* Location */}
          <div className="ml-5">
            <span className="font-bold border-b-2 border-black">Ratanada</span>{" "}
            Jodhpur, Rajasthan, India
            <FaCaretDown
              onClick={showSideMenu}
              fontSize={22}
              className="inline cursor-pointer ml-2 hover:text-[#fc8019]"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019] list-none"
              >
                {link.icon}
                {link.name}
                {link.sup && <sup className="text-sm">{link.sup}</sup>}
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
