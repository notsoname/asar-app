module.exports = class UserDto {
    title;
    id;
    description;
    postedBy;
    image;

    constructor(model) {
        this.title = model.title;
        this.id = model._id;
        this.description = model.description;
        this.postedBy = model.postedBy;
        this.image = model.image;
    }
}