import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductCard({ product }) {

    const {cartItems, addToCart} = useContext(CartContext);

    return (
        <div className="product-card" key={product.id}>
            <img src={product.image} className="product-card-image" />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">${product.price}</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                    <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add To Cart</button>
                </div>
            </div>
        </div>
        )
}