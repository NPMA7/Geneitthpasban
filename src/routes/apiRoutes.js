const express = require("express");
const igAPI = require("../api/igAPI");

const apiRoutes = express();

apiRoutes.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Atur CORS
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

apiRoutes.get("/ig/:username", async (req, res) => {
  const username = req.params.username;
  try {
      const data = await igAPI(username);
      console.log("Data from igAPI:", data); // Tambahkan log untuk debugging
      res.json(data);
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send({ error: "Failed to fetch data" });
  }
});

module.exports = apiRoutes;
