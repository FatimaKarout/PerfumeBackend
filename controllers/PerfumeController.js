const perfumesModel = require('../models/perfumesModel');
const { imageUploader } = require('../extra/imageUploader');

const addPerfume = async (req, res) => {
    try {
      const imageURL = await imageUploader(req);

      const perfume = new perfumesModel({
        price: req.body.price,
        name: req.body.name,
        category: req.body.category,
        discount: req.body.discount,
        image: imageURL,
        description: req.body.description,
        stock: req.body.stock,


      });
  
      const savedPerfume = await perfume.save();
      
      res.status(200).json({
        code: 200,
        message: 'Perfume added successfully',
        data: savedPerfume
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: 'Perffume not added successfully',
        error: error.message
      });
    }
  };
  const getAllPerfumes = async (req, res) => {
    try {
      const perfumes = await perfumesModel.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: perfumes,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to get data',
        error: error,
      });
    }
  };
  const deletePerfume = async (req, res) => {
    try {
      const perfume = await perfumesModel.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Perfume deleted successfully',
        data:perfume,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Perfume occured while deleting the article',
        error: error,
      });
    }
  };
  const getPerfumeById = async (req, res) => {
    try {
      const perfume = await perfumesModel.findById(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'perfume got successfully.',
        data: perfume,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to get perfume',
        error: error,
      });
    }
  };
  const UpdatePerfumeById = async (req, res) => {
    try {
      const { id } = req.params.id; 
      const updatedPerfumeData = req.body; 
  
      // Find and update the project
      const updatedProject = await perfumesModel.findOneAndUpdate(
        { id },
        { $set: updatedPerfumeData }, // Use $set to update specific fields
        { new: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Project updated successfully.",
        data: updatedProject,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to update project",
        error: error.message, 
      });
    }
  };
  module.exports={addPerfume,getAllPerfumes,deletePerfume,getPerfumeById,UpdatePerfumeById}