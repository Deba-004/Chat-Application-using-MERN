import jwt from "jsonwebtoken";

const generateTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "5d"
    });

    res.cookie("jwt", token, {
        httpOnly: true, // Helps prevent XSS attacks
        secure: true,
        sameSite: "strict", // Helps prevent CSRF attacks
    });
}

export default generateTokenAndSaveCookie;