export async function pingController(req, res) {
  res.status(200).json({
    message: "pong"
  });
}

