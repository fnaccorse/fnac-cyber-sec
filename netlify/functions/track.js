const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Méthode non autorisée",
    };
  }

  try {
    const data = JSON.parse(event.body);
    const userAgent = event.headers["user-agent"] || "inconnu";

    // ➤ Détection du navigateur
    let browser = "Inconnu";
    if (/chrome/i.test(userAgent)) browser = "Chrome";
    else if (/firefox/i.test(userAgent)) browser = "Firefox";
    else if (/safari/i.test(userAgent)) browser = "Safari";
    else if (/edg/i.test(userAgent)) browser = "Edge";

    // ➤ Détection device
    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
    const device = isMobile ? "mobile" : "desktop";

    await client.connect();
    const db = client.db("cyber-awareness");
    const collection = db.collection("events");

    await collection.insertOne({
      type: data.type,
      timestamp: new Date(data.timestamp),
      source: data.source || "direct",
      browser,
      device,
      userAgent
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Événement enregistré." }),
    };
  } catch (err) {
    console.error("❌ ERREUR :", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
