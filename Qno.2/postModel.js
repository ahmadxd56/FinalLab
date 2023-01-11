const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

mongoose.model("Post", postSchema);
