const PostService = require('../services/PostService.js');

class PostContollers {
    async create(req, res) {
        const {title, description, image} = req.body;
        const postedBy = req.user.id
        try {
            const post = await PostService.create({title, description, image, postedBy})
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

    async like(req, res) {
        try {
            const like = await PostService.like(req.body, req.user.id)
            return res.json(like)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async unlike(req, res) {
        try {
            const like = await PostService.unlike(req.body, req.user.id)
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