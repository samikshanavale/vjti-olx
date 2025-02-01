const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  username: { type: String, required: true, },
  category: { type: String, required: true },
  pname: { type: String, required: true },
  description: { type: String, required: true },
  // image: { type: String },
  status: { type: String, default: 'available' },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;