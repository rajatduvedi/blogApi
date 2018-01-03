var express = require('express');
var router = express.Router();

var subscribeMail = require('../controllers/demo');
var manageBlog = require('../controllers/manageBlog');
var manageFile = require('../controllers/manageFile');

router.post('/subscribeMail', subscribeMail.subscribeMail);
router.post('/createCategory', manageBlog.createBlogCategory);
router.get('/getAllCategory', manageBlog.getAllBlogCategory);
router.get('/getAllBlogCategoryById', manageBlog.getAllBlogCategoryById);
router.post('/createBlog', manageBlog.createBlog);
router.get('/getAllBlogs', manageBlog.getAllBlogs);
router.get('/getBlogById/:blogId', manageBlog.getBlogById);
router.get('/getBlogBysubcategory/:category/:subCategory/:index', manageBlog.getBlogBysubcategory);
router.get('/getRecentBlog/:index', manageBlog.getRecentBlog);
router.get('/getPopularBlog/:index', manageBlog.getPopularBlog);
router.post('/uploadBlogImage', manageFile.uploadBlogImage);
router.post('/deleteBlogById', manageBlog.deleteBlogById);
router.get('/getBlogBycategory/:category/:index', manageBlog.getBlogBycategory)

module.exports = router;
