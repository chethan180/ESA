import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { Product } from './controllers/Product.js';

import dotenv from 'dotenv';
import product from './models/product.js';
dotenv.config();

let mongoid = process.env.SECRET_MONGO_USER;
let pswrd = process.env.SECRET_MONGO_PSWD;

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use("/info" , verifytoken ,Info);
app.get("/product" , Product);

const CONNECTION_URL = `mongodb+srv://${mongoid}:${pswrd}@cluster0.p6xod.mongodb.net/ESA?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

// await user.create({
//   User_Id: "19XJ1A0513",
//   User_Name: "BOINIPALLI CHETHAN RAO",
//   Email: "boinipalli1913@mechyd.ac.in",
//   Contact: "1234567890",
//   Designation: "hkr",
//   Type: "Student",
//   Password: "$2y$10$CO2GlQhh1NbBqJBYAyjBM.G88IhIJW13Z9U7x3BjXzAWJfMndSGV6",
//   Batch: "scxc",
//   // Reset_Token: "cc",
//   // Reset_Expire: "cc",
// });

// await product.create({
//   "productId": "12445dsd234",
//   "category": "Modile",
//   "productName": "Samsung",
//   "productModel": "GalaxyNote",
//   "price": "700",
//   "availableQuantity": "10"
// });

// await plan.create({
//   Plan_id : "2",
//   Plan_Name: "30 Days",
//   Price : "8000",
//   Description : "If used more than 25 days amount will not be refunded",
// });