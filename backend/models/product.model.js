const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name            : {type : String, required : true},
    reference       : {type : String, required : true},
    description     : {type : String, required : true},
    summary         : String,
    comments        : String,
    date            : { type: Date, default: Date.now },
    price           : { type: Number, min: 0 },
    category        : [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    status          : {type : String, default : 'active'},
    metaTitle       : String,
    metaKeywords    : String,
    metaDescription : String,
    thumbnail       : String,
    images          :[
        {
            imgId : String,
            imgUrl : String
        }
    ],
});
const products = mongoose.model('Product',productSchema)
module.exports = products;