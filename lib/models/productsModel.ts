const { default: mongoose } = require("mongoose");

const Shcema =mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    categoryID:{
        type:Number,
        required:true
    }
    });

    const productsModel= mongoose.models.products || mongoose.model('products', Shcema)

    export default productsModel;