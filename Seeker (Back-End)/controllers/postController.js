
const Post = require('../models/post');

const validationHandler = require('../validations/validationHandler');

exports.index = async(req, res) => {
    try {
        const posts = await Post.find().sort({ createdat: -1 });
        res.send(posts);
    } catch (err) {
        res.status(404).json({ "message": "Error not found" });
    }
};

exports.show = async(req, res, next) => {
    try {
        const post = await Post.findOne({
            _id: req.params.id
        });
        res.send(post);
    } catch (err) {
        res.status(404).json({ "message": "Error not found" });
    }
};
exports.store = async(req, res, next) => {
    try {
        validationHandler(req);

        let post = new Post();
        post.description = req.body.description;
        post.image = req.file.filename;

        post = await post.save();

        res.send(post);
        res.send({ message: 'The name is ' + req.body.name });
    } catch (err) {
        res.status(404).json({ "message": "Error not found" });
    }
}

exports.update = async(req, res, next) => {
    try {
        validationHandler(req);

        let post = await Post.findById(req.params.id);
        post.description = req.body.description;

        post = await post.save();

        res.send(post);
        res.send({ message: 'The name is ' + req.body.name });
    } catch (err) {
        res.status(404).json({ "message": "Error not found" });
    }
}

exports.delete = async(req, res, next) => {
    try {
        let post = await Post.findById(req.params.id);
        await post.delete();
        res.send({ message: 'The post was deleted' });
    } catch (err) {
        res.status(404).json({ "message": "Error not found" });
    }
}