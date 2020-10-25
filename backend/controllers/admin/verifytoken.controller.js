
 const Admin = require('../../models/admin.model');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {

    try{

        const token = req.body.token;
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        );
        Admin.findById(decodedToken._id).then( result => {
            if(result){
                
                return res.status(201).json({
                    data: result,
                    msg: "Successfully Varified Token",
                    error:false
                })
                
            }else{
                return res.status(200).json({error: true,status: 201, msg: "You are not authenticated"});
            }
        });

    }catch (err) {
        return res.status(200).json({error: true,status: 201, msg: "You are not authenticated",err: err})
    }

 }