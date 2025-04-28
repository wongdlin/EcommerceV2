import { useContext, useState, useEffect, createContext } from "react";
import { useAuth } from "./authContext";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && token) {
      fetchCart();
    } else {
      console.log("User not logged in");
    }
  }, [user, token]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
      if(err.status == 404){
        setCart([])
      }
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, qty) => {
    try {
      if (!user) {
        console.log("Unauthorized");
        throw new Error("User must be logged in to add item to cart");
      }
      const res = await api.post(
        "/api/cart/addToCart",
        { productId, qty },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const updateQty = async (productId, change) => {
    try {
      if (!user) {
        throw new Error("User must be logged in to add item to cart");
      }
      const res = await api.put(
        `/api/cart/`,
        { productId, change },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchCart();
    } catch (err) {
      console.error("Error reduceing cart quantity:", err);
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

      fetchCart();
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, fetchCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
