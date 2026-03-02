export default function handler(req, res) {
  return res.status(200).json({
    testVariable: process.env.TEST || null
  });
}