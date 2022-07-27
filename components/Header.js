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
  const mainMenu = (
    <>
      <li>
        <Link href="/">Home </Link>
      </li>
      <li>
        <Link href="/products">Shop </Link>
      </li>
      <li>
        <Link href="/about">About </Link>
      </li>
      <li>
        <Link href="/contact">Contact </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky" >
      <div className="navbar bg-base-100 lg:px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost flex text-primary">
              <svg
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>{" "}
              <span className="lg:block hidden ml-2">Main Menu</span>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-none rounded-b-lg w-52"
            >
              {mainMenu}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"}>
            <a className=" normal-case text-xl">
              <Image
                src={logo}
                width={160}
                height={50}
                alt="This is next cart site logo"
              />
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <HiOutlineShoppingCart className="text-primary text-3xl" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 card card-compact rounded-none rounded-b-lg dropdown-content w-72 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">Your Cart</span>
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
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
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
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-b-lg w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
