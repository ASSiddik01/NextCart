import Head from "next/head";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <>
      <Head>
        <title>Shop | NextCart</title>
      </Head>
      <div className="mt-10 lg:px-16 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Link href={"/"}>
            <div className="card card-compact bg-orange-50 pt-4 rounded-md lg:max-w-lg shadow-xl cursor-pointer hover:text-primary">
              <figure>
                <img
                  className="lg:max-h-[40vh] rounded"
                  src="https://i.ibb.co/Sy2Mnxz/tops.webp"
                  alt="product"
                />
              </figure>
              <div className="card-body">
                <p className="text-sm text-primary">T-shirt</p>
                <h2 className="card-title text-neutral hover:text-secondary transition duration-0 hover:duration-200 leading-none">
                  Title
                </h2>
                <div className="flex justify-center">
                  <p className="text-sm">$ 200</p>
                  <p className="text-sm">S, M, L, XL, XXL</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
