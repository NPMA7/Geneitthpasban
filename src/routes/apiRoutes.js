const express = require("express")
const igAPI = require("../api/igAPI");

const apiRoutes = express();
apiRoutes.get("/ig/:username", async (req, res) => {
    const username = req.params.username;
    try {
      const data = await igAPI(username);
      res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send({ error: "Failed to fetch data" });
    }
  });

module.exports = apiRoutes;
