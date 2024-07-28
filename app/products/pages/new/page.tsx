'use client'
import CategoriesForm from '@/app/components/CategoriesForm';
import ProductsForm from '@/app/components/ProductsForm';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toast';


const Page = () => {

  return (
    <div className='flex w-full px-4 py-4 justify-center min-h-screen h-auto items-center bg-white' >
        <ToastContainer delay={3000} position='bottom-center'/>
        <ProductsForm productID=''/>
      
    </div>
  )
}

export default Page