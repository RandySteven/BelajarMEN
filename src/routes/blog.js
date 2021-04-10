const express = require('express');
//memanggil router
const router = express.Router();
//memanggil controller
const blogController = require('../controller/blog');

//membuat routes berdasarkan fungsi fungsi dari controller
router.post('/create-blog', blogController.createBlog);
router.get('/blogs', blogController.getAllBlog);
router.get('/:blogId', blogController.getBlogById);
router.put('/update-blog/:blogId', blogController.updateBlog);
router.delete('/delete-blog/:blogId', blogController.deleteBlog);

module.exports = router