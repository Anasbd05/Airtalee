"use client"
import React,{useEffect,useState} from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {supabase} from '@/utils/supabase'
import {Loader2} from 'lucide-react'
import {toast} from 'sonner'


const AdminPage = () => {

    const [Orders,setOrders] = useState([])
    const [loading,setLoading] = useState(false)

    const FetchOrders = async () => {
        setLoading(true)
        try {
            const {data,error} = await supabase
                .from('userdetails')
                .select("*")
            if(data) {
                setOrders(data)
            } else {
                toast.error(error.message)
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchOrders()
    },[])



    return (
        <div className='w-4/5 mx-auto py-8'>
            {loading ? <div className="flex items-center justify-center w-full h-[400px]">
                <Loader2 className='w-20 h-20 animate-spin' />
            </div> :
                <Table>
                    <TableCaption>A list of the recent orders.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>ville</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.name} </TableCell>
                                <TableCell>{order.ville} </TableCell>
                                <TableCell>{order.address}</TableCell>
                                <TableCell>0{order.number} </TableCell>
                                <TableCell className="text-right">
                                    <button className='py-2 px-4 text-white hover:bg-red-400 bg-red-600 rounded-md'>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className='my-4'>
                        <TableRow className='mt-5'>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$25.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            }
        </div>
    )
}

export default AdminPage
