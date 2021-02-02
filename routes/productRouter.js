const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const roleMiddleware = require('../middleware/roleMiddleware');

//localhost:3000/products

router.get("/", controller.getProductList);
router.post("/add",roleMiddleware(true), controller.addProduct);
router.put("/edit",roleMiddleware(true), controller.editProduct);
router.delete("/delete",roleMiddleware(true), controller.deleteProduct);

module.exports = router;