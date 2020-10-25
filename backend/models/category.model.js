const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategorySchema = new mongoose.Schema({
    name: String,
    slug: { type: String, index: true },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Category'
    },
    parents: [{
         _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            index: true
    },
         name: String,
         slug: String
    }]
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;