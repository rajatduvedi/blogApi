var mongoose = require('../config/dbconnection');
var Schema = mongoose.Schema;

var blogCategorySchema = Schema({
 categorykey: { type: String, unique: true},
 categoryValue: String,
 subCategory: [{
    categorykey: { type: String, unique: true},
   categoryValue: String,
 }],
});

var BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);
module.exports = {
  BlogCategory: BlogCategory
}
