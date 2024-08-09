import jwt from "jsonwebtoken";

const generateTokenAndCreateCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d",
  });
  res.cookie("jwtToken", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndCreateCookie;
