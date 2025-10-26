// middleware/authUser.js
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.json({ success: false, message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      return res.json({ success: false, message: "Invalid token" });
    }

    // ✅ Assign correctly
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
