const postModel = require('../models/postModel');

// @route   GET api/v1/posts
// @desc    Get All Posts
exports.getPosts = (req, res) => {
	const posts = postModel.getAllPosts();
	return res.status(200).json({
		status: 'success',
		count: posts.length,
		data: posts,
	});
};

// @route   GET api/v1/posts/:id
// @desc    Gets a post by ID
exports.getPostById = (req, res) => {
	const post = postModel.getPostById(req.params.id);

	if (post[0] !== undefined) {
		return res.status(200).json({
			status: 'success',
			data: post[0],
		});
	}

	return res.status(404).json({
		status: 'error',
		message: 'No post found',
	})
};