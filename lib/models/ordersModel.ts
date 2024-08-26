const { default: mongoose } = require("mongoose");

const Shcema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    products:{
        type:Array,
    },
    whatsappNumber:{
        type:String,
    },
    notes:{
        type:String,
    },
    address:{
        type:String,
    },
    deposite:{
        type:Number,
    },
    orderStatus:{
        type:String,
        default:"placed"
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }


    });

    const ordersModel= mongoose.models.orders || mongoose.model('orders', Shcema)

    export default ordersModel;