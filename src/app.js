const axios = require('axios');
const express = require("express");
const path = require("path");
const pool = require("./config/db");
const imageRoutes = require("./routes/imageRoutes");
const testRoutes = require("../test/testRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

// Proxy route for Instagram image
app.get('/instagram-image-proxy', async (req, res) => {
    const imageUrl = req.query.url; // Ambil URL dari parameter query
    
    try {
        const response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'arraybuffer'
        });
        
        const contentType = response.headers['content-type'];
        res.set('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Failed to load image');
    }
});

app.use(express.static(path.join(__dirname, '../public/'))); // Menyajikan file statis dari folder public

// Global Routes
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

// Test Routes
app.use('/test', testRoutes)


module.exports = app;
