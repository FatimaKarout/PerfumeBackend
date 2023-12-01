const express = require('express');
const router =express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {
    addPerfume,getAllPerfumes,deletePerfume,getPerfumeById,UpdatePerfumeById
  }= require('../controllers/PerfumeController')
  router.post('/addPerfume',upload.single('image'), addPerfume);
  router.get('/getAllPerfumes', getAllPerfumes);
  router.get('/getPerfumeById/:ID', getPerfumeById);
router.put('/updatePerfume/:id', upload.single('image'), UpdatePerfumeById);

  router.delete('/deletePerfumeById/:ID', deletePerfume);


  module.exports=router
