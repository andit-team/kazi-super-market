/**
 * Admin Related Controller------------------
 */

 const Admin = require('../../models/admin.model');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');

 exports.createAdmin = (req, res, next) => {

    const hash = bcrypt.hashSync(req.body.password, 8);
    const newAdmin = new Admin({
        user: req.body.user,
        password: hash
    });
    newAdmin.save().then( result => {

        return res.status(201).json({
            data: result,
            msg: "Successfully Created Admin",
            error:false
        })
    }).catch((err) => {
        return res.status(200).json({error: true,status: 201, msg: "Admin Creation was Unsuccessful",err: err})
    });

 }

 exports.adminLogin = (req, res, next) => {

    let fetchAdmin;
    Admin.findOne({
        user: req.body.user
    })
        .then(user => {
            if(!user){
                return res.status(201).json(
                    {
                        error: true,
                        msg: "User Not Found"
                    }
                );

            }
            fetchAdmin = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if(!result){
                return res.status(201).json({
                    error: true,
                    msg: "Auth Failed"
                });
            }
            const token = jwt.sign({_id: fetchAdmin._id}, process.env.SECRET, {
                expiresIn: "8h"
            });
            return res.status(201).json({
                token: token,
                msg: "Successfully Log in Admin",
                error:false
            })
        })
        .catch((err) => {
            return res.status(200).json({error: true,status: 200, msg: "Admin Log in Unsuccessful",error: err})
        })
}