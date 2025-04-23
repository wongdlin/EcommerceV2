import {
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";
import { useAuth } from "./AuthContext";
import api from "../api/api";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user && token) {
      fetchCart();
    } else {
      console.log("User not logged in");
    }
  }, [user, token]);

  const fetchCart = async () => {
    try {
      const response = await api.get("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data);
      console.log("cart",response.data)
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const addToCart = async (product,qty) => {
    console.log("product:",product,qty)
    try {
      if (!user) {
        throw new Error("User must be logged in to add item to cart");
      }
      const res = await api.post(
        "/api/cart",
        { product },
        {
          headers: {
            Authorization: `Bearer $token`,
          },
        }
      );
      setCart(res.data);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (!user) {
        throw new Error("User must be logged in to add item to cart");
      }
      const res = await api.delete(`/api/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data)
    } catch (err) {
        console.error("Error removing from cart:", err)
    }
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, fetchCart}}>
        {children}
    </CartContext.Provider>
  )

};
