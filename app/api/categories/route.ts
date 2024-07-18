import { NextResponse } from "next/server";
import {ConnectDB} from "@/lib/config/db"
import productsModel from "@/lib/models/productsModel"
import { headers } from "next/headers";
import categoriesModel from "@/lib/models/categoryModel";

const loadDB =async()=>{
    console.log('hna');
    await ConnectDB();
}

loadDB();

export async function GET(){
  try {

      const res= await categoriesModel.find();
      // const res= await categoriesModel.findOne({_id:categoryID.categoryID}).select('-__v');
      console.log(res);
      return NextResponse.json(res)
  }
  catch(err){
   return NextResponse.json({messeage:'items not found'})  
  }

        console.log('working');
   

}
export async function DELETE(request:Request){
    console.log('working');
    const req=await request.json()
    console.log(req)
    
    console.log('working');
    try {
        const res= await categoriesModel.findByIdAndDelete(req.categoryID)
        console.log(res);
        // const savedCategory =await new categoriesModel({...newCategory}).save();
        // console.log(savedCategory.title);
        // return NextResponse.json({msg:'done'}),{
        //     status:200
        // }
        // return NextResponse.json({msg:'deleted succesfully'}),
        // {status:200}
     return new Response(JSON.stringify(res),{
            headers: { 'Content-Type': 'application/json' },
                status:201
            }
        )
   
    }
     catch(err){
    
         return NextResponse.json({msg:'error'}),
         {status:500}
     }
   

}
export async function POST(request:Request){
 const newCategory=await request.json();
 console.log(newCategory.categoryName);

try {
    const savedCategory =
    await categoriesModel.create({categoryName:newCategory.categoryName,description:newCategory.description,imgUrl:newCategory.imgUrl})
    console.log(savedCategory.categoryName);
    // const savedCategory =await new categoriesModel({...newCategory}).save();
    // console.log(savedCategory.title);
    // return NextResponse.json({msg:'done'}),{
    //     status:200
    // }
    return new Response(JSON.stringify(savedCategory),{
        headers: { 'Content-Type': 'application/json' },
            status:201
        
    }

    )
}
 catch(err){

     return NextResponse.json({msg:'error'}),
     {status:500}
 }
    
//  console.log('working');
//  return NextResponse.json({msg:'working'})

}
