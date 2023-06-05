import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        userId: {
            type: String,
        },
    },
    { timestamps: true }
);


export default mongoose.model("Blog", BlogSchema);