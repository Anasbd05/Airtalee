"use client"
import {perfumes} from '@/assets/assets'
import {Search,ShoppingCart} from 'lucide-react'
import Link from 'next/link'
import React,{useState} from 'react'


const Navbar = () => {

    const [search,setSearch] = useState('')

    const fillteredPerfumes = search.length > 0 ? perfumes.filter((perfume) => perfume.title.toLowerCase().includes(search.toLowerCase())) : []

    return (
        <nav className="flex justify-between items-center w-full bg-white shadow-md py-5 md:px-6 lg:px-10">
            {/* Logo */}
            <Link href={"/"}>
                <h1 className="font-bold text-4xl font-logo tracking-wide text-orange-500">
                    Airtalo
                </h1>
            </Link>

            {/* Search Bar */}
            <div className="relative w-4/6">
                <div className="rounded-xl px-4 flex gap-2 items-center border-2 border-neutral-700">
                    <Search className="w-5 h-5" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-1 px-2 outline-none placeholder:text-sm placeholder:opacity-80"
                        type="text"
                        placeholder="Find Your Perfect Match..."
                    />
                </div>

                {/* Dropdown Suggestions */}
                <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
                    {fillteredPerfumes.map((perfume,index) => (
                        <Link key={index} onClick={() => setSearch('')} className="px-4 py-2 flex w-full hover:bg-gray-100 cursor-pointer"
                            href={`/perfumes/${perfume.title.replaceAll(' ',"")}`}
                        >
                            {perfume.title}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Cart Icon */}
            <ShoppingCart />
        </nav>
    );
};

export default Navbar;