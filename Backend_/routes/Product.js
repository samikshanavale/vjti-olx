const Product = require("../models/ProductModel")
const express =require('express')
const router = express.Router()

router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
  
  // Add a new product
  router.post('/products', async (req, res) => {
    const { category, name, description, image, status, price } = req.body;
  
    const newProduct = new Product({
      category,
      name,
      description,
      image,
      status,
      price,
    });
  
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add product' });
    }
  });
  
  // Update product status (e.g., mark as sold)
  router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  });
  
  // Delete a product
  router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  });

module.exports = router