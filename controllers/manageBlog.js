var express = require('express');
var router = express.Router();
// var mail = require('../service/send-mail');
var Blog = require('../models/blog');

module.exports = {
  createBlogCategory: createBlogCategory,
  getAllBlogCategory: getAllBlogCategory,
  getAllBlogCategoryById:getAllBlogCategoryById,
  createBlog: createBlog,
  getAllBlogs:getAllBlogs,
  getBlogById: getBlogById,
  getBlogBysubcategory: getBlogBysubcategory,
  getRecentBlog:getRecentBlog,
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

  function createBlog(req, res, next){
    // blog = Blog.Blog;
    blog = Blog.Blog;
    blog.findOne({_id: req.body._id}).then(blogDoc => {
      if(blogDoc) {
        blog.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}).then(doc => {
          return res.status(200)
            .json(doc);
        },err => {
          return next(err);
        });
      }else {
        newBlog = new Blog.Blog(req.body);
        newBlog.blogCreationDate = new Date();
        newBlog.save().then(newBlog => {
          return res.status(200)
            .json(newBlog);
        },err => {
          return next(err);
        });
      }
    });
  }

  function getAllBlogs(req, res, next) {
    blog = Blog.Blog;
    blog.find().exec(function(err, blogDoc) {
      if(err) {
        return next(err);
      }
      if(blogDoc) {
        return res.status(200)
          .json(blogDoc);
      }else {
        return res.status(404)
          .json({message: "Sorry there is no Blog"});
      }
    })
  }

  function getBlogById(req, res, next) {
    blog = Blog.Blog;
    console.log(req.params);

    blog.findOne({_id: req.params.blogId}).then(blogDoc => {
      if(blogDoc) {
        return res.status(200)
          .json(blogDoc);
      } else {
        return res.status(404)
          .json({message: "Sorry there is no Blog"});
      }
    })
  }


    function getBlogBysubcategory(req, res, next) {
      blog = Blog.Blog;
      console.log(req.params);
      console.log(req.params.subCategoryKey);
      blog.find({ category: req.params.category,subCategory: req.params.subCategory}).then(blogDoc => {
        if(blogDoc) {
          return res.status(200)
            .json(blogDoc);
        } else {
          return res.status(404)
            .json({message: "Sorry there is no Blog"});
        }
      })
    }

  function getRecentBlog(req, res, next) {
    blog = Blog.Blog;
    blog.find().sort({blogCreationDate: 'desc'}).exec(function(err, blogDoc) {
      if(err) {
        return next(err);
      }
      if(blogDoc) {
        return res.status(200)
          .json(blogDoc);
      }else {
        return res.status(404)
          .json({message: "Sorry there is no Blog"});
      }
    })
  }


  // function getBlogBysubcategory(req, res, next) {
  //   blog = Blog.Blog;
  //   console.log(req.params);
  // }
