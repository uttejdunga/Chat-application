import jwt from "jsonwebtoken";
const JWT_SECRET = "SECRET";

export const generateToken = (userId , res) => {
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn : "7d",
    });

    res.cookie("jwt",token,{
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
        sameSite : "strict",
        secure : false
    });

    return token;
};