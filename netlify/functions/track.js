const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Méthode non autorisée',
    };
  }

  try {
    const data = JSON.parse(event.body);

    await client.connect();
    const db = client.db("cyber-awareness");
    const collection = db.collection("events");

    await collection.insertOne({
      type: data.type,
      timestamp: new Date(data.timestamp),
      userAgent: event.headers["user-agent"]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Événement enregistré." })
    };

  } catch (err) {
    console.error("❌ ERREUR :", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
