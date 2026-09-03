const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accessSecret = process.env.JWT_ACCESS_SECRET || "development-access-secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET || "development-refresh-secret";

const createTokens = (user) => {
    const payload = { id: user.id, role: user.role };
    const accessToken = jwt.sign(payload, accessSecret, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "7d" });

    return { accessToken, refreshToken };
};

const hashToken = (token) => bcrypt.hash(token, 10);

module.exports = { createTokens, hashToken };
