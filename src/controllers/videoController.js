const { v4: uuidv4 } = require("uuid");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");
const { readVideos, writeVideos } = require("../models/videoModel");

const uploadVideo = async (req, res) => {
    try {
        const { title, description, category, genre, version } = req.body;
        const videoFile = req.files?.video?.[0];
        const thumbnailFile = req.files?.thumbnail?.[0];

        if (!videoFile || !thumbnailFile) return res.status(400).json({ message: "Missing files" });

        const videoUpload = await cloudinary.uploader.upload(videoFile.path, { resource_type: "video" });
        const thumbUpload = await cloudinary.uploader.upload(thumbnailFile.path, { resource_type: "image" });

        fs.unlinkSync(videoFile.path);
        fs.unlinkSync(thumbnailFile.path);

        const videos = readVideos();
        const newVideo = {
            id: uuidv4(),
            title,
            description,
            category,
            genre,
            version,
            artistId: req.user.id,
            videoUrl: videoUpload.secure_url,
            thumbnailUrl: thumbUpload.secure_url,
            status: "pending"
        };

        videos.push(newVideo);
        writeVideos(videos);

        res.status(201).json({ message: "Video uploaded", video: newVideo });
    } catch (err) {
        res.status(500).json({ message: "Upload failed", error: err.message });
    }
};

module.exports = { uploadVideo };
