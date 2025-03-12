require('dotenv').config(); // charge le .env

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function clean() {
  try {
    await client.connect();
    const db = client.db("cyber-awareness");
    const collection = db.collection("events");

    const result = await collection.deleteMany({});
    console.log(`✅ ${result.deletedCount} documents supprimés`);
  } catch (err) {
    console.error("❌ Erreur :", err);
  } finally {
    await client.close();
  }
}

clean();
