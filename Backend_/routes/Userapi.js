const express = require("express")
const User = require("../models/Usermodel")
const bcrypt = require("bcrypt");
const router = express.Router();
const Product = require("../models/ProductModel")

router.post('/signup', async (req, res) => {
  const { username,
    password,
    email,
    name,
    phone } = req.body;
  console.log(req.body);
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
        password,
        email,
        name,
        phone
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username,
    password } = req.body;
  console.log(req.body);
  

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

res.status(200).json({ message: 'Login successful', user: { username: user.username } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/getUserData', async (req, res) => {
  const username = req.query.username

  try{
    const user = await User.findOne({username:username})
    if(!user){
      return res.status(400).send("User not found");
    }
    res.json(user);
    console.log(user);
  }
  catch(error){
    res.status(500).send("Server error");
  }
});

router.post('/addproduct', async (req, res) => {
  console.log("hii")
  const { 
    username,
    pname,
    description,
    price,
    category,
    status} = req.body;
  console.log(req.body);
  
  try {
    const newProduct = new Product({
      username,
    pname,
    description,
    price,
    category,
    status
    });

    //check if username exists in database

    await newProduct.save();
    res.status(201).json({ message: 'Product saved successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router