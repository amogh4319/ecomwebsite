import React from "react";
const ProductContext=React.createContext(
    {
        items:[],
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
)
export default ProductContext;