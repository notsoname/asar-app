module.exports = class UserDto {
    email;
    id;
    isActivated;
    nickname;
    avatar;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.nickname = model.nickname;
        this.avatar = model.avatar;
    }
}