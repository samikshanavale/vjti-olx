import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import CommonNav from "../components/CommonNav"
import Navbar from '../components/HomeNav';


const ProductInfo = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/getProductDataByID",
                    { params: { id: id } }
                )
                console.log(response.data[0])
                setProduct(response.data[1])
                setUser(response.data[0])

            }
            catch (error) {
                console.log(error);
            }
        }
        fetchProduct()
    }, [])


    return (
        <>
            <CommonNav />
            <div className="flex items-start gap-5 bg-gray-50 p-5">
                {/* Left Side: Image */}
                <div className="w-1/2 flex justify-center items-center bg-gray-300 p-3 rounded-xl">
                    <img src="path_to_image.jpg" alt="Product Image" className="w-full h-auto rounded-lg max-w-sm" />
                </div>

                {/* Right Side: Product and Seller Info */}
                <div className="w-1/2 bg-gray-100 p-5 rounded-xl flex flex-col justify-between">
                    {/* Product Information */}
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold text-gray-800">Product Information</h2>
                        <div className="mt-2 text-gray-700">Name: {product.pname}</div>
                        <div className="mt-2 text-gray-700">Description: {product.description}</div>
                        <div className="mt-2 text-gray-700">Category: {product.category}</div>
                        <div className="mt-2 text-gray-700">Price: ₹{product.price}</div>
                        <div className={`mt-2 font-medium ${product.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>Status: {product.status}</div>
                    </div>

                    {/* Seller Information */}
                    <div className="bg-teal-100 p-4 rounded-lg mb-4">
                        <h3 className="text-xl font-bold text-teal-700">Seller Information</h3>
                        <div className="mt-1 text-teal-800">Seller Name: {user.name}</div>
                        <div className="mt-1 text-teal-800">Seller Email: {user.email}</div>
                        <div className="mt-1 text-teal-800">Seller Phone: {user.phone}</div>
                    </div>

                    {/* Buy Now Button */}
                    <button className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                        Buy Now
                    </button>
                </div>
            </div>

        </>
    )
}

export default ProductInfo