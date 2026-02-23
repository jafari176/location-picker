export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const response = await fetch(
      "https://krunaln8n.work.gd/webhook/a592e680-bcf6-4d41-9fa3-75bcee559abd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.text();

    res.status(200).json({
      success: true,
      webhookResponse: data,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Webhook call failed",
    });
  }
}