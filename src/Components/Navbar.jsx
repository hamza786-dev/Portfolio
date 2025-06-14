import React from "react";
import {Link} from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { RiServiceFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 mb-3 nav">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="#pablo"
            >
              HAMZA
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-extrabold leading-snug  hover:opacity-75"
                  to="/"
                >
                  <IoHomeOutline />
                  <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-extrabold leading-snug  hover:opacity-75"
                  to="/about"
                >
                  <TiInfoLarge />


                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i><span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-extrabold leading-snug  hover:opacity-75"
                  to="/msg"
                >
                  <RiServiceFill />

                  <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i><span className="ml-2">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-extrabold leading-snug  hover:opacity-75"
                  to="/Portfolio"
                >
                  <IoPerson />
                  <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i><span className="ml-2">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-extrabold leading-snug  hover:opacity-75"
                  to="/Contact"
                >
                  <IoIosPhonePortrait />
                  <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i><span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}