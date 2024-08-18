import Student from "../models/student.model.js";
import Senpai from "../models/senpai.model.js";
import bcrypt from "bcrypt";
import generateTokenAndCreateCookie from "../utils/createCookie.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({
      email,
    });
    if (!user) return res.status(404).json({ error: "User does not exist" });
    const passwordMatch = bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(404).json({ error: "Invalid Credentials" });
    generateTokenAndCreateCookie(user.userId, res);
    return res.status(200).json({ user });
  } catch (error) {
    console.log("Error in login controller due to ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const {
      fullname,
      password,
      confirmPassword,
      email,
      role,
      gender,
      universityName,
    } = req.body;
    const Model = Student;

    const user = await Model.findOne({ email });
    if (user)
      return res.status(404).json({ error: "Email already Registered" });
    if (password.length < 8)
      return res
        .status(400)
        .json({ error: "Password must atleast contain 8 letters" });

    if (password !== confirmPassword)
      return res.status(404).json({ error: "Passwords dont match" });

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Model({
      fullname,
      password: hashedPassword,
      email,
      role,
      gender,
      avatar: gender === "male" ? boyProfilePic : girlProfilePic,
      universityName,
    });

    const userId = newUser._id;
    generateTokenAndCreateCookie(userId, res);
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    console.log("Error in signup controller due to ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwtToken", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller due to ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
