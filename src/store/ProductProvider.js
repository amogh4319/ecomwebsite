// ProductProvider.js
import React, { useState, useEffect } from "react";
import ProductContext from "./product-context";

const loadFromLocalStorage=JSON.parse(localStorage.getItem('cartItems')||'[]')

const ProductProvider = (props) => {
  const [items, setItems] = useState(loadFromLocalStorage);

  // Load cart items from local storage on component mount
  

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

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

  const removeItemFromCart = (id) => {
    const updatedItemsArray = items.filter((item) => item.id !== id);
    setItems(updatedItemsArray);
  };

  const productContext = {
    items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
