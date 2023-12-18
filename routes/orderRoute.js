const express = require('express');
const router =express.Router();

const {
    addOrder,
    getAllOrders,
    getOrdersByUserId,
    setStatus,
    deleteAllDocuments,

  }= require('../controllers/orderController')
  router.post('/addOrder', addOrder);
  router.get('/getAllOrders', getAllOrders);
  router.get('/getOrdersByUserId/:id', getOrdersByUserId);
  router.put('/setStatus/:id/',  setStatus);

  router.delete('/delete',  deleteAllDocuments);


  module.exports=router