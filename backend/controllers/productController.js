const Product = require('../models/product.model');
const Helper = require('../helper/helper');

exports.test = (req,res,next) => {

    return res.status(200).json({error: true,status: 201, msg: "Admin Creation was Unsuccessful",err: 'sdf'})
},

exports.createProduct = (req,res,next) => {
    const newProduct = new Product({
        name        : req.body.name,
        price       : req.body.price,
        description : req.body.description,
        category    : req.body.categoryId
    });
    newProduct.save().then( result => {
        Helper.getResult(res,result);
    }).catch((err) => {
        res.status(200).json({error: true,status: 201, msg: "Admin Creation was Unsuccessful",err: err})
    });
    }


    exports.fatchProduct = (req,res,next) => {
        Product.find().populate('category').then(result => {
            Helper.getResult(res,result);
        }).catch(err => {
            res.status(200).json({error:true,msg:err});
        })
    }

    exports.showProduct = (req,res,next) => {
        Product.find({_id:req.body.id}).populate('category').then(result => {
            Helper.getResult(res,result);
        }).catch(err => {
            res.status(200).json({error:true,msg:err});
        })
    }

    exports.updateProduct = (req,res,next) => {
        const updateProductData = {
            name : req.body.name,
            description : req.body.name,
            price : req.body.price
        }
        Product.updateOne({_id: req.body._id}, updateProductData).then( result => {
            if(result.n > 0){
                Product.find({_id:req.body._id}).then(ress => {
                    Helper.getResult(res,ress);
                })
            }else{
                res.status(200).json({error:true,msg:"product not found"});
            }
        }).catch(error => {
            res.status(200).json({error:true,msg:err});
        });
    }

    exports.deleteProduct = (req) => {
        Product.deleteOne({_id:req.body._id}).then( result => {
            if(result.n > 0){
                res.status(200).json({error:false,msg:"Product Deleted successfully",data:result});
            }else{
                res.status(200).json({error:true,msg:"product not found"});
            }
        }).catch(error => {
            res.status(200).json({error:true,msg:err});
        });
    }