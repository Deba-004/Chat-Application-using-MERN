import generateTokenAndSaveCookie from "../jwt/genToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: "This email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            fullName,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        if(newUser) {
            generateTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User created successfully", user: {
                fullName: newUser.fullName,
                email: newUser.email,
                _id: newUser._id
            } });
        }
    } catch (error) {
        console.log("Error in signUp:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!user || !isPasswordMatch) {
            return res.status(400).json({ message: "Invalid User or Password" });
        }
        generateTokenAndSaveCookie(user._id, res);
        res.status(201).json({ message: "User logged in successfully", user: {
            fullName: user.fullName,
            email: user.email,
            _id: user._id
        } });
    } catch (error) {
        console.log("Error in logIn:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(201).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log("Error in logOut:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getUser = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; 
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(201).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}