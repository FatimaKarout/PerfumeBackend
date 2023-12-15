const express = require('express');
const router = express.Router();

const {
    getAllCarts,
    getCartByID,
    addCart,
    updateCartByID,
    deleteCart,
    updatePerfumesForUser,
    getCartByUserID,
} = require('../controllers/cartController');

router.get('/getAll', getAllCarts);
router.get('/get/:ID', getCartByID);
router.post('/add', addCart);
router.put('/update/:ID', updateCartByID);
router.delete('/delete/:ID', deleteCart);
router.put('/updatePerfumes/:userid', updatePerfumesForUser);
router.get('/getByUserId/:useridd', getCartByUserID);



module.exports = router;