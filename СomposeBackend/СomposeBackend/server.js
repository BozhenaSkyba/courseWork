require("dotenv").config();
const express = require("express");
const app = express();

const contactRoutes = require("./routes/contact");
const mongo = require("./mongo");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use("/contact", contactRoutes);

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log("Connected");
    } catch {
      mongoose.connection.close();
    }
  });
  await app.listen(process.env.PORT);
};

connectToMongoDB();
