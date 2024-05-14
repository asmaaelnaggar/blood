const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL="mongodb://asmaaelnaggar22:4ST2jEs6RiJbsUBT@ac-f58duxc-shard-00-00.v1vcdue.mongodb.net:27017,ac-f58duxc-shard-00-01.v1vcdue.mongodb.net:27017,ac-f58duxc-shard-00-02.v1vcdue.mongodb.net:27017/?ssl=true&replicaSet=atlas-r8u8p2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;