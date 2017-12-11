var express = require('express');
var router = express.Router();
// var mail = require('../service/send-mail');
var Blog = require('../models/blog');

module.exports = {
  createBlogCategory: createBlogCategory,
  getAllBlogCategory: getAllBlogCategory,
  getAllBlogCategoryById:getAllBlogCategoryById
}

  function createBlogCategory(req, res, next) {
    console.log(req.body);
    managePCategory = Blog.BlogCategory(req.body);
    if(req.body.parentCategoryId == 0) {
      managePCategory.save().then(newBlog => {
        return res.status(200)
          .json("category created");
      },err => {
        return next(err);
      });
    } else {
      manageCategory = Blog.BlogCategory;
      manageCategory.findOneAndUpdate({_id: req.body.parentCategoryId}, {$push: {subCategory: req.body}},{new: true}).then( doc =>{
        return res.status(200)
          .json(doc);
      },err => {
        return next(err);
      });
    }
  }

  function getAllBlogCategory(req, res, next) {
    // console.log()
    blogCategory = Blog.BlogCategory;
    blogCategory.find().exec(function(err, blogCategories) {
      if(err) {
        return next(err);
      }
      if(blogCategories) {
        return res.status(200)
          .json(blogCategories);
      }else {
        return res.status(404)
          .json({message: "Sorry there is no category"});
      }
    });
  }

  function getAllBlogCategoryById(req, res, next) {
    // console.log()
    console.log(req.query);
    console.log(req.query.id.length);
    blogCategory = Blog.BlogCategory;
    for($i = 0; $i<req.query.id.length; $i++) {
      CallBackCategory(req.query.id[$i]);
  }
  }

  function CallBackCategory(id) {
    console.log(id);
    blogCategory.find().exec(function(err, blogCategories) {
      if(err) {
        return next(err);
      }
      if(blogCategories) {
        return res.status(200)
          .json(blogCategories);
      }else {
        return res.status(404)
          .json({message: "Sorry there is no category"});
      }
    });
  }
