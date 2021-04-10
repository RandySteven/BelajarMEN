const Blog = require('../model/blog');

//Membuat fungsi CRUD
exports.createBlog = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;

    const CreateBlog = new Blog(
        {
            title: title,
            body: body
        }
    )

    CreateBlog.save()
        .then(result => {
            res.status(201).json({
                message: 'Create Blog Data Success',
                data: result
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        })
}

exports.getAllBlog = (req, res, next) => {
    Blog.find()
        .then(result => {
            res.status(201).json({
                message: 'Get All Blogs Data',
                data: result
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        })
}

exports.getBlogById = (req, res, next) => {
    const blogId = req.params.blogId;

    Blog.findById(blogId)
    .then(result => {
        res.status(201).json({
            message: 'Get Data by Id',
            data: result
        })
    })
    .catch(err => {
        res.status(400).json({
            error: err
        })
    })
}

exports.updateBlog = (req, res, next) => {
    const blogId = req.params.blogId;

    const title = req.body.title;
    const body = req.body.body;
    Blog.findById(blogId)
    .then(blog => {
        blog.title = title;
        blog.body = body;
        return blog.save()
    })
    .then(result => {
        res.status(200).json({
            message:'Update success',
            data: result
        })
    })
    .catch(err => {
        res.status(400).json({
            error: err
        })
    })
}

exports.deleteBlog = (req, res, next) => {

}