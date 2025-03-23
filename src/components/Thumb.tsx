import {perfumes} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Thumb = () => {
    return (
        <section className='bg-gray-50 w-full py-14 '>
            <main className="grid sm:grid-cols-2 justify-center place-content-center grid-cols-1 px-6 overflow-x-hidden gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {perfumes.slice(0,4).map((perfume) => (
                    <Link href={`/perfumes/${perfume.title.replaceAll(' ',"")}`} key={perfume.title} className='w-[275px] bg-gray-100 sm:w-72 md:w-[340px] lg:w-72 flex flex-col shadow-lg gap-2 rounded-lg '  >
                        <Image className='w-full h-64 rounded-lg object-cover' width={300} height={300} src={perfume.image} alt="" />
                        <h2 className='text-sm font-medium px-2  text-neutral-800'>{perfume.title}</h2>
                        <h4 className='font-semibold text-orange-500 p-2 text-lg'>{perfume.price.toFixed(2)} MAD</h4>
                    </Link>
                ))}
            </main>
        </section>
    )
}

export default Thumb
