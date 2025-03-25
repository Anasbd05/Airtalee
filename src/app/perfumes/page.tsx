import {perfumes} from '@/assets/assets'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PerfumesPage = () => {
    return (
        <section className='w-full flex'>
            <Sidebar />
            <div className=" w-full lg:w-4/5 p-2 sm:p-5 ml-auto">
                <h1 className='text-3xl font-bold font-header tracking-wider'>All Perfumes</h1>
                <main className="grid  justify-center place-content-center grid-cols-2 my-8 overflow-x-hidden gap-4 md:gap-6 lg:grid-cols-3">
                    {perfumes.map((perfume) => (
                        <Link href={`/perfumes/${perfume.title.replaceAll(" ","")}`} key={perfume.title} className='w-[175px] border sm:w-[280px] md:w-[320px] lg:w-72 flex flex-col shadow-lg gap-1 rounded-lg '  >
                            <Image className='w-full h-56 rounded-lg object-cover' width={300} height={300} src={perfume.image} alt="" />
                            <div className="flex flex-col md:flex-row w-full justify-between px-1 pt-3">
                                <h2 className='text-lg font-medium font-header text-neutral-800'>{perfume.title}</h2>
                                <h4 className='font-semibold text-orange-500 text-lg'>{perfume.price.toFixed(2)} MAD</h4>
                            </div>
                            <p className='text-sm px-2 py-1 mb-3 text-gray-700'>{perfume.description}</p>
                        </Link>
                    ))}
                </main>
            </div>

        </section>
    )
}

export default PerfumesPage
