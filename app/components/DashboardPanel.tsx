'use client'
import React, { useState } from 'react'
import { MdDashboard,MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

import PanelItem from './PanelItem';
import Image from 'next/image';
import Link from 'next/link';





function DashboardPanel() {
   const  selectedItem='text-purple-700';
   const  notSelectedItem='text-white';
  const panelItems=[
    {title: 'Dashboard',icon: <MdDashboard size={20} /> ,path:'/'},
    {title: 'Categories',icon: <BsFillMenuButtonWideFill size={20}/>,path:'/categories' },
    {title: 'Products',icon: <MdProductionQuantityLimits size={20}/>, path:'/categories' },
    {title: 'Orders',icon: <TbTruckDelivery size={20}  />,path:'/categories' },
    {title: 'Settings',icon: <IoIosSettings size={20}  />,path:'/categories' },
  ]
  const [selectedIndex,setSelectedIndex]= useState(0);
  return (
    <div className='flex gap-4 items-center py-3 flex-col top-0 left-0  sm:w-[15vw] lg:w-[25vw] h-screen bg-purple-700'>
        <Link onClick={()=>setSelectedIndex(0)} href={'/'}>
      <div className='flex justify-center gap-2 items-center'>
      <Image alt='logo' width={40} height={50} src={'/craftopus1.png'} ></Image>
      <h2 className='font-bold'>
        Craftopus
        </h2>
      </div>
        </Link>
        <div className='flex  flex-col gap-1 w-full'>
          {panelItems.map((item,index)=> 
        { 
          
          index==selectedIndex?console.log(index):'';
          
          return  <PanelItem path={item.path} setSelectedIndex={setSelectedIndex} key={index} icon={item.icon} index={index} selectedIndex={selectedIndex} title={item.title}/>

        }  
        )}
        </div>
    </div>
  )
}

export default DashboardPanel