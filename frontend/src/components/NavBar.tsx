import { useState } from "react";
import { Menu, Vegan, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { CartCheckout } from "../ui/Cart";
import { UserProfileFilled } from "../ui/Profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600  ">
      <div className="max-w-[1400px] flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3">
          <Vegan className="text-green-700" />
          <span className="text-2xl font-semibold dark:text-white">
            Toshniwal <span className=" hover:text-orange-300">Organics</span>
          </span>
        </a>
        <div className="flex md:order-2 text-white gap-x-7  ">
          <SearchBar />
          <button>
            <CartCheckout />
          </button>

          <button>
            <UserProfileFilled />
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          } w-full`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-300 dark:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-300 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-300 dark:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-300 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
