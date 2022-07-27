import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCheckCircle,
  AiOutlineClear,
} from "react-icons/ai";

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
            <div className="p-4 w-80 bg-orange-100">
              <h2 className="font-bold text-xl">Your Cart</h2>
              <ol className="list-decimal px-4 mt-2">
                <li className="my-2">
                  <div className="flex">
                    <div className="text-neutral w-2/3">Product Title</div>
                    <div className="flex justify-center items-center w-1/3">
                      <AiOutlineMinusCircle className="text-primary hover:text-neutral" />
                      <span className="mx-2">2</span>
                      <AiOutlinePlusCircle className="text-primary hover:text-neutral" />
                    </div>
                  </div>
                </li>
                <li className="my-2">
                  <div className="flex justify-between">
                    <h3 className="text-neutral w-2/3">Product Title</h3>
                    <div className="flex justify-center items-center w-1/3">
                      <AiOutlineMinusCircle className="text-primary hover:text-neutral" />
                      <span className="mx-2">2</span>
                      <AiOutlinePlusCircle className="text-primary hover:text-neutral" />
                    </div>
                  </div>
                </li>
              </ol>
              <div className="sidebar_bottom mt-5">
                <h4 className="text-xl font-bold">
                  Subtotal: $<span>100</span>
                </h4>
                <div className="lg:flex mt-2 ">
                  <button className="btn btn-sm btn-primary mr-1 capitalize">
                    <AiOutlineCheckCircle className="mr-1" /> Checkout
                  </button>
                  <button className="btn btn-sm btn-primary ml-1 capitalize">
                    <AiOutlineClear className="mr-1" /> Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
