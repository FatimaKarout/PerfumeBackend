const express = require('express');
const router =express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {
    addPerfume,getAllPerfumes,deletePerfume,getPerfumeById,UpdatePerfumeById
  }= require('../controllers/PerfumeController')
  router.post('/addPerfume',upload.single('image'), addPerfume);
  router.get('/getAllPerfumes', getAllPerfumes);
  router.get('/getPerfumeById/:id', getPerfumeById);
  router.put('/UpdatePerfumeById/:id', UpdatePerfumeById);

  router.delete('/deletePerfumeById/:id', deletePerfume);


  module.exports=router
