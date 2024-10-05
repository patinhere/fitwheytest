import express from "express";
import cors from "cors";
import getProducts from "./getProducts.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,OPTIONS,POST,PUT",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-api-key",
  credentials: true,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === "secretkey") next();
  else return res.status(401).json({ message: "Unauthorized" });
});
app.use("/api/detail", getProducts);

app.listen(8800, () => {
  console.log("Connected");
});
