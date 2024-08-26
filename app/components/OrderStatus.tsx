import axios from 'axios'
import React, { useState } from 'react'
type OrderStatus = 'placed' | 'prepared' | 'shipped' | 'delivered'

const statuses={
    'placed':{color:'bg-gray-500'},
    'prepared':{color:'bg-orange-400'},
    'shipped':{color:'bg-green-400'},
    'delivered':{color:'bg-blue-500'},
}
const OrderStatus = ({statuss,orderID}:{statuss:OrderStatus,orderID:string}) => {
  console.log(orderID)
  const [status, setStatus] = useState(statuss)
 const updateOrderStatus=async(orderStatus:string)=>{
      await axios.put('/api/orders',{orderStatus:orderStatus},{params:{orderID:orderID}})
  }
  return (
    <div  className={`text-white py-1 lg:py-2 ${statuses[status].color} lg:px-4 px-1 rounded-xl`}>
      <select value={status} className='bg-transparent' 

onChange={(e) =>{ setStatus(e.target.value as OrderStatus)
  updateOrderStatus(e.target.value)
}}>
        <option  value='placed'>placed</option>
        <option value='prepared'>prepared</option>
        <option value='shipped'>shipped</option>
        <option value='delivered'>delivered</option>
        </select>
      {/* {statuss} */}
      </div>
  )
}

export default OrderStatus