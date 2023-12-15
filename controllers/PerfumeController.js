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
        message: ' error occured while deleting the Perfume',
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
      const { ID } = req.params;
      const { price, name, category, discount, description, stock } = req.body;
  
      // Gather updated data
      const updatedPerfumeData = {
        price,
        name,
        category,
        discount,
        image: req.file ? req.file.path : undefined, // Check if a new image is provided
        description,
        stock,
      };
  
      const updatedProject = await perfumesModel.findOneAndUpdate(
        { _id: ID}, // Assuming your model uses "_id" for the unique identifier
        { $set: updatedPerfumeData },
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