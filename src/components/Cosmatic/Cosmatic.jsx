import React from "react";
import("./Cosmatic.css");

const Cosmatic = (props) => {
  const { name, price, id, picture } = props.cosmatic;

  const addToCart = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
      const newQuantity = parseInt(quantity) + 1;
      localStorage.setItem(id, newQuantity);
    } else {
      localStorage.setItem(id, 1);
    }
  };

  return (
    <div style={{ background: "gray", margin: "20px" }}>
      <p>Product ID: {id}</p>
      <h3>Product Name: {name} </h3>
      <h4>Product Price: ${price} </h4>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default Cosmatic;
