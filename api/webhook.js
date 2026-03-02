export default async function handler(req, res) {

  
  console.log("ENV:", process.env.GOOGLE_MAPS_API_KEY);
  // GET → return API key
  if (req.method === "GET") {
    return res.status(200).json({
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    });
  }


  // POST → forward webhook
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://aylestone-n8n.work.gd/webhook/webhook-aylestone",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        }
      );

      const text = await response.text();

      return res.status(200).json({
        success: true,
        webhookResponse: text,
      });

    } catch (err) {
      return res.status(500).json({
        error: "Webhook call failed",
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}