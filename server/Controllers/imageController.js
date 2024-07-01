const Image = require('../model/image');

const uploadImage = async (req, res) => {
    try {
        const newImage = new Image({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            image: req.file.buffer
        });
        await newImage.save();
        res.status(201).send('Image uploaded successfully');
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getImageById = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        res.contentType(image.contentType);
        res.send(image.image);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = {
    uploadImage,
    getAllImages,
    getImageById
};
