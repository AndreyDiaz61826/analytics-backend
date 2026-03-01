const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/server/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await fetch(`https://api.gamemonitoring.ru/servers/${id}`);
    const data = await response.json();

    res.json({
      online: data.numplayers || 0,
      max: data.maxplayers || 0,
      status: data.online ? "online" : "offline"
    });
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения данных" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
