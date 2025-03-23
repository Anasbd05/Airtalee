import React from 'react'
import {Bestperfumes} from "../../assets/assets"
import Image from 'next/image'
import Link from 'next/link'

const BestProducts = () => {
    return (
        <section className='w-full py-10 bg-gray-100 '>
            <h1 className='text-4xl font-header font-bold tracking-wider text-center my-5'>BEST SELLER</h1>
            <main className="grid sm:grid-cols-2 justify-center place-content-center grid-cols-1 px-6 overflow-x-hidden gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {Bestperfumes.map((perfume) => (
                    <Link href={`perfumes/${perfume.title.replaceAll(' ',"")}`} key={perfume.title} className='w-[275px] bg-gray-100 border sm:w-72 md:w-[340px] lg:w-72 flex flex-col shadow-lg gap-2 rounded-lg '  >
                        <Image className='w-full h-64 rounded-lg object-cover' width={300} height={300} src={perfume.image} alt="" />
                        <div className="flex w-full justify-between px-2 py-4">
                            <h2 className='text-lg font-medium font-header text-neutral-800'>{perfume.title}</h2>
                            <h4 className='font-semibold text-orange-500 text-lg'>{perfume.price.toFixed(2)} MAD</h4>
                        </div>
                    </Link>
                ))}
            </main>
        </section>
    )
}

export default BestProducts
