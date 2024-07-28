import { ConnectDB } from "@/lib/config/db";
import categoriesModel from "@/lib/models/categoryModel";
import productsModel from "@/lib/models/productsModel";
import { NextResponse } from "next/server";

const loadDB =async()=>{
    console.log('hna');
    await ConnectDB();
}

loadDB();

export async function GET(request: Request,{params}:{params:any}){
    console.log(params)
  try {

    //   const res= await categoriesModel.find();
      const res= await productsModel.findById(params.productID);
    //   const res= await categoriesModel.findById({_id:params.categoryID});
      console.log(res);
      return NextResponse.json(res)
  }
  catch(err){
    console.log(params.categoryID)
   return NextResponse.json({messeage:'items not found'})  
  }

        console.log('working');
   

}

export async function PUT(request: Request,{params}:{params:any}){
  console.log(params)
  const data=await request.json()
  console.log(data);

  try {

    //   const res= await categoriesModel.find();
      const res= await productsModel.findByIdAndUpdate(params.productID,data,{new:true});
    //   const res= await categoriesModel.findById({_id:params.categoryID});
      console.log(res);
      return NextResponse.json(res)
  }
  catch(err){
  }
}