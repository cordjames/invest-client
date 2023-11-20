import { useState } from "react";
import { Link } from "react-router-dom";
import GbButton from "../button/GbButton";
import RButton from "../button/RButton";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full max-w-full xl:px-0 z-10 sticky top-0 bg-[#0C0E27]" id="home">
      <nav className="  w-full shadow-sm container mx-auto">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <img src="path-to-your-image.jpg" class="h-6 w-6 cursor-pointer md:hidden block" alt="Navbar Icon"/> */}
          <Link to="/" className="flex items-center ">
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
              Asce
              <span className="text-blue-900">ntè</span>
            </span>
          </Link>

          <div className="flex md:order-2">
            <Link to="/auth/sign-in" className="md:block hidden">
              <RButton text="Sign in" />
            </Link>
            {/* <Link to="/auth/sign-up" className="md:ml-5 md:block hidden">
              <RButton text="Sign up" />
            </Link> */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 font-medium border md:border-none border-slate-800 rounded-lg md:rounded-none  md:flex-row md:space-x-8 md:mt-0   dark:border-slate-700 lg:border-transparent ${
                menuOpen ? "top-20 " : "top-[-490px]"
              }`}
            >
              <li className="mb-8 lg:pr-8 md:mb-0 ">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-slate-500   rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              {/* <li className="mb-8 lg:pr-8 md:mb-0 ">
                <a
                  href="#features"
                  className="block py-2 pl-3 pr-4 text-slate-500  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li> */}
              {/* <li className="mb-8 lg:pr-8 md:mb-0 ">
                <a
                  href="#blog"
                  className="block py-2 pl-3 pr-4 text-slate-500  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li> */}
              <li className="mb-8 lg:pr-8 md:mb-0 ">
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-slate-500  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li className="mb-8 lg:pr-8 md:mb-0 ">
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-slate-500  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>

              <span>
                <Link to="/auth/sign-in">
                  <button
                    type="button"
                    className="text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none md:hidden lg:hidden"
                  >
                    Sign In
                  </button>
                </Link>
                {/* <Link to="/auth/sign-up">
                  <button
                    type="button"
                    className="text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none md:hidden lg:hidden"
                  >
                    Sign Up
                  </button>
                </Link> */}
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
