import React, { useState } from "react";
import { Link } from "react-router-dom";
import TechHouseLogo from "../../images/logo.png";

export default function Header({ isLog, updateIsLog }) {
  const [nav, setNav] = useState(false);

  // function handleLogOut() {
  //   sessionStorage.removeItem("User");
  //   updateIsLog(false);
  // }

  return (
    <header aria-label="Site Header" class="bg-blue-900">
      <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block text-teal-600">
          <a class="block text-white" href="/">
            <span class="sr-only">Home</span>

            <div class="flex-shrink-0 justify-center">
              <img class=" w-40	" src={TechHouseLogo} alt="Workflow logo" />
            </div>
          </a>
        </Link>
        <div class="flex flex-1 items-center justify-end">
          <button
            onClick={() => setNav(!nav)}
            class="block ml-4 rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-teal-600 md:hidden"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav
            className={`md:hidden fixed top-[0px] rounded-md  w-60 border-teal-600	border-2	 bg-gray-100 z-40 duration-700 ${
              nav ? "right-[53px] top-[53px]" : "right-[-100vw]"
            } `}
          >
            <ul class="flex flex-col items-center">
              <li className="mt-5">
                <Link
                  to="/"
                  className="text-gray-500 font-bold transition hover:text-teal-600"
                >
                  Home
                </Link>
              </li>
              <li className="mt-12">
                <Link
                  to="/about"
                  className="text-gray-500 font-bold transition hover:text-teal-600"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-12">
                <Link
                  to="/contact"
                  className="text-gray-500 font-bold transition  hover:text-teal-600"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mt-12">
                <Link
                  to="/paymentPage"
                  className="text-gray-500 font-bold transition  hover:text-teal-600"
                >
                  Payment
                </Link>
              </li>

              <li className="mt-12 mb-5">
                <Link
                  to="/products"
                  className="text-gray-500 font-bold transition  hover:text-teal-600"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm ">
              <li>
                <Link
                  to="/"
                  className="text-white font-bold transition hover:text-yellow-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white font-bold transition hover:text-yellow-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white font-bold transition  hover:text-yellow-500"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/resorts"
                  className="text-white font-bold transition  hover:text-yellow-500"
                >
                  Resorts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            {/* {isLog ? (
              <Link
                onClick={handleLogOut}
                to="/signIn"
                className="block rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-yellow-600"
              >
                Log Out
              </Link>
            ) : (
              <Link
                to="/signup"
                className="block rounded-md bg-yellow-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-yellow-600"
              >
                Log In
              </Link>
            )} */}

            <Link
              to="/login"
              className="block rounded-md bg-yellow-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-yellow-600"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
