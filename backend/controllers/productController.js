const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncError = require("../middleware/catchAsyncErrors");

// create product -- admin

exports.createProduct =catchAsyncError(  async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
});

// edit product -- admin

exports.updateProduct =catchAsyncError( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product not found ", 404))
    }
    let productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        productUpdate
    })
});

// delete product -- admin

exports.deleteProduct =catchAsyncError( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHander("Product not found ", 404))
    }
    let productDel = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        productDel
    })
});

// show product

exports.showProduct =catchAsyncError( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHander("Product not found ", 404))
    }else {
        res.status(200).json({
            success:true,
            product
        })
    }
    
});

// all products

exports.getAllProduct =catchAsyncError( async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
});