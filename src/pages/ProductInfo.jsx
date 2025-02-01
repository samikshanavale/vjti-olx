import React, { useEffect, useState } from 'react'
import { Link , useParams} from 'react-router-dom'
import axios from 'axios'

const ProductInfo = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchProduct = async() =>{
            try{
                const response = await axios.get(
                    "http://localhost:5000/api/getProductDataByID",
                    {params:{ id:id}}
                )
                console.log(response.data[0])
                setProduct(response.data[1])
                setUser(response.data[0])
            
            }
            catch(error){
                console.log(error);
            }
        }
        fetchProduct()
    }, [])
    

  return (
    <>
    <div>ProductI</div>
    <div>{product.pname}</div>
    <div>{user.name}</div>
    </>
  )
}

export default ProductInfo