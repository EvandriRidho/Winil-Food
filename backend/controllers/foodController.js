import foodModel from "../models/foodModel.js"
import fs from "fs";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({ success: true, message: "Food Item Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// remove food items
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Menghapus file gambar secara sinkron atau menggunakan fs.promises untuk proses async
        await fs.promises.unlink(`uploads/${food.image}`);

        await foodModel.findByIdAndDelete(req.body.id);
        return res.json({ success: true, message: "Food Item Deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error" });
    }
};

export { addFood, listFood, removeFood }