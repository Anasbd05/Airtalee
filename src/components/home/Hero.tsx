import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {

    return (
        <section className='py-10 flex flex-col items-center w-5/6 mx-auto'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="flex w-full items-center  py-8 h-96 rounded-lg bg-green-600 px-6 gap-5">
                        <div className="flex flex-col justify-between gap-6  py-4">
                            <div className="flex flex-col my-4 gap-10">
                                <h2 className='text-4xl  font-header font-bold '>
                                    The Art of Perfumery
                                </h2>
                                <p className='max-w-2xl text-lg font-medium text-neutral-800'>
                                    Our perfumes are created with the finest ingredients, blended by expert perfumers to achieve a balance of elegance and sophistication. Discover the craftsmanship behind every bottle.                        </p>
                            </div>
                            <Link href={"/perfumes"} className='flex justify-center py-2 px-6 bg-black text-white cursor-pointer rounded-lg hover:opacity-80  w-full text-center'>
                                View perfumes
                            </Link>
                        </div>
                        <Image className='w-2/6 h-[360px] rounded-lg' src={"/man9.jpg"} width={300} height={300} alt='' />
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="flex w-full items-center py-8 h-96 rounded-lg bg-teal-300 px-6 gap-5">
                        <div className="flex flex-col  justify-between gap-6  py-4">

                            <div className="flex flex-col my-4 gap-10">
                                <h2 className='text-4xl  font-header font-bold '>
                                    Unleash Your Personality Through Fragrance
                                </h2>
                                <p className='max-w-2xl text-lg font-medium text-neutral-800'>
                                    Perfume is more than just a scent—it&lsquo;s an expression of who you are. Explore our diverse range of aromas that complement every mood and personality.
                                </p>
                            </div>
                            <Link href={"/perfumes"} className='flex justify-center py-2 px-6 bg-black text-white cursor-pointer rounded-lg hover:opacity-80  w-full text-center'>
                                View perfumes
                            </Link>                        </div>
                        <Image className='w-2/6 h-[360px] rounded-lg' src={"/man9.jpg"} width={300} height={300} alt='' />
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="flex w-full items-center py-8 h-96 rounded-lg bg-orange-500 px-6 gap-5">
                        <div className="flex flex-col justify-between gap-6  py-4">
                            <div className="flex flex-col my-4 gap-10">
                                <h2 className='text-4xl  font-header font-bold '>
                                    Discover the Essence of Elegance
                                </h2>
                                <p className='max-w-2xl text-lg font-medium text-neutral-800'>
                                    Experience the art of fragrance with our exclusive collection of perfumes. Each scent is crafted to evoke emotion, enhance confidence, and leave a lasting impression.
                                </p>
                            </div>
                            <Link href={"/perfumes"} className='flex justify-center py-2 px-6 bg-black text-white cursor-pointer rounded-lg hover:opacity-80  w-full text-center'>
                                View perfumes
                            </Link>                        </div>
                        <Image className='w-2/6 h-[360px] rounded-lg' src={"/man9.jpg"} width={300} height={300} alt='' />
                    </div>
                </div>
            </div>
            <div className="flex w-full mt-4 justify-center gap-2 py-2">
                <a href="#item1" className={`bg-gray-300 h-2.5 w-2.5 rounded-full`}></a>
                <a href="#item2" className={`bg-gray-300 h-2.5 w-2.5 rounded-full`}></a>
                <a href="#item3" className={`bg-gray-300 h-2.5 w-2.5 rounded-full`}></a>
            </div>

        </section>
    )
}

export default Hero
