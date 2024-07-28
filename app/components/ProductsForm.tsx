import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toast';
import UploadThingButton from './UploadThingButton';
import Image from 'next/image';
import UploadProductsImagesButton from './UploadProductImagesButton';
// const productsForm = ({formType}:{formType:string}) => {
const ProductsForm = (params:{productID:string}) => {
    console.log(params)
    const router= useRouter();
    const [productName,setProductName]=useState('');
    const [description,setDescription]=useState('');
    const [categoryID,setCategoryID]=useState('');
    const [categories,setCategories]=useState<any[]>([]);
    const [price,setPrice]=useState(0);
    const [imagesUrl,setImagesUrl]=useState<string[]>([]);
    const [imageUrl,setImageUrl]=useState('');

    const fetchCategories = async () => {
        const res =await axios('/api/categories')
        // const res =await axios('/api/categories2')
        // if(res.data.json().ok){
    
          setCategories(res.data);
          console.log(res);
        
        // }
      }

    
    // const [categoryData,setCategoryData]=useState(<any>{});
            const [productData,setProductData]=useState<any>({productName: '', description: '',categoryID:''});
            async function deleteProductImage(value:string) {
                console.log(value)
                    try{
    
                        await axios.delete("/api/uploadthing", {
                          data: {
                            url: value,
                          },
                        });
                        const imagesAfterDelete: any[]=[]
                         imagesUrl.map(image =>{
                            image !== value && imagesAfterDelete.push(image)
                        } )  
                    setImagesUrl(imagesAfterDelete);                 }
                    catch(err){
                    console.log(err);}  
            }
            // const deleteProductImage = async (value:string) => {
            //     console.log('clicked')
            //     try{

            //         await axios.delete("/api/uploadthing", {
            //           data: {
            //             url: value,
            //           },
            //         });
            //     }
            //     catch(err){
            //     console.log(err);}    
            //   };
    
            async function getProductData(){

     const res=await  axios.get(`/api/products/edit/${params.productID}`)
     console.log(res)
   await  setProductData(res.data);
   await setProductName(res.data.productName)
   await setDescription(res.data.description)
   await setCategoryID(res.data.categoryID)
   await setPrice(res.data.price)
        //    await setImages(...[res.data.imgUrl])
    await setImagesUrl(res.data.imagesUrl)
    }
    useEffect(() => {
        fetchCategories();
        if(params.productID!==''){
            getProductData();
        }
     
        }, [])
    // const submit=(e:Event) => {
    //     e.preventDefault();
    // }
    async function createOrUpdateProduct(e:React.FormEvent<HTMLFormElement>): Promise<void>{
        e.preventDefault();
        const data={productName:productName,description:description,imagesUrl:imagesUrl,categoryID:categoryID,price:price}
        if(params.productID==''){

            await axios.post('/api/products/',data)
           await toast.success('added successfully');
        }
        else{
            await axios.put(`/api/products/edit/${params.productID}`,data)
            await toast.success('updated successfully');
        }
       router.push('/products')

    }
    // async function editCategory(e:React.FormEvent<HTMLFormElement>): Promise<void>{
    //     e.preventDefault();
    //     const data={categoryName:categoryName,description:description,imgUrl:"www.elhamdullah.com"}
    // }
  return (
    <form 
    onSubmit={createOrUpdateProduct}
    className='w-full min-h-screen h-auto flex flex-col gap-1 justify-start'>
        {params.productID!==''?<h1>Edit product</h1>:<h1>Add new product</h1> }
        
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='productName' >product name</label>
        <input 
        value={productName}
        onChange={e=>setProductName(e.target.value)}
        type='text' id='productName' name='productName' required />
        </div>
        <div className='flex flex-col gap-1 text-gray-400'>

        <label  htmlFor='Images' >Images</label>
        <div className='flex w-auto gap-3 '>
        {imagesUrl.length !== 0 &&  imagesUrl.map((image)=>
             <div  key={image} className='relative w-40 h-52 rounded-md border-2 border-gray-600'>
                 <div 
                 onClick={()=>{
                    console.log(image)
                    deleteProductImage(image)}}
                 className='rounded-sm z-30 w-4 h-4 bg-red-500 absolute top-2 text-center flex justify-center items-center p-2 cursor-pointer text-white left-2'>x</div>
                <Image fill={true} alt={image} src={image}></Image>
                
            </div>
            )
            }

        <UploadProductsImagesButton imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />
  
        </div>
        </div>       
        <div className='flex  w-full flex-col gap-2 text-gray-400'>
        <label  htmlFor='desc' >description</label>
        <textarea 
        onChange={e=>setDescription(e.target.value)}
        value={description}
        id='description' name='description'></textarea>
        </div>
        <div className='flex justify-center items-center w-full gap-3 p-2'>
            <div className='flex-1 flex-col gap-1'>
            <label className=' text-gray-400' htmlFor='category' >category</label>
            <select value={categoryID} onChange={(e)=>{
                setCategoryID(e.target.value);
        //    console.log(categoryID)
           }} id="categories" className="min-w-[300px]   focus:border-2 text-sm rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 bg-white border-2 border-gray-600 placeholder-gray-400 text-gray-400 ">

                <option className='border-purple-700 p-2 focus:bg-gray-500  bg-white border-2' disabled selected>category</option>
              {
                categories.map((category)=>
                    <option key={category._id} value={category._id} className='border-purple-700 p-2 focus:bg-gray-500  bg-white border-2' selected>{category.categoryName}</option>

                )
                    
              }
            </select>
        {/* <input 
        value={productName}
        onChange={e=>setProductName(e.target.value)}
        type='text' id='productName' name='productName' required /> */}

            </div>
            <div className='flex-1 flex-col gap-1 text-gray-400 p-0 text-sm'>
            <label  htmlFor='price' >price</label>
        <input 
        className='p-0 mb-0 '
        value={price}
        onChange={e=>{
            (Number(e.target.value))>0 && setPrice(Number(e.target.value))
        }}
        type='number' id='price' name='price' required />
            </div>
        </div>
        <div className='flex justify-center'>
            <button
             className='cursor-pointer bg-purple-700 hover:bg-purple-800 rounded-md px-4 py-2' type='submit'>Save</button>
        </div>
    </form>  )
}

export default ProductsForm