import mongoose, { mongo } from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://srikar6:Drow$ap9015@cluster0.mpcj8.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
