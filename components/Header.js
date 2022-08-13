/* eslint-disable @next/next/no-img-element */
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
import { HiOutlineMenuAlt1, HiOutlineUserCircle } from 'react-icons/hi';

const Header = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

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
    <nav className="sticky">
      <div className="navbar bg-base-100 lg:px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost flex text-primary">
              <HiOutlineMenuAlt1 className="text-2xl" />
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
                  <span className="badge badge-sm indicator-item"> {Object.keys(cart).length} </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 card card-compact rounded-none rounded-b-lg dropdown-content w-72 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">Your Cart</span>
                  <ol className="list-decimal px-4 mt-2">
                    {Object.keys(cart).length == 0 && <p className="my-4 font-semibold">Empty Cart</p>}
                    {
                      Object.keys(cart).map(item => {
                        return <li key={item} className="my-2">
                          <div className="flex">
                            <div className="text-neutral w-2/3">
                              {cart[item].name}
                            </div>
                            <div className="flex justify-center items-center w-1/3">
                              <AiOutlineMinusCircle onClick={() => removeFromCart(item, 1)} className="text-primary hover:text-neutral" />
                              <span className="mx-2"> {cart[item].qty} </span>
                              <AiOutlinePlusCircle onClick={() => addToCart(item, 1)} className="text-primary hover:text-neutral" />
                            </div>
                          </div>
                        </li>
                      })
                    }
                  </ol>
                  <span className="text-primary">Subtotal: $ {subTotal} </span>
                  <div className="card-actions">
                    <div className="lg:flex mt-2 ">
                      <Link href={'/checkout'}><button className="btn btn-sm btn-primary mr-1 capitalize">
                        <AiOutlineCheckCircle className="mr-1" /> Checkout
                      </button></Link>
                      <button
                        onClick={clearCart}
                        className="btn btn-sm btn-primary ml-1 capitalize"
                      >
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
                  <HiOutlineUserCircle className="text-3xl mt-1 ml-1" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-b-lg w-52"
              >
                <li>
                  <Link href={"/myaccount"}>
                    <a className="justify-between">
                      Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/order"}>
                    <a>Orders</a>
                  </Link>
                </li>
                {user.value && <li onClick={logout}>
                  <a>Log Out</a>
                </li>}
                {!user.value && <li>
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
