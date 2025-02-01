import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProductsOnSale = () => {

  const username = localStorage.getItem("username")


  const [category, setCategory] = useState("")
  //const [username, setUsername] = useState("")
  const [pname, setPname] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")
  const [price, setPrice] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [products, setProducts] = useState([])
  //const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  //const navigate = useNavigate();

  useEffect(() => {
    const ProductData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          "http://localhost:5000/api/getProductData",
          { params: { username: username } }
        );
        //console.log(response.data)
        setProducts(response.data)
        //console.log(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }

    ProductData()
  }, [])

  const handleAddProduct = async(e)=>{
    e.preventDefault();
    setError("")
    setSuccess("")
    //add validation steps

    try{
      const response = await axios.post("http://localhost:5000/api/addproduct",{
        username,
        pname,
        description,
        price,
        category,
        status
      })

      if(response.status == 201) {
        console.log("hi")
        setIsOpen(false)
        ProductData()
      }
    }catch(error){
      if(error.response)
      {
        setError(error.response.data.message || "Error")
      }
      else{
        setError("Server Error")
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 bg-yellow-400"></div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Products on Sale</h2>
      {products.length > 0 ? (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product._id} className="p-4 border border-gray-300 rounded-lg shadow">
              <h3 className="text-lg font-bold">{product.pname}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-lg font-bold text-yellow-500">₹{product.price}</p>
              <p className={`text-sm font-medium ${product.status === "Available" ? "text-green-500" : "text-red-500"}`}>
                {product.status}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductsOnSale;
