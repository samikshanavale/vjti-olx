import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import PastSales from '../components/PastSales';
import ProductsOnSale from '../components/ProductsOnSale';
import PastOrders from '../components/PastOrders';
import AddProductModal from '../components/AddProductModel';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    category: '',
    name: '',
    description: '',
    image: '',
    status: 'available',
    price: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle form submission
  const handleAddProduct = () => {
    console.log('New Product Details:', newProduct);
    setShowModal(false);
    setNewProduct({ category: '', name: '', description: '', image: '', status: 'available', price: '' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ProfileHeader />
      <PastSales />
      <ProductsOnSale />
      <PastOrders />

      <button
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500"
        onClick={() => setShowModal(true)}
      >
        Add New Product
      </button>

      <AddProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        newProduct={newProduct}
        handleInputChange={handleInputChange}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Profile;
