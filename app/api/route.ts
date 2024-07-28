import { NextResponse } from "next/server";
import {ConnectDB} from "@/lib/config/db"
import productsModel from "@/lib/models/productsModel"
import { headers } from "next/headers";

const loadDB =async()=>{
    console.log('hna');
    await ConnectDB();
}

loadDB();

export async function GET(){
    // const categoryID =await req.json()
    // if(categoryID){

    // }
    console.log('working');
    const res= await productsModel.find().select('-__v');
    console.log(res);
    return NextResponse.json(res)

}
export async function POST(request:Request){
 const newProduct=await request.json();
 console.log(newProduct.productName);

try {
    const savedProduct =await new productsModel({...newProduct}).save();
    console.log(savedProduct.title);
    // return NextResponse.json({msg:'done'}),{
    //     status:200
    // }
    return new Response(JSON.stringify(savedProduct),{
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
