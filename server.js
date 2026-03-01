const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/server/:id", async (req, res) => {
  const serverId = req.params.id;

  try {
    const response = await axios.get(
      `https://api.arizona-rp.com/server/${serverId}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Ошибка получения данных" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
