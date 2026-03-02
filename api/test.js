export default function handler(req, res) {
  return res.status(200).json({
    testVariable: process.env.GOOGLE_MAPS_API_KEY || null
  });
}