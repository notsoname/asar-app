const Post = require('../models/Post.js');

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const createdPosts = await Post.find();
        return createdPosts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Post not found')
        }
        const post = await Post.findById(id)
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('Post not found')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Post not found')
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

module.exports = new PostService();