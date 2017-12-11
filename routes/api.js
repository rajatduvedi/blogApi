var express = require('express');
var router = express.Router();

var subscribeMail = require('../controllers/demo');
var manageBlog = require('../controllers/manageBlog');

router.post('/subscribeMail', subscribeMail.subscribeMail);
router.post('/createCategory', manageBlog.createBlogCategory);
router.get('/getAllCategory', manageBlog.getAllBlogCategory);
router.get('/getAllBlogCategoryById', manageBlog.getAllBlogCategoryById)

module.exports = router;
