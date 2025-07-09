import jwt from "jsonwebtoken";

const generateTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "5d"
    });

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("jwt", token, {
        httpOnly: true, // Helps prevent XSS attacks
        secure: isProduction, // Use secure cookies in production
        sameSite: isProduction ? "strict" : "lax", // Helps prevent CSRF attacks
        maxAge: 5 * 24 * 60 * 60 * 1000 // Cookie expiration time (5 days)
    });
};

export default generateTokenAndSaveCookie;