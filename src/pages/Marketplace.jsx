import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Manager from "../components/Manager";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import axios from "axios";
const Marketplace = () => {
  const username = localStorage.getItem("username");

  const [category, setCategory] = useState("");
  //const [username, setUsername] = useState("")
  const [pname, setPname] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  //const navigate = useNavigate();

  useEffect(() => {
    const ProductData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:5000/api/getProductData",
          { params: { username: username } }
        );
        console.log(response);

        setCategory(response.data.category);
        setDescription(response.data.description);
        setStatus(response.data.status);
        setPrice(response.data.price);
        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    ProductData();
  }, [pname]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    //add validation steps

    try {
      const response = await axios.post(
        "http://localhost:5000/api/addproduct",
        {
          username,
          pname,
          description,
          price,
          category,
          status,
        }
      );

      console.log(response.status);
      if (response.status == 201) {
        console.log("hi");
        setIsOpen(false);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Error");
      } else {
        setError("Server Error");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 bg-yellow-400"></div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <CategoryBar />
      {data?.map((item, index) => (
        <div key={index} className="p-4 border-b">
          <h2 className="text-xl font-bold">{item.pname}</h2>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <p>
            <strong>Status:</strong> {item.status}
          </p>
          <p>
            <strong>Seller:</strong> {item.username}
          </p>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Marketplace;
