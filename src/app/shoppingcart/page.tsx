"use client"
import {perfumes} from '@/assets/assets'
import {Delete} from '@mui/icons-material'
import {Minus,PcCase,Plus} from 'lucide-react'
import Image from 'next/image'
import React,{useState} from 'react'

const CartShopping = () => {
    const [quantity,setQuantity] = useState<number>(1)

    return (
        <section className='w-full bg-gray-50 mx-auto py-10'>
            <div className='flex gap-5 w-10/12 mx-auto '>
                <main className='w-4/6 rounded-md border  border-black p-4'>
                    <h1 className='text-2xl mb-6 font-bold font-header'>Your Cart</h1>
                    {perfumes.slice(5,8).map((perfume) => (
                        <div className='flex p-2 w-full my-2 bg-gray-100 rounded-md gap-4' key={perfume.id}>
                            <Image alt="" src={perfume.image} height={40} width={40} className='w-24 object-cover h-24 ' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center justify-between w-full ">
                                    <h1 className=' text-lg font-bold'>{perfume.title}</h1>
                                    <Delete />
                                </div>
                                <hr className='border-none w-full h-[1px] my-2 bg-neutral-300' />
                                <div className="flex items-center justify-between w-full">
                                    <p className='text-xl text-orange-600 font-bold'>{perfume.price.toFixed(2)} MAD</p>
                                    <div className='flex gap-4 py-1 w-44 px-4 justify-center items-center bg-gray-100 border border-gray-300 rounded-lg'>
                                        <Minus
                                            onClick={() => setQuantity((prev: number) => Math.max(1,prev - 1))}
                                            className="p-1 rounded-md text-black w-14 bg-gray-300"
                                        />
                                        <input
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1,Number(e.target.value)))}
                                            min={1}
                                            className="w-full outline-none"
                                            type="number"
                                        />
                                        <Plus
                                            onClick={() => setQuantity((prev: number) => prev + 1)}
                                            className="p-1 rounded-md text-black w-14 bg-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
                <main className='w-2/6 rounded-md flex flex-col justify-between border border-black p-4'>
                    <div className="flex flex-col gap-3 mt-10">
                        <div className="flex gap-2 mb-8 items-center">
                            <PcCase className='w-7 h-7' />
                            <h1 className='text-2xl font-header font-bold'>Caisse</h1>
                        </div>
                        <hr className='border-none ' />
                        <div className="flex w-full justify-between items-center">
                            <p className='font-bold'>Product price </p>
                            <small>50.00 MAD</small>
                        </div>
                        <hr className='border-none h-[1px] w-full bg-neutral-300' />
                        <div className="flex w-full justify-between items-center">
                            <p className='font-bold'>Livraison </p>
                            <small>25.00 MAD</small>
                        </div>
                        <hr className='border-none h-[1px] w-full bg-neutral-300' />
                        <div className="flex w-full mt-20 justify-between items-center">
                            <p className='font-bold text-xl'>TOTAL</p>
                            <small className='text-orange-600 text-xl font-bold'>75.00 MAD</small>
                        </div>
                    </div>
                    <button className='py-2 w-full px-8 bg-black hover:opacity-80  rounded-md text-white'>Buy now</button>
                </main>
            </div>
        </section>
    )
}

export default CartShopping
