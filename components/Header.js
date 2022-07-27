import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src={logo}
                width={180}
                height={60}
                alt="This is next cart site logo"
              />
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href={"/products"}>
              <a className="mr-5 hover:text-gray-900">Shop</a>
            </Link>
            <Link href={"/about"}>
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href={"/contact"}>
              <a className="mr-5 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <label htmlFor="my-drawer-4" className="">
            <HiOutlineShoppingCart className="text-primary text-3xl" />
          </label>
        </div>
      </header>

      <div className="sidebar">
        <div className="drawer drawer-end absolute">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              className="drawer-overlay hidden"
            ></label>
            <div className="menu p-4 overflow-y-auto w-80 bg-orange-100 text-base-content">
              <h2 className="font-bold text-xl">Your Cart</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
