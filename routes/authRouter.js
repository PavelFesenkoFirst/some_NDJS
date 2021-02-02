const express = require('express')
const router = express.Router();
const controller = require('../controllers/authController');
const roleMiddleware = require('../middleware/roleMiddleware');

//localhost:3000/auth

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(true), controller.getUsers);

module.exports = router;