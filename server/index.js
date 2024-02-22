import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import useRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.use("/api/v1/users", useRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_DB_URL);

    app.listen(8080, () => {
      console.log(`Server started on port http://localhost:8080`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
