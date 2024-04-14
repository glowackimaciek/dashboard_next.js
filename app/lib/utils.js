import mongoose from "mongoose";

export const connectToDB = async () => {

    const connection = {}

    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = mongoose.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}