import Head from "next/head";
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
// import connectDb from '../middleware/mongoose';
import mongoose from "mongoose";
import Image from "next/image";

const Products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Shop | NextCart</title>
      </Head>
      <div className="mt-10 lg:px-16 px-4 z-0">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {products.map((product) => {
            return (
              <div key={product._id}>
                <Link passHref={true} href={`/product/${product._id}`}>
                  <div className="card card-compact bg-orange-50 pt-4 rounded-md lg:max-w-lg shadow-xl cursor-pointer hover:text-primary static">
                    <figure>
                      {/* <Image width={400} height={400} className="lg:max-h-[40vh] rounded  px-4" src={`${product.thumbnail}`} alt="product"></Image> */}
                      <style jsx>{`
                        .height_250 {
                          height: 250px;
                        }
                      `}</style>
                      <img
                        // className="lg:max-h-[40vh] rounded  px-4"
                        className="height_250 rounded  px-4"
                        src={product.thumbnail}
                        alt="product"
                      />
                    </figure>
                    <div className="card-body">
                      <p className="text-sm text-primary">{product.category}</p>
                      <h2 className="card-title text-neutral hover:text-secondary transition duration-0 hover:duration-200 leading-none">
                        {product.title.length > 20
                          ? product.title.slice(0, 20) + "..."
                          : product.title}
                      </h2>
                      <div className="flex justify-center">
                        <p className="text-sm">$ {product.price}</p>
                        <p className="text-sm">{product.brand}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Products;
