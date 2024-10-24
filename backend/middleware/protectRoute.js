import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised - No Token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token provided" });
    }
    
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in Protect Route Controller due to ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
