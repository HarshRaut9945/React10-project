import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add Product Function
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

   const removeFormCart=(id)=>{
       setCart((prev)=>prev.filter((item)=>item.id !== id));
   }

   const updateCartQty=(id,qty)=>{
      setCart((prev)=>
        prev.map((item)=>
         ( item.id === id ? {...item, qty: Number(qty)} : item))
      );
   }

  // ✅ Return inside the component
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart,removeFormCart,updateCartQty }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for easier access
export const useCart = () => useContext(CartContext);
