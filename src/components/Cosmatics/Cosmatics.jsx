import React, { useEffect, useState } from "react";
import Cosmatic from "../Cosmatic/Cosmatic";

const Cosmatics = () => {
  // const cosmatics = [
  //   { id: 1, name: "Powder", price: "50" },
  //   { id: 2, name: "Cream", price: "100" },
  //   { id: 3, name: "Mascara", price: "150" },
  //   { id: 4, name: "Lipstick", price: "200" },
  //   { id: 5, name: "Face powder", price: "250" },
  // ];

  const [cosmatics, setCosmatics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmatics(data));
  }, []);

  return (
    <div>
      <h1>This is form cosmatics components</h1>
      {cosmatics.map((cosmatic) => (
        <Cosmatic key={cosmatic.id} cosmatic={cosmatic}></Cosmatic>
      ))}
    </div>
  );
};

export default Cosmatics;
