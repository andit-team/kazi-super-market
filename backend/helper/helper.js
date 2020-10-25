const Category = require('../models/category.model');

exports.getResult = (res, result) => {
    if(result){
        return res.status(200).json({error:false,msg:"Product find successfully",data:result});
    }else{
        return res.status(200).json({error:true,msg:"product not found"});
    }
}


exports.slugify = (string) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }


exports.buildAncestors = async (id, parent_id) => {
    let ancest = [];
    try {
        let parent_category = await Category.findOne({ "_id":parent_id },{ "name": 1, "slug": 1, "parents": 1 }).exec();
        if( parent_category ) {
           const { _id, name, slug } = parent_category;
           const ancest = [...parent_category.parents];
           ancest.unshift({ _id, name, slug })
           const category = await Category.findByIdAndUpdate(id, { $set: { "parents": ancest } });
        }
    } catch (err) {
        console.log(err.message)
    }
}



// exports.buildHierarchyAncestors = async ( category_id, parent_id ) => {
//     if( category_id && parent_id )
//        buildAncestors(category_id, parent_id)
//        const result = await Tag.find({ 'parent': category_id }).exec();
//     if(result){
//        result.forEach((doc) => {
//           buildHierarchyAncestors(doc._id, category_id)})
//        }
//     }

// exports.getCategoryLeafs = (category_id) => {
    
//     var childs = ['asdf'];

//     async function child(categoryId){

//         const result = await Tag.find({ 'parent': categoryId }).exec();
//         if(result){
//             return result;
//             // result.forEach((doc) => {
                
//             //     child(category_id)
//             //     // childs[doc_id] = doc.name;
//             // })
//         }
//     }

//     var childs = child(category_id)

    

//     return childs;   
            
// }



