const express = require("express");
const { uploadVideo } = require("../controllers/videoController");
const { authenticate, authorizeRoles } = require("../middleware/authMiddleware");
const multer = require("../middleware/multer");

const router = express.Router();

router.post(
    "/upload",
    authenticate,
    authorizeRoles("Artist"),
    multer.fields([{ name: "video", maxCount: 1 }, { name: "thumbnail", maxCount: 1 }]),
    uploadVideo
);

module.exports = router;
