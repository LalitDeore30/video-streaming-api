const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const videoRoutes = require("./src/routes/videoRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
