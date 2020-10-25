/**
 * Admin Auth-----------------------
 */
const jwt = require("jsonwebtoken");
const admin = require("../models/admin.model");
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        );
        admin.findById(decodedToken._id).then( result => {
            if(result){
                next();
            }else{
                return res.status(400).json({error: true,status: 201, msg: "You are not authenticated"});
            }
        });

    }catch (err) {
        return res.status(400).json({error: true,status: 201, msg: "You are not authenticated",err: err})
    }
}