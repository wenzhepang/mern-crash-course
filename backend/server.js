import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();//this is the dotenv config

const app = express();//this is the express app

const PORT = process.env.PORT || 3000;
app.use(express.json()); //allows us to parse the body of the request

app.use("/api/products", productRoutes);//this is the route for the products
app.get('/api/hello', (req, res) => {
    res.json({ message: '后端已经收到请求了！' });
  });

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});

