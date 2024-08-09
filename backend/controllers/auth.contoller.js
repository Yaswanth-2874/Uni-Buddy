import Student from "../models/student.model.js";
import Senpai from "../models/senpai.model.js";
import bcrypt from "bcrypt";
import generateTokenAndCreateCookie from "../utils/createCookie.js";

export const login = (req, res) => {
  res.json({ test: "working" });
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
    const Model = role === "student" ? Student : Senpai;

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
