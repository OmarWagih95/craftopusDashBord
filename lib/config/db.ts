import mongoose from "mongoose";

export const ConnectDB = async() => {
    console.log('first');
    await mongoose.connect('mongodb+srv://omarwagih95:Wiigfc27121995!@cluster0.44pjbzy.mongodb.net/craftopus?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('MongoDB Connected...');
};