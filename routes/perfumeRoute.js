const express = require('express');
const router =express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const {
    addPerfume,getAllPerfumes,deletePerfume,getPerfumeById,UpdatePerfumeById,filteredPerfume
  }= require('../controllers/PerfumeController')
  router.post('/addPerfume',upload.single('image'), addPerfume);
  router.get('/getAllPerfumes', getAllPerfumes);
  router.get('/getPerfumeById/:ID', getPerfumeById);
router.put('/updatePerfume/:ID', upload.single('image'), UpdatePerfumeById);
router.get('/categories/:category', filteredPerfume)
  router.delete('/deletePerfumeById/:ID', deletePerfume);


  module.exports=router
