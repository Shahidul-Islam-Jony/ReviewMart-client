import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./active.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        {/* small devices */}
        <div className="navbar-start w-fit">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-4 lg:hidden"
            >
              {isOpen ? (
                <IoMdCloseCircleOutline
                  onClick={() => setIsOpen(false)}
                  className="text-xl"
                />
              ) : (
                <svg
                  onClick={() => setIsOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>
            {isOpen ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/"
                  className="text-base rounded-md p-2 flex items-center gap-1"
                >
                  Home
                </NavLink>
              </ul>
            ) : (
              ""
            )}
          </div>
          <Link to="/" className="w-32 mr-16 text-lg font-bold">
            ReviewMart
          </Link>
        </div>
        {/* large devices */}
        <div className="navbar-start top-4 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLink
              to="/"
              className="text-base rounded-md py-1 px-2 flex items-center gap-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-base rounded-md py-1 px-2 flex items-center gap-1"
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="text-base rounded-md py-1 px-2 flex items-center gap-1"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-sm btn-outline text-base font-bold hover:bg-blue-100 hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
