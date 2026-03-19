import { createContext, useContext, useState } from "react"
import { getProductById } from "../data/products";
export const CartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]); //{id: 2, quantity : 8}

    function addToCart(productId) {
        const existingProduct = cartItems.find((item) => item.id === productId);

        if (existingProduct) {
            setCartItems(cartItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }])
        }
    }

    function getCartItemsWithProducts() {
        return cartItems
            .map(item => ({
                ...item,
                product: getProductById(item.id)
            }))
            .filter(item => item.product);
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter(item => item.id !== productId))
        return;
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(
            cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    }

    function getCartTotal() {
        return cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    function clearCart() {
        setCartItems([]);
    }

    return <CartContext.Provider value={{ cartItems, addToCart, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart }}>
        {children}
    </CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}