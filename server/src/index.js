import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import plantRoutes from './routes/plants.js';

dotenv.config();

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

const origin = process.env.CORS_ORIGIN?.split(',').map(s => s.trim());
app.use(cors({ origin, credentials: false }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.use('/api/plants', plantRoutes);

const PORT = process.env.PORT || 8080;

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on :${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection failed', err);
    process.exit(1);
  });