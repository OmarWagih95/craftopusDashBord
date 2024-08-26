import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'
import CountUp from 'react-countup'
import { IconType } from 'react-icons'
import { LuPackageCheck } from 'react-icons/lu'

const DashboardCard = ({isInView,endNumber,icon,text}:
    {isInView:boolean,endNumber:number,icon:React.ReactNode,text:string}) => {
  return (
    <div className="flex py-4 h-[20vh] sm:h-auto px-6 w-[90vw] sm:w-[29vw] lg:w-[21vw] gap-5 text-center bg-purple-500 rounded-md flex-col justify-center items-center">
    <h1 className=" font-bold text-[10vw] md:text-[7vw]">
       {
isInView &&
<CountUp start={0} end={endNumber} duration={6}></CountUp>
}
    </h1>
   <div className="flex justify-center text-[5vw] items-center text-center flex-col text-white">
   {icon}

 <h2 className='text-[8vw] sm:text-[4vw] md:text-[2vw]'>{text}</h2>
   </div>
</div>
  )
}

export default DashboardCard