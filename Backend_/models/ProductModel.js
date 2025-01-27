const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  status: { type: String, enum: ['available', 'sold'], default: 'available' },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;