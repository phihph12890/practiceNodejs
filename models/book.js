import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    author: {
        type: String
    }
},{ timestamps: true })

module.exports = mongoose.model("Book", bookSchema);