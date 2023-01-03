require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    // deleteMany to delete pervious old data
    await Product.deleteMany();

    //  add jason data to database
    await Product.create(ProductJson);
    console.log("successfully created data");
  } catch (error) {
    console.log(error);
  }
};

start();
