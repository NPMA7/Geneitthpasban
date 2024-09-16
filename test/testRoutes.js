const express = require("express")
const path = require("path");
const testRoutes = express();


// Tets Routes
testRoutes.use(express.static(path.join(__dirname, './test'))); // Menyajikan file statis dari folder public

testRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

module.exports = testRoutes;
