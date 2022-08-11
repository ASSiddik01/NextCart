/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Order = ({ subTotal, cart }) => {
    const price = () => {
        return 123
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font tracking-widest text-primary">NextCart</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #53534</h1>
                        <p className='mb-4'>Your order has been placed successfully</p>
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr className='border-b'>
                                        <th className='bg-inherit'>Item Name</th>
                                        <th className='bg-inherit'>Quantity</th>
                                        <th className='bg-inherit'>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(cart).map(item => {
                                        console.log(cart[item].qty)
                                        return <tr key={item}>
                                            <td>{cart[item].name}</td>
                                            <td>{cart[item].qty}</td>
                                            <td>{cart[item].qty * cart[item].price}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex mt-2">
                            <span className="title-font font-medium text-2xl text-primary">Subtotal: $ {subTotal} </span>
                            <button className="flex ml-auto text-white bg-primary  border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded">Track Order</button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
        </section>
    )
}

export default Order