import { ConnectDB } from "@/lib/config/db";
import productsModel from "@/lib/models/productsModel";
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
    const res= await productsModel.find().select('-__v');
    console.log(res);
    return NextResponse.json(res)

}

export async function POST(request:Request){
    console.log('here')
    const newProduct=await request.json();
    console.log(newProduct.productName);
    console.log(newProduct.description);
    console.log(newProduct.price);
    console.log(newProduct.categoryID);
   
   try {
       const savedProduct =
       await productsModel.create({
        productName:newProduct.productName,
        description:newProduct.description,
        imagesUrl:newProduct.imagesUrl,
        price:newProduct.price,categoryID:newProduct.categoryID})
    //    console.log(savedCategory.categoryName);
       // const savedCategory =await new categoriesModel({...newCategory}).save();
       // console.log(savedCategory.title);
    //    return NextResponse.json({msg:'done'}),{
    //        status:200
    //    }
       return new Response(JSON.stringify(savedProduct),{
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
       
   //  console.log('working');
   //  return NextResponse.json({msg:'working'})
   
   }

   export async function DELETE(request:Request){
    console.log('working');
    const req=await request.json()
    console.log(req)
    
    console.log('working');
    try {
        const res= await productsModel.findByIdAndDelete(req.productID)
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
   