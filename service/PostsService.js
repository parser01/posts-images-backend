import Post from "../models/Post.js";
import FileService from "./FileService.js";

class PostsService {
	async getAll() {
		const posts = await Post.find();
		return posts;
	}

	async getOne(id) {
		if (!id) throw new Error("ID не указан");
		const post = await Post.findById(id);
		return post;
	}

	async create(post, picture) {
		const fileName = await FileService.save(picture);
		const createdPost = await Post.create({ ...post, picture: fileName });
		return createdPost;
	}

	async update(post) {
		if (!post._id) throw new Error("ID не указан");
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		});
		return updatedPost;
	}

	async delete(id) {
		if (!id) throw new Error("ID не указан");
		const deletedPost = await Post.findByIdAndDelete(id);
		return deletedPost;
	}
}

export default new PostsService();
