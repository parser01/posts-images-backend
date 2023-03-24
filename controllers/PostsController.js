import Post from "../models/Post.js";
import PostsService from "../service/PostsService.js";

class PostsController {
	async getAll(req, res) {
		try {
			const posts = await PostsService.getAll();
			// res.json(posts);
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getOne(req, res) {
		try {
			const post = await PostsService.getOne(req.params.id);
			return res.json(post);
		} catch (error) {
			if (error.message === "ID не указан") {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json(error);
			}
		}
	}

	async create(req, res) {
		try {
			const createdPost = await PostsService.create(
				req.body,
				req.files.picture
			);
			return res.json(createdPost);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async update(req, res) {
		try {
			const updatedPost = await PostsService.update(req.body);
			return res.json(updatedPost);
		} catch (error) {
			if (error.message === "ID не указан") {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json(error);
			}
		}
	}

	async delete(req, res) {
		try {
			const deletedPost = await PostsService.delete(req.params.id);
			return res.json(deletedPost);
		} catch (error) {
			if (error.message === "ID не указан") {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json(error);
			}
		}
	}
}

export default new PostsController();
