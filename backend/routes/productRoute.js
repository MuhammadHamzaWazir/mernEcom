const express = require("express");
const { getAllProduct, createProduct, updateProduct, deleteProduct, showProduct } = require("../controllers/productController");

const routes = express.Router();

routes.route("/products").get(getAllProduct);
routes.route("/product/create").post(createProduct);
routes.route("/product/update/:id").put(updateProduct);
routes.route("/product/delete/:id").delete(deleteProduct);
routes.route("/product/show/:id").get(showProduct);

module.exports = routes

