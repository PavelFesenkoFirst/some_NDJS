const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');
const roleMiddleware = require('../middleware/roleMiddleware');

//localhost:3000/category

router.get("/", controller.getCategoryList);
router.post("/add", roleMiddleware(true), controller.addProductCategories);
router.put("/edit", roleMiddleware(true), controller.editProductCategories);
router.delete("/delete", roleMiddleware(true), controller.deleteProductCategories);

module.exports = router;