const PostService = require('../services/PostService.js');

class PostContollers {
    async create(req, res) {
        const {title, description, image} = req.body;
        const postedBy = req.user.nickname;
        try {
            const post = await PostService.create({title, description, image, postedBy}, req.files.image)
            res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async getOne(req, res) {
        try {
            const post =  await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async getUserPosts(req, res) {
        console.log(req.query.nickname)
        try {
            const posts =  await PostService.getUserPosts(req.query.nickname)
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async like(req, res) {
        try {
            const like = await PostService.like(req.body, req.user.nickname)
            return res.json(like)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async unlike(req, res) {
        try {
            const like = await PostService.unlike(req.body, req.user.nickname)
            return res.json(like)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async createComment(req, res) {
        const {text, _id} = req.body
        const postedBy = req.user.nickname;
        try {
            const like = await PostService.createComment(_id,{text, postedBy})
            return res.json(like)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = new PostContollers()