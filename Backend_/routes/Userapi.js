const express = require("express")
const User = require("../models/Usermodel")
const bcrypt = require("bcrypt");
const router = express.Router();
const Product = require("../models/ProductModel")
const multer = require ("multer");
const path = require ("path")
const UPLOAD_PATH = path.join(__dirname, "..", "uploads");

//////////////////////////////////////////multer logic starts///////////////////////////////////////////
// const uploadPath = path.join(
//   ""
// )
// console.log(uploadPath)
console.log("DirName",__dirname);
console.log("UploadPath",UPLOAD_PATH)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads")); // Store files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp as the filename
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send({ filePath: `/uploads/${req.file.filename}` });
});
router.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

//////////////////////////////////////////multer logic ends///////////////////////////////////////////

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

router.post('/addproduct',upload.single("image"), async (req, res) => {
  console.log("hii")
  const { 
    username,
    pname,
    description,
    price,
    category,
    status,
  } = req.body;
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  console.log(req.body);
  const imagePath = `/uploads/${req.file.filename}`;

  try {
    const newProduct = new Product({
      username,
    pname,
    description,
    price,
    category,
    status,
    image: imagePath
    });

    //check if username exists in database

    await newProduct.save();
    res.status(201).json({ message: 'Product saved successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/getProductData', async (req, res) => {
  const username = req.query.username

  try{
    const products = await Product.find({username:username})
    if(!products){
      return res.status(400).send("User not found");
    }
    console.log(products);

    res.json(products);
    console.log(products.length);
  }
  catch(error){
    res.status(500).send("Server error");
  }
});

router.get('/getProductDataForMarketPlace', async (req, res) => {
  //const username = req.query.username

  try{
    const products = await Product.find({})
    if(!products){
      return res.status(400).send("User not found");
    }
    res.json(products);
    console.log(products.length);
  }
  catch(error){
    res.status(500).send("Server error");
  }
});


router.get('/getProductDataByID', async (req,res) => {
  const id = req.query.id
  

  try{
    const product = await Product.findOne({_id:id})
    if(!product){
      return res.status(400).send("Product not found");
    }
    const username = product.username;
    const user = await User.findOne({username:username})
    if(!username){
      return res.status(400).send("User not found");
    }

    const productData = [user, product]
    console.log(productData)
    res.json(productData);
  }
  catch(error){
    res.status(500).send("Server error")
  }
})

module.exports = router