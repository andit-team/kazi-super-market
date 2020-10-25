var express = require('express')
let router = express.Router();

// Admin Routes------------------
let admin = require('./api/admin.route');
router.use('/admin', admin);



// Customer Routes------------------
let product = require('./api/product.route');
router.use('/product', product);












// const Helper = require('../helper/helper');
// const Tag = require('../models/tags.model');
// router.post('/newTag', async (req, res) => {
//     let parent = req.body.parent ? req.body.parent : null;
//     const category = new Tag({name: req.body.name,slug: Helper.slugify(req.body.name),parent:parent})
//   try {
//     let newCategory = await category.save();
//     Helper.buildAncestors(newCategory._id, parent)
//     res.status(201).send({ response: `Tag ${newCategory._id}` });
//   } catch (err) {
//     res.status(500).send(err);
//   }
//   });

//   router.post('/findTag', async (req, res) => {
//     Tag.find({slug: req.body.slug}).populate('Tag').then(result => {
//         Helper.getResult(res,result);
//     }).catch(err => {
//         res.status(200).json({error:true,msg:err});
//     })

//     // try {
//     //      const result = await Tag.find({ slug: req.body.slug })
//     //      .select({
//     //      "_id": false, 
//     //      "name": true,
//     //      "ancestors.slug": true,
//     //      "ancestors.name": true }).exec();
//     //      res.status(201).send({ "status": "success", "result": result});
//     // } catch (err) {
//     //     res.status(500).send(err);
//     // }
//     });

//     router.get('/descendants', async (req, res) => {
//         try {
//             const result = await Tag.find({ "ancestors._id":   req.body.category_id })
//              .select({ "_id": false, "name": true })
//              .exec();
//            res.status(201).send({ "status": "success", "result": result });
//            } catch (err) {
//              res.status(500).send(err);
//            }
//     })
//     router.get('/d', async (req, res) => {
        
//         const result = await Tag.find({slug: req.body.slug}).exec();
//         result.push({'ss':'dd'});
//         console.log(result[0].ss);
//         res.send(result);
//         //     if(result){
//         //         // result.push({"child":"dfas"});
//         //         // let child = {childs : "sdasdf"}
//         //         // result = Object.assign(result, child);
//         //         // console.log(result);
//         //         res.send(results);
//         //         // if(result.parent)
//         //         // Helper.getCategoryLeafs(req.body.parent)
//         //     }
//         // }).catch(err => {
//         //     res.status(200).json({error:true,msg:err});
//         // })

//         // const rr = Helper.getCategoryLeafs(req.body.parent)
//         // res.send(rr);
//     })



module.exports = router;