import { ConnectDB } from "@/lib/config/db";
import categoriesModel from "@/lib/models/categoryModel";
import { NextResponse } from "next/server";

const loadDB =async()=>{
    console.log('hna');
    await ConnectDB();
}

loadDB();
export default async function handle(req:Request, res:Response) {
    const {method}=req;
    if(method==='GET'){
        const categories=await categoriesModel.find().select('-__v')
    // res= categories.json();
    // const res= await categoriesModel.find().select('-__v');
    // console.log(res);
    return Response.json(categories) 
       }
}