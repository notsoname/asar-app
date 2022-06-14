const TokenModel = require('../models/TokenModel.js');
const jwt = require('jsonwebtoken');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, "asarAccess", {
            expiresIn: '30m'
        })
        const refreshToken = jwt.sign(payload, "asarRefresh", {
            expiresIn: '30d'
        })
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await TokenModel.create({userId, refreshToken})
        return token;
    }
}

module.exports = new TokenService();