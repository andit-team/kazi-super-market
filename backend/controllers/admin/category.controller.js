/**
 * Category Crud Controller By Admin -----------------------------
 */

 const Category = require('../../models/category.model');
 const Helper = require('../../helper/helper');
 exports.createCategory = (req, res, next) => {
     
    let parentId = req.body.parent ? req.body.parent : null;
    const newCategory = new Category({
        name: req.body.name,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        slug: Helper.slugify(req.body.name),
        parentId
    });

    newCategory.save().then( result => {
        if(result){
            Helper.buildAncestors(result._id, parentId)
            res.status(201).json({
                data: result,
                error: false,
                msg: 'Category Created Successfully'
            });
        }else{
            res.status(200).json({
                error: true,
                msg: 'Category Not Created'
            });
        }
    }).catch( error => {
        res.status(200).json({
            error: true,
            msg: error
        });
    });
 }

 exports.updateCategory = (req, res, next) => {
    let parentId = req.body.parent ? req.body.parent : null;
    const newCategory = {
        name: req.body.name,
        slug: Helper.slugify(req.body.name),
        parentId
    };

    console.log(newCategory);

    Category.updateOne({_id: req.body._id}, newCategory).then( result => {
        if(result.n > 0){
            Helper.buildAncestors(result._id, parentId)
            res.status(201).json({
                data: result,
                error: false,
                msg: 'Category Updated Successfully'
            });
        }else{
            res.status(200).json({
                error: true,
                msg: 'Category Not Updated'
            });
        }
    }).catch( error => {
        res.status(200).json({
            error: true,
            msg: error
        });
    });
 }




 exports.getAllCategory = (req, res, next) => {
    let type = req.params.type ? req.params.type : null;
    let parent = {
        parentId : null
    };
    if(type !== null){
        parent = {
            parentId : {
                $ne: null
            }
        }
    }
    Category.find(parent).then( result => {
        if(result){
            res.status(201).json({
                data: result,
                error: false,
                msg: 'Category Got Successfully'
            });
        }else{
            res.status(200).json({
                error: true,
                msg: 'Category Not Found'
            });
        }
    }).catch( error => {
        res.status(200).json({
            error: true,
            msg: error
        });
    });
            
 }

 exports.findCategory = (req, res, next) => {
     let slug = req.params.slug ? req.params.slug : null;
    if(!slug){
        res.status(201).json({
            data: [],
            error: true,
            msg: 'Category not found'
        });
    }
    Category.find({slug: slug}).then( result => {
        if(result){
            res.status(201).json({
                data: result,
                error: false,
                msg: 'Category Got Successfully'
            });
        }else{
            res.status(200).json({
                error: true,
                msg: 'Category Not Found'
            });
        }
    }).catch( error => {
        res.status(200).json({
            error: true,
            msg: error
        });
    });
 }



 exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({_id:req.body._id}).then( result => {
        if(result.n > 0){
            res.status(201).json({
                data: result,
                error: false,
                msg: 'Category Deleted Successfully'
            });
        }else{
            res.status(200).json({
                error: true,
                msg: 'Category Not Deleted'
            });
        }
    }).catch( error => {
        res.status(200).json({
            error: true,
            msg: error
        });
    });
            
 }