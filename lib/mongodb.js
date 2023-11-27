// mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log('Connected to MongoDB');

  return db;
}

export default connectDB;
