import { MongoClient } from 'mongodb';

const URI = process.env.MONGO;

if (!URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Use a global variable to prevent creating multiple clients in a serverless environment
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(URI);

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
