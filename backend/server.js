import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();//this is the dotenv config

const app = express();//this is the express app

app.use(express.json()); //allows us to parse the body of the request

app.use("/api/products", productRoutes);//this is the route for the products


app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port http://localhost:3000");
});

