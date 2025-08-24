import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import plantRoutes from "./routes/plants.js";

dotenv.config();

const app = express();
const allowedOrigins = process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()) || [];
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));


app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.get("/", (_req, res) => {
  res.send("🚀 Mini-store backend is running!");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.use("/api/plants", plantRoutes);

const PORT = process.env.PORT || 8080;

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  });
