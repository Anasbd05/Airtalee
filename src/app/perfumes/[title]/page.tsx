/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {perfumes} from '@/assets/assets'
import Thumb from '@/components/Thumb'
import {Minus,Plus} from 'lucide-react'
import Image from 'next/image'
import React,{useState} from 'react'

const PerfumeDe = ({params}: {params: Promise<{title: string}>}) => {
    const {title} = React.use(params)
    const perfumeFiltered = perfumes.filter((item) => item.title.replaceAll(" ","") === title)

    const [quantity,setQuantity] = useState<number>(1)

    const [size,setSize] = useState('30ml')

    const getPrice = (perfume: any) => {
        if(size === "30ml") {
            return `${perfume.price} MAD`
        } if(size === "50ml") {
            return "70 MAD"
        } else {
            return "100 MAD"
        }
    }

    return (
        <section>
            {perfumeFiltered.map((perfume) => (
                <div key={perfume.title} className='w-full  flex flex-col md:flex-row gap-4 px-3 sm:px-5 md:px-10 py-8'>
                    <Image alt='' src={perfume.image} className='w-full md:w-2/4 object-cover h-[500px] ' />
                    <main className="w-full  md:w-2/4 flex gap-4 flex-col ">
                        <h1 className='text-3xl font-header font-medium'>{perfume.title}</h1>
                        <h3 className='text-3xl text-orange-500 font-bold'>
                            {getPrice(perfume)}
                        </h3>
                        <div className='my-4'>
                            <label >Quantity</label>
                            <div className='flex gap-4 py-1 w-44 px-4 justify-center items-center bg-gray-100 border border-gray-300 rounded-lg'>
                                <Minus
                                    onClick={() => setQuantity((prev) => Math.max(1,prev - 1))}
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
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="p-1 rounded-md text-black w-14 bg-gray-300"
                                />
                            </div>
                        </div>
                        <h3 className='font-medium'>Size: <span className='font-bold tracking-wide'>{size}</span> </h3>
                        <div className="flex gap-3 mb-5 items-center">
                            <button onClick={() => setSize('30ml')} className={`cursor-pointer border py-1 px-4 rounded-lg ${size === "30ml" && "bg-black text-white"}`}>30ml</button>
                            <button onClick={() => setSize('50ml')} className={`cursor-pointer border py-1 px-4 rounded-lg ${size === "50ml" && "bg-black text-white"}`}>50ml</button>
                            <button onClick={() => setSize('100ml')} className={`cursor-pointer border py-1 px-4 rounded-lg ${size === "100ml" && "bg-black text-white"}`}>100ml</button>
                        </div>
                        <p className='text-gray-700'>{perfume.description}</p>
                        <div className="flex flex-col gap-2">
                            <button className='bg-orange-500 cursor-pointer hover:opacity-80 font-bold py-2 w-full rounded-md'>Add to cart</button>
                            <button className='bg-black py-2 cursor-pointer hover:opacity-80 text-white font-bold w-full rounded-md'>Buy Now</button>
                        </div>
                    </main>
                </div>
            ))}
            <Thumb />
        </section>
    )
}

export default PerfumeDe
