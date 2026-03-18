import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products";
import { useNavigate } from "react-router-dom";

export default function ProductDetails(){

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(
        () =>{
            const foundProduct = getProductById(id);
            console.log(foundProduct)

            if(!foundProduct){
                navigate("/");
                return;
            }else{
                setProduct(foundProduct);
            }

        }, [id] //dependency List
    )

    if(!product){
        return <h1>Loading...</h1>
    }

    return (
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-detail-content">
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}