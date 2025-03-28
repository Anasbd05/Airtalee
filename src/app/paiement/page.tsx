import {LocalShippingOutlined,MonetizationOn} from '@mui/icons-material'
import {PcCase} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Paiement = () => {
    return (
        <section className='bg-gray-50'>
            <main className='flex w-full lg:flex-row flex-col gap-4 p-4'>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex w-full flex-col gap-2">
                        <div className='w-full p-5 ring ring-gray-400 rounded-lg'>
                            <div className="flex gap-2 items-center">
                                <MonetizationOn />
                                <h1 className='text-2xl tracking-wide font-bold'>Paiment Method</h1>
                            </div>
                            <p className='py-6 mt-2 rounded-md bg-orange-300 px-2 ring ring-orange-400'>Le paiement sera effectué directement par le service de livraison.</p>
                        </div>
                    </div>
                    <div className='flex w-full flex-col gap-2'>
                        <div className='w-full p-5 ring ring-gray-400 rounded-lg'>
                            <div className="flex gap-2 items-center">
                                <LocalShippingOutlined />
                                <h1 className='text-2xl tracking-wide font-bold'>Livraison address</h1>
                            </div>
                            <div className="flex mt-4 gap-2">
                                <input type="text" placeholder='Name' className='p-3 ring ring-gray-300 shadow w-2/4  rounded-lg' />
                                <input type="text" placeholder='Full name' className='p-3 ring ring-gray-300 shadow w-2/4  rounded-lg' />
                            </div>
                            <input type="text" placeholder='Address' className='p-3.5 ring ring-gray-300 shadow w-full mt-4 rounded-lg' />
                            <input type="text" placeholder='Ville' className='p-3.5 ring ring-gray-300 shadow w-full mt-4 rounded-lg' />
                            <input type="text" placeholder='Phone Number' className='p-3.5 ring ring-gray-300 shadow w-full mt-4 rounded-lg' />
                        </div>
                    </div>
                </div>



                {/* caisse */}
                <main className='w-full h-80 lg:w-2/6 rounded-md flex flex-col border border-black p-4'>
                    <div className="flex flex-col gap-3 mt-4">
                        <div className="flex gap-2 mb-2 items-center">
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
                        <div className="flex w-full mt-10 justify-between items-center">
                            <p className='font-bold text-xl'>TOTAL</p>
                            <small className='text-orange-600 text-xl font-bold'>75.00 MAD</small>
                        </div>
                    </div>
                    <button className='py-2 w-full mt-2 px-8 bg-black hover:opacity-80  rounded-md text-white'>
                        <Link className='flex w-full justify-center' href={'/paiement'}>Buy now</Link>
                    </button>
                </main>

            </main>
        </section >
    )
}

export default Paiement
