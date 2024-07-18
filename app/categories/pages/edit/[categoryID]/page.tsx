'use client'
import CategoriesForm from '@/app/components/CategoriesForm';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditCategoryPage  ({params}:{params:{categoryID:string}})  {

    const categoryID =params.categoryID
    const [categoryData,setCategoryData]=useState(null)
    console.log(`${categoryID}`)
    useEffect(() => {
    axios.get(`/api/categories/edit/${categoryID}`)
 
    }, [])
    
    return ( 
        <div className='flex w-full px-4 py-4 justify-center h-screen items-center bg-white'>
        
        <CategoriesForm categoryID={categoryID}/>
        {/* <CategoriesForm {...categoryData}/> */}
                </div>
    
     
);
}

