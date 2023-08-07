// ProductProvider.js
import React, { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
     // Check if the item already exists in the cart
     const existingItemIndex = items.findIndex((existingItem) => existingItem.id === item.id);

     if (existingItemIndex !== -1) {
       // Item already exists, update its quantity
       const updatedItem = {
         ...items[existingItemIndex],
         quantity: items[existingItemIndex].quantity + item.quantity,
       };
 
       const updatedItemArray = [...items];
       updatedItemArray[existingItemIndex] = updatedItem;
       setItems(updatedItemArray);
     } else {
       // Item doesn't exist, add it to the cart
       setItems((prevItems) => [...prevItems, item]);
     }
  };
  const removeItemFromCart = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const productContext = {
    items,
    addItem: addItemToCart,
    removeItem:removeItemFromCart
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
