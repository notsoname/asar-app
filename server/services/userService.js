const bcrypt = require('bcrypt');
const uuid = require('uuid');
const MailService = require('./MailService');
const UserModel = require('../models/UserModel');
const tokenService = require('./TokenService');
const UserDto = require('../dtos/UserDto');


class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`User ${email} exist`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await MailService.sendActivationMail(email, activationLink)

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}

module.exports = new UserService();