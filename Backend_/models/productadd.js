const express = require("express");
const Product = require("../models/Productmodel."); // Assuming you have a Product model
const router = express.Router();

// Add Product Route
router.post('/addProduct', async (req, res) => {
  const { name, description, price, category, seller } = req.body;
  console.log(req.body);

  // Input Validation
  if (!name || !description || !price || !category || !seller) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if product already exists (optional, based on your requirements)
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: 'Product already exists' });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      seller,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get All Products Route
router.get('/getProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get Product by ID Route
router.get('/getProduct/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;