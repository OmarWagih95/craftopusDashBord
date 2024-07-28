import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toast';
import UploadThingButton from './UploadThingButton';
import Image from 'next/image';
// const CategoriesForm = ({formType}:{formType:string}) => {
const CategoriesForm = (params:{categoryID:string}) => {
    console.log(params)
    const router= useRouter();
    const [categoryName,setCategoryName]=useState('');
    const [description,setDescription]=useState('');
    const [images,setImages]=useState([]);
    const [imageUrl,setImageUrl]=useState('');

    
    // const [categoryData,setCategoryData]=useState(<any>{});
            const [categoryData,setCategoryData]=useState<any>({categoryName: '', description: ''});

    async function getCategoryData(){

     const res=await  axios.get(`/api/categories/edit/${params.categoryID}`)
     console.log(res)
   await  setCategoryData(res.data);
   console.log(res.data.categoryName)
   await setCategoryName(res.data.categoryName)
   await setDescription(res.data.description)
        //    await setImages(...[res.data.imgUrl])
    await setImageUrl(res.data.imgUrl)
    }
    useEffect(() => {
        if(params.categoryID!==''){
            getCategoryData();
        }
     
        }, [])
    // const submit=(e:Event) => {
    //     e.preventDefault();
    // }
    async function createOrUpdateCategory(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(imageUrl)
        const data={categoryName:categoryName,description:description,imgUrl:imageUrl}
        if(params.categoryID==''){

            await axios.post('/api/categories/',data)
           await toast.success('added successfully');
        }
        else{
            await axios.put(`/api/categories/edit/${params.categoryID}`,data)
            await toast.success('updated successfully');
        }
       router.push('/categories')

    }
    // async function editCategory(e:React.FormEvent<HTMLFormElement>): Promise<void>{
    //     e.preventDefault();
    //     const data={categoryName:categoryName,description:description,imgUrl:"www.elhamdullah.com"}
    // }
  return (
    <form 
    onSubmit={createOrUpdateCategory}
    className='w-full h-auto flex flex-col gap-2 justify-start'>
        {params.categoryID!==''?<h1>Edit category</h1>:<h1>Add new category</h1> }
        
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='categoryName' >category name</label>
        <input 
        value={categoryName}
        onChange={e=>setCategoryName(e.target.value)}
        type='text' id='categoryName' name='categoryName' required />
        </div>
        <div className='flex flex-col gap-1 text-gray-400'>

        <label  htmlFor='Images' >Images</label>
        <div className='flex w-auto gap-3'>
            <div  className='relative w-40 h-52 rounded-md border-2 border-gray-600'>
            {imageUrl !==''&&
                <Image fill={true} alt={imageUrl} src={imageUrl}></Image>
            }
            </div>
        <UploadThingButton oldUrl={imageUrl} setImageUrl={setImageUrl} />
  
        </div>
        </div>       
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='categoryName' >description</label>
        <textarea 
        onChange={e=>setDescription(e.target.value)}
        value={description}
        id='description' name='description'></textarea>
        </div>
        <div className='flex justify-center'>
            <button
             className='cursor-pointer bg-purple-700 hover:bg-purple-800 rounded-md px-4 py-2' type='submit'>Save</button>
        </div>
    </form>  )
}

export default CategoriesForm