const PostModel = require('../models/PostModel.js');

class PostService {
    async create(post ) {
        const createdPost = await PostModel.create(post);
        return createdPost;
    }

    async getAll() {
        const createdPosts = await PostModel.find();
        return createdPosts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Post not found')
        }
        const post = await PostModel.findById(id)
        return post;
    }

    async like(post, userId) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const likedPosts = await PostModel.findByIdAndUpdate(post._id, {$push: {likes: userId}}, {new: true})
    }

    async unlike(post, userId) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const likedPosts = await PostModel.findByIdAndUpdate(post._id, {$pull: {likes: userId}}, {new: true})
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