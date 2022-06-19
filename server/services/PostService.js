const PostModel = require('../models/PostModel.js');
const PostDto = require('../dtos/PostDto');
const ApiError = require('../exceptions/apiError.js');

class PostService {
    async create(post) {
        const createdPost = await PostModel.create(post);
        const postDto = new PostDto(createdPost); 
        return {post: postDto};
    }

    async getAll() {
        const createdPosts = await PostModel.find();
        return createdPosts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Post not found')
        }
        const post = await PostModel.findById(id);
        return post;
    }

    async getUserPosts(user) {
        console.log(user)
        const userPosts = await PostModel.find({postedBy: user}
        );
        // if (myPosts.length == 0) {
        //     throw ApiError.BadRequest("У вас нет постов")
        // }
        return userPosts;
    }

    async like(post, userId) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const likedPosts = await PostModel.findByIdAndUpdate(post._id, {$push: {likes: userId}}, {new: true});
        return likedPosts;
    }

    async unlike(post, userId) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const unlikedPost = await PostModel.findByIdAndUpdate(post._id, {$pull: {likes: userId}}, {new: true});
        return unlikedPost;
    }

    async createComment(id,comment) {
        console.log(comment)
        if (!id) {
            throw new Error('Post not found')
        }
        const newComment = await PostModel.findByIdAndUpdate(id, {$push: {comments: comment}}, {new: true})
        return newComment;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const updatedPost = await PostModel.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Post not found')
        }
        const post = await PostModel.findByIdAndDelete(id)
        return post;
    }
}

module.exports = new PostService();