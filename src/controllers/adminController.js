const { readVideos, writeVideos } = require("../models/videoModel");

const getPendingVideos = (req, res) => {
    const videos = readVideos().filter(v => v.status === "pending");
    res.json(videos);
};

const approveVideo = (req, res) => {
    const { id } = req.params;
    const videos = readVideos();
    const video = videos.find(v => v.id === id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    video.status = "approved";
    writeVideos(videos);
    res.json({ message: "Video approved", video });
};

const rejectVideo = (req, res) => {
    const { id } = req.params;
    const videos = readVideos();
    const index = videos.findIndex(v => v.id === id);
    if (index === -1) return res.status(404).json({ message: "Video not found" });

    videos.splice(index, 1);
    writeVideos(videos);
    res.json({ message: "Video rejected and removed" });
};

module.exports = { getPendingVideos, approveVideo, rejectVideo };
