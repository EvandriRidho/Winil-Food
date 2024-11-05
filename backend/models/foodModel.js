import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter food name"],
    },
    desription: {
        type: String,
        required: [true, "Please enter food description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter food price"],
    },
    category: {
        type: String,
        required: [true, "Please enter food category"],
    },
    image: {
        type: String,
        required: [true, "Please enter food image"],
    }

})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel