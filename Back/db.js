import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect to DB
export function connectDB() {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  });
}
