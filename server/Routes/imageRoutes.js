const express = require('express');
const router = express.Router();
const multer = require('../Utils/multerConfig');
const {
    uploadImage,
    getAllImages,
    getImageById
} = require('../Controllers/imageController');

router.post('/upload', multer.single('image'), uploadImage);
router.get('/images', getAllImages); 
router.get('/images/:id', getImageById);

module.exports = router;
