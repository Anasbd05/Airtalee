import {perfumes} from '@/assets/assets'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenPage = () => {

    const Menperfume = perfumes.filter((item) => item.category === "men")

    return (
        <section className='w-full flex'>
            <Sidebar />
            <div className="w-full lg:w-4/5 p-2 sm:p-3.5 lg:p-3 ml-auto">
                <h1 className='text-3xl font-bold font-header tracking-wider'>Men Perfumes</h1>
                <main className="grid  justify-center place-content-center grid-cols-2 sm:grid-cols-3 my-8 overflow-x-hidden gap-2 sm:gap-3 md:gap-x-3 gap-y-5 lg:gap-x-1 lg:grid-cols-4">
                    {Menperfume.map((perfume) => (
                        <Link href={`/perfumes/${perfume.title.replaceAll(" ","")}`} key={perfume.title} className='w-[180px] border sm:w-[290px] md:w-[235px] lg:w-[235px] flex flex-col shadow-lg gap-1 rounded-lg '  >
                            <Image className='w-full h-56 rounded-lg object-cover' width={300} height={300} src={perfume.image} alt="" />
                            <div className="flex flex-col md:px-2 lg:p-0.5 md:flex-row w-full justify-between px-0.5 pt-3">
                                <h2 className='font-medium font-header text-neutral-800'>{perfume.title}</h2>
                                <h4 className='font-semibold text-orange-500'>{perfume.price.toFixed(2)} MAD</h4>
                            </div>
                            <p className='text-sm px-0.5 md:px-2 lg:p-0.5 py-1 mb-3 text-gray-700'>{perfume.description}</p>
                        </Link>
                    ))}
                </main>
            </div>

        </section>
    )
}

export default MenPage
