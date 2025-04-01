"use client"
import {Minus,PcCase,Plus,Trash2} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useCart} from 'react-use-cart'

const CartShopping = () => {
    const {items,removeItem,updateItemQuantity,cartTotal} = useCart()
    const AmountTotal = cartTotal + 25

    return (
        <section className='w-full bg-gray-50 mx-auto py-10'>
            <div className='flex lg:flex-row flex-col gap-5 w-10/12 mx-auto'>
                {/* CART DETAILS */}
                <main className='w-full lg:w-4/6 rounded-md border border-black p-4'>
                    <h1 className='text-2xl mb-6 font-bold font-header'>Your Cart</h1>
                    {items.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {items.map((perfume) => (
                                <div className='flex p-2 w-full my-2 bg-gray-200 rounded-md gap-4' key={perfume.id}>
                                    <Image alt="" src={perfume.image} height={40} width={40} className='w-24 object-cover h-24' />
                                    <div className="flex flex-col w-full gap-2">
                                        <div className="flex items-center justify-between w-full">
                                            <h1 className='text-lg font-bold'>{perfume.title}</h1>
                                            <Trash2 onClick={() => removeItem(perfume.id)} className='hover:text-red-600 cursor-pointer' />
                                        </div>
                                        <hr className='border-none w-full h-[1px] my-2 bg-neutral-300' />
                                        <div className="flex items-center justify-between w-full">
                                            <p className='text-xl text-orange-600 font-bold'>{perfume.itemTotal.toFixed(2)} MAD</p>
                                            <div className='flex gap-4 py-1 w-36 px-4 justify-center items-center bg-gray-100 border border-gray-300 rounded-lg'>
                                                <Minus onClick={() => updateItemQuantity(perfume.id,perfume.quantity - 1)} />
                                                <p className='bg-black text-white w-8 rounded-md text-center h-6'>{perfume.quantity}</p>
                                                <Plus onClick={() => updateItemQuantity(perfume.id,perfume.quantity + 1)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <h1 className='text-4xl my-4 font-header font-bold'>Empty Cart</h1>
                        </div>
                    )}
                </main>

                {/* CHECKOUT DETAILS */}
                <main className='w-full h-80 lg:w-2/6 rounded-md flex flex-col border border-black p-4'>
                    <div className="flex gap-2 mb-2 items-center">
                        <PcCase className='w-7 h-7' />
                        <h1 className='text-2xl font-header font-bold'>Caisse</h1>
                    </div>
                    {items.length > 0 ? (
                        <div className="flex flex-col gap-3 mt-4">
                            <hr className='border-none' />
                            <div className="flex w-full justify-between items-center">
                                <p className='font-bold'>Product price </p>
                                <small>{cartTotal.toFixed(2)} MAD</small>
                            </div>
                            <hr className='border-none h-[1px] w-full bg-neutral-300' />
                            <div className="flex w-full justify-between items-center">
                                <p className='font-bold'>Livraison </p>
                                <small>25.00 MAD</small>
                            </div>
                            <hr className='border-none h-[1px] w-full bg-neutral-300' />
                            <div className="flex w-full mt-10 justify-between items-center">
                                <p className='font-bold text-xl'>TOTAL</p>
                                <small className='text-orange-600 text-xl font-bold'>{AmountTotal.toFixed(2)} MAD</small>
                            </div>
                            <Link href={'/paiement'} className='py-2 w-full mt-2 px-8 bg-black hover:opacity-80 rounded-md text-white text-center'>
                                Buy now
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <h1 className='text-4xl my-4 font-header font-bold'>Empty Cart</h1>
                        </div>
                    )}
                </main>
            </div>
        </section>
    )
}

export default CartShopping
