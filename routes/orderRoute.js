const express = require('express');
const router =express.Router();

const {
    addOrder,
    getAllOrders,
    getOrdersByUserId,
    setStatus,
  }= require('../controllers/orderController')
  router.post('/addOrder', addOrder);
  router.get('/getAllOrders', getAllOrders);
  router.get('/getOrdersByUserId/:id', getOrdersByUserId);
  router.put('/setStatus/:id/',  setStatus);



  module.exports=router
