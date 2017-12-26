var express = require('express');
var router = express.Router();

var subscribeMail = require('../controllers/demo');
var manageBlog = require('../controllers/manageBlog');

router.post('/subscribeMail', subscribeMail.subscribeMail);
router.post('/createCategory', manageBlog.createBlogCategory);
router.get('/getAllCategory', manageBlog.getAllBlogCategory);
router.get('/getAllBlogCategoryById', manageBlog.getAllBlogCategoryById);
router.post('/createBlog', manageBlog.createBlog);
router.get('/getAllBlogs', manageBlog.getAllBlogs);
router.get('/getBlogById/:blogId', manageBlog.getBlogById);
router.get('/getBlogBysubcategory/:category/:subCategory', manageBlog.getBlogBysubcategory);
router.get('/getRecentBlog', manageBlog.getRecentBlog);
// router.get('/getBlogBysubcategory', manageBlog.getBlogBysubcategory);

module.exports = router;
