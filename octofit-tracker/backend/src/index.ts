import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }

  app.listen(PORT, () => {
    console.log(`OctoFit backend running on port ${PORT}`);
  });
};

void start();