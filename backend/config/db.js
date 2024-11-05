import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://EvandriRidho:12345@cluster0.j1ajf.mongodb.net/food-delivery").then(() => console.log("DB Connect"))
}
