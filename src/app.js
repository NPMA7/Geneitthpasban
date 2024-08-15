const express = require("express")
const path = require("path")
const pool = require("./config/db")
const imageRoutes = require("./routes/imageRoutes");
const testRoutes = require("../test/testRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();


app.use(express.static(path.join(__dirname, '../public/'))); // Menyajikan file statis dari folder public

// Global Routes
app.get('/carousel', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view', 'carousel.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view', 'gallery.html'));
});
// Endpoint untuk memeriksa koneksi database
app.get('/health-check', async (req, res) => {
    try {
        await pool.query('SELECT 1'); // Query sederhana untuk memeriksa koneksi
        res.status(200).send('Database is connected');
    } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).send('Database connection error');
    }
});

// Image Routes
app.use('/api', imageRoutes, apiRoutes);

// Tets Routes
app.use('/test', testRoutes)


module.exports = app;
