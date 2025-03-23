import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <section className='w-full px-8 py-10'>
            <div className="flex flex-col items-center my-5">
                <h1 className='text-4xl font-header font-bold tracking-wider text-center mb-2'>Our Categories</h1>
                <p className='text-center leading-relaxed text-gray-700 max-w-2xl'>A single spray can transform your day. Elevate your everyday routine with perfumes designed to inspire and captivate.</p>
            </div>
            <div className="flex w-full gap-4">
                <Link className='w-2/4' href={"/perfumes/men"}>
                    <Image alt='' src={"/mencat.webp"} width={600} height={400} className='rounded-md w-full h-96 ' />
                </Link>
                <Link className='w-2/4' href={"/perfumes/women"}>
                    <Image alt='' src={"/womencat.webp"} width={600} height={400} className='rounded-md w-full h-96 ' />
                </Link>
            </div>
        </section>
    )
}

export default Category
