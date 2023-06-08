const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const { createProductController,
    allProductController,
    getSingleProductController,
    productPhotoController,
    categoryProductController,
    similarProductController } = require('../controllers/productController');

// create ||post
router.post('/create', formidable(), createProductController);

// get all products || get
router.get('/all', allProductController)

// get single product
router.get('/single-product/:slug', getSingleProductController)

// product photo
router.get('/photo/:pid', productPhotoController)

// category product
router.get('/category/:slug', categoryProductController)

// similar products
router.get('/similar-roducts/:slug', similarProductController)

module.exports = router;