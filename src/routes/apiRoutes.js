const express = require("express");
const igAPI = require("../api/igAPI");

const apiRoutes = express();

// Proxy request from client to Instagram via backend
apiRoutes.get("/ig/:username", async (req, res) => {
    const username = req.params.username;
    try {
        const data = await igAPI(username); // Backend fetch
        res.json(data); // Send the Instagram profile data back to client
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ error: "Failed to fetch data" });
    }
});

module.exports = apiRoutes;
