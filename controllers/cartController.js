const Cart = require('../models/cartModel');

const getAllCarts = async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: cart,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const getCartByID = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: cart,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get cart by ID',
      error: error,
    });
  }
};
const getCartByUserID = async (req, res) => {
  try {
    const cart = await Cart.findOne({ User: req.params.useridd });
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: cart,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get cart by ID',
      error: error,
    });
  }
};
const addCart= async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Cart added successfully',
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Cart not added successfully',
      error: error,
    });
  }
};

const updateCartByID = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'Cart updated successfully.',
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update Cart',
      error: error,
    });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Cart deleted successfully',
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the cart',
      error: error,
    });
  }
};
const updatePerfumesForUser = async (req, res) => {
  try {
    const userid = req.params; // Corrected
    const { newPerfumes } = req.body;

    // User found, update the perfumes array
    const updatedUser = await Cart.findOneAndUpdate(
      { User: userid }, // Assuming 'User' is the correct field in your Cart model
      { $push: { perfumes: { $each: newPerfumes } } },
      { new: true } // to return the updated document
    );

    res.status(200).json({
      success: true,
      message: 'Perfumes updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error updating perfumes:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};



module.exports = {
  getAllCarts,
  getCartByID,
  addCart,
  updateCartByID,
  deleteCart,
  updatePerfumesForUser,
  getCartByUserID,
};