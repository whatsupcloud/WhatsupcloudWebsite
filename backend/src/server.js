import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: false }));
app.use(express.json({ limit: "20kb" }));
app.use(morgan("tiny"));

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "WhatsUpCloud API" });
});

app.use("/contact", contactRouter);

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(error.status || 500).json({
    message: error.message || "Something went wrong."
  });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is required.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`WhatsUpCloud API running on port ${port}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
