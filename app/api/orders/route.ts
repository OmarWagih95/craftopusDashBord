import { ConnectDB } from "@/lib/config/db";
import ordersModel from "@/lib/models/ordersModel";
import { NextApiRequest } from "next";
import { NextApiRequestCookies, NextApiRequestQuery } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

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
    const res= await ordersModel.find().sort({'createdAt':-1}).select('-__v');
    console.log(res);
    return NextResponse.json(res)

}
export async function PUT(req:any){

    console.log('working');
    const orderID=await req.nextUrl.searchParams.get('orderID')
    console.log(orderID);
    const orderStatus=await req.json()  ; 
    console.log(orderStatus) 
    // const orderStatus=await req.nextUrl.searchParams.get('orderStatus')
    // console.log(orderStatus);
    // const orderID=await req.json()  ;  
    const res= await ordersModel.findByIdAndUpdate(orderID,orderStatus,{new:true});
    console.log(res);
    return NextResponse.json(res)

}

// export async function POST(request:Request){
//     console.log('here')
//     const newProduct=await request.json();
//     console.log(newProduct.productName);
//     console.log(newProduct.description);
//     console.log(newProduct.price);
//     console.log(newProduct.categoryID);
   
//    try {
//        const savedProduct =
//        await productsModel.create({
//         productName:newProduct.productName,
//         description:newProduct.description,
//         imagesUrl:newProduct.imagesUrl,
//         price:newProduct.price,categoryID:newProduct.categoryID})
//     //    console.log(savedCategory.categoryName);
//        // const savedCategory =await new categoriesModel({...newCategory}).save();
//        // console.log(savedCategory.title);
//     //    return NextResponse.json({msg:'done'}),{
//     //        status:200
//     //    }
//        return new Response(JSON.stringify(savedProduct),{
//            headers: { 'Content-Type': 'application/json' },
//                status:201
           
//        }
   
//        )
//    }
//    catch(error:any){

//     //  return NextResponse.json({msg:'error'}),
//     //  {status:500}
//     return Response.json({ error: error.message }, { status: 500 });
//  }
       
//    //  console.log('working');
//    //  return NextResponse.json({msg:'working'})
   
//    }

   export async function DELETE(request:any){
    console.log('working');
    const orderID=await request.nextUrl.searchParams.get('orderID')
    console.log(orderID)
    
    console.log('working');
    try {
        const res= await ordersModel.findByIdAndDelete(orderID)
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
    catch(error:any){

        //  return NextResponse.json({msg:'error'}),
        //  {status:500}
        return Response.json({ error: error.message }, { status: 500 });
     }
   

}
   