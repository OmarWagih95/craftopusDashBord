'use client'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'

const PanelItem = ({icon,index,title,selectedIndex,setSelectedIndex,path}:
    {icon:any,index:Number,title:String,selectedIndex:Number,setSelectedIndex:Function,
        path: string
    }) => {
        
        const router=useRouter()
        return (
    <div onClick={()=>{
        setSelectedIndex(index);
        router.push(path)
    }}  className={`cursor-pointer flex justify-start items-center  px-2 py-2 gap-2 rounded-s-lg w-full ${index==selectedIndex?'bg-white text-purple-700':'bg-purple-700 text-white'} `}>
              
    
              {icon}
              <h2 className={`${index==selectedIndex?'text-purple-700':'text-white'}`}>
              {title}

              </h2>
          </div>
  )
}

export default PanelItem