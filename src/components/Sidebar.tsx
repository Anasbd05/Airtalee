import {ArrowDownward} from '@mui/icons-material'
import {ArrowDown} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className=' lg:flex hidden w-1/5 fixed p-5 bg-gray-100 border-r border-gray-500 h-screen'>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-800 gap-0.5 "
                >
                    <span className="text-lg font-bold"> Categories </span>
                    <ArrowDownward fontSize='small' />
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                    <li>
                        <Link
                            href="/perfumes"
                            className="block text-gray-600 hover:text-black rounded-lg px-4 py-2 text-sm font-medium"
                        >
                            ALL Perfumes
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/perfumes/men"
                            className="block text-gray-600 hover:text-black rounded-lg px-4 py-2 text-sm font-medium"
                        >
                            Men Perfumes
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/perfumes/women"
                            className="block text-gray-600 hover:text-black rounded-lg px-4 py-2 text-sm font-medium"
                        >
                            Women Perfumes
                        </Link>
                    </li>
                </ul>
            </details>
        </div>
    )
}

export default Sidebar
