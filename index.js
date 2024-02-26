import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "Backend",
  })
  .then(console.log("database connected"))
  .catch((e) => console.log(e));
const app = express();

//create schema first

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});
//create model means collection (messages)
const Message = mongoose.model("Message", messageSchema);

app.get("/add", async (req, res) => {
  await  Message.create({
    name: "Shubham2222",
    email: "nikamshubham2242222222222@gmail.com",
  });
  res.send("NICE");
});

app.listen(5000, () => console.log("server running on port  5000"));
