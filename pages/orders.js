import React, { useEffect } from 'react';
import Order from "../models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";


const Orders = () => {
    const router = useRouter()
    // redirect
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push("/login")
        }
    }, [localStorage.getItem('token')])
    return (
        <div className="container mx-auto lg:px-5 overflow-x-auto mt-6">
            <h2 className='text-center pb-4 font-bold text-2xl'>My Orders</h2>
            <table className="table table-compact w-full static">
                <thead>
                    <tr>
                        <th className='static'>SL</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }
    let orders = await Order.find();
    return {
        props: { orders: JSON.parse(JSON.stringify(orders)) }, // will be passed to the page component as props
    };
}

export default Orders