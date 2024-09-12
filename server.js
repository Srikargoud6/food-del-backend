import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDb();

app.get("/", (req, res) => {
  res.send("API working...");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://srikar6:Drow$ap9015@cluster0.mpcj8.mongodb.net/?
