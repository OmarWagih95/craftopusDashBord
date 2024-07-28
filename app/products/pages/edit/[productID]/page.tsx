'use client'
import CategoriesForm from '@/app/components/CategoriesForm';
import ProductsForm from '@/app/components/ProductsForm';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditProductPage  ({params}:{params:{productID:string}})  {

    const productID =params.productID
    const [productData,setProductData]=useState(null)
    console.log(`${productID}`)
    useEffect(() => {
    // axios.get(`/api/products/edit/${productID}`)
 
    }, [])
    
    return ( 
        <div className='flex  px-4 py-4 justify-center min-h-screen h-auto items-center bg-white'>
        
        <ProductsForm productID={productID}/>
        {/* <CategoriesForm {...categoryData}/> */}
                </div>
    
     
);
}

