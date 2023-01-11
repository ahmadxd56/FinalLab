const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://admin:test@finallab.fx5r7bz.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(mongoUrl, { useNewUrlParser: true, })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((e) => console.log(e));

require("./postModel");
const post = mongoose.model("Post");
app.post("/getdata", async (req, res) => {
    const { name, email, text } = req.body;

});

app.listen(5000, () => {
    console.log("Server Started on Port 5000");
})