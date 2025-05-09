const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/videos.json");

function readVideos() {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath));
}

function writeVideos(videos) {
    fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));
}

module.exports = { readVideos, writeVideos };
