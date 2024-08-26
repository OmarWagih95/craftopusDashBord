'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrderStatus from './OrderStatus';
import BasicModal from './BasicModal';
import Link from 'next/link';

const RecentOrders = ({className}:{className:string}) => {
    const [orders,setOrders] =useState<any[]>([]);
    const fetchOrders = async () => {
      const res =await axios('/api/orders')
      // const res =await axios('/api/categories2')
      // if(res.data.json().ok){
  
        setOrders(res.data);
        console.log(res);
      
      // }
    }
  
    useEffect(() => {
      fetchOrders();
    }, [])

  return (
    <div className={className}>
        <div className='px-3 py-4 flex text-gray-600 font-semibold justify-between'>
            <h4>Recent orders</h4>
           <Link href={'/orders'}>
           
            <h4 className='underline cursor-pointer font-semibold text-purple-600 hover:text-[1.5vw] hover:font-bold'>see all</h4>
           </Link> 
        </div>
        <table className= 'px-3 text-gray-500 w-full'>
            <thead>
                <tr>
            <th>No</th>
            <th>order date</th>
            <th>status</th>
            <th>total</th>
            <th>customer name</th>
            <th>details</th>
             </tr>
             </thead>
             {orders && orders.map((order,index)=>{
              console.log(orders.length)
        
         return index<3 && <tr key={order._id}>
          <td>{index+1}</td>
          <td>{(order.createdAt).substring(0,10)}</td>
          {/* <td>{order.orderStatus}</td> */}
          <td><OrderStatus orderID={order._id} statuss={order.orderStatus}/></td>
          <td>{order.total}</td>
          <td>{order.name}</td>
          <td className=''><BasicModal order={order}/></td>
        </tr>
})}       
        </table>
    </div>
  )
}

export default RecentOrders