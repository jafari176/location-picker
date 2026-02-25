export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const response = await fetch(
      "https://krunaln8n.work.gd/webhook/webhook-test",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();

    res.status(200).json({
      success: true,
      webhookResponse: text,
    });

  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).json({
      error: "Webhook call failed",
    });
  }
}