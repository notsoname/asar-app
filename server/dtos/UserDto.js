module.exports = class UserDto {
    email;
    id;
    isActivated;
    nickname;
    avatar;
    requests;
    friends;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.nickname = model.nickname;
        this.avatar = model.avatar;
        this.requests = model.requests;
        this.friends = model.friends;
    }
}