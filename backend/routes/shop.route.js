const express = require('express');
const router = express.Router();

const authToken=require('../middleware/auth.middleware');

const shopController = require('../controllers/shop.controller');

router.get('/', shopController.getAllShop);
router.post('/add_Product',authToken.verifyToken,shopController.createShop);
router.get('/:id',shopController.getOneShop);
router.put('/:id',shopController.modifyShop);
router.delete('/:id',shopController.deleteShop);

module.exports = router;