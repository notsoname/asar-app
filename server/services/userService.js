const bcrypt = require('bcrypt');
const uuid = require('uuid');
const MailService = require('./MailService');
const UserModel = require('../models/UserModel');
const UserDto = require('../dtos/UserDto');
const ApiError = require('../exceptions/apiError');
const TokenService = require('./TokenService');

class UserService {
    async registration(email, password, nickname) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь ${email} существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({email, nickname, password: hashPassword, activationLink})
        // await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated, nickname
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async login(nickname, password) {
        const user = await UserModel.findOne(nickname)
        if (!user) {
            throw ApiError.BadRequest(`Логин/пароль неверный`)
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Логин/пароль неверный')
        }
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto});

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await TokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }


    async activate(activateLink) {
        const user = await UserModel.findOne(activateLink)
        if (!user) {
            throw ApiError.BadRequest("Некорректная ссылка")
        }
        user.isActivated = true;
        await user.save();
    }

    async getUsers(currentUser) {
        const users = await UserModel.find(
            {
            _id: { $ne: currentUser }
            }
        ).select([
            "email",
            "nickname",
            "avatar",
            "_id"
        ]);
        return users;
    }

    async getUser(nickname, currentUser) {
        if (!nickname) {
            throw ApiError.BadRequest("Пользователь не найден")
        }
        const user = await UserModel.find(
            {
            "$or":[
                {nickname: {$regex: nickname}},
                ]
            },
            // { _id: { $ne: currentUser } }
            )
        return user;
    }
}

module.exports = new UserService();