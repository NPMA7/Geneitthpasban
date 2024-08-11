const express = require('express');
const router = express.Router();
const upload = require('../controllers/uploadController');
const imageController = require('../controllers/imageController');
const db = require('../config/db'); // Impor konfigurasi database

// Endpoint lain
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/images', imageController.getImages);
router.get('/images/:id', imageController.getImageById);
router.delete('/images/:id', imageController.deleteImage); // Tambahkan route delete

module.exports = router;
