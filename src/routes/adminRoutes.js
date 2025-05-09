const express = require("express");
const { getPendingVideos, approveVideo, rejectVideo } = require("../controllers/adminController");
const { authenticate, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/pending", authenticate, authorizeRoles("Admin"), getPendingVideos);
router.post("/approve/:id", authenticate, authorizeRoles("Admin"), approveVideo);
router.delete("/reject/:id", authenticate, authorizeRoles("Admin"), rejectVideo);

module.exports = router;
