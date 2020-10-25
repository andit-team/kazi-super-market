const express = require('express');
const router = express.Router();
const adminAuth = require('../../auth/admin.auth');

//Admin Related Operation------------------
const admin = require('../../controllers/admin/admin.controller');
router.post('/create', admin.createAdmin);
router.post('/login', admin.adminLogin);

const verifytoken = require('../../controllers/admin/verifytoken.controller');
router.post('/verifytoken', verifytoken.verifyToken);

// Category Crud--------------------------
const category = require('../../controllers/admin/category.controller');
router.post('/category-create', category.createCategory);
router.post('/category-update', category.updateCategory);
router.post('/category-delete', adminAuth, category.deleteCategory);
router.get('/categories/:type?', category.getAllCategory);
router.get('/category/:slug?', category.findCategory);


// Export the Router
module.exports = router;