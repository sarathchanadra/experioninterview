import React from "react";
import Card from "./card";
import "../card/cardcontainerstyle.scss";
import prodimg1 from "../../assets/product-images/image 24.png";
import prodimg2 from "../../assets/product-images/image 26.png";
import prodimg3 from "../../assets/product-images/image 29.png";
import prodimg4 from "../../assets/product-images/image 32.png";
import prodimg5 from "../../assets/product-images/image 36.png";
import prodimg6 from "../../assets/product-images/image 37.png";

let carddata = [
  {
    image: prodimg1,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Men Crater Remixa Sneakers",
    price: "Rs.5467",
  },
  {
    image: prodimg2,
    name: "Puma",
    description: "Puma shoe description",
    price: "Rs.6499",
  },
  {
    image: prodimg3,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Women Crater Remixa Sneakers",
    price: "Rs.2767",
  },
  {
    image: prodimg4,
    name: "Vero Moda",
    description: "Vero Moda",
    price: "Rs.5467",
  },
  {
    image: prodimg5,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Men Crater Remixa Sneakers",
    price: "Rs.5467",
  },
  {
    image: prodimg6,
    name: "ADIDAS",
    description: "Puma shoe description",
    price: "Rs.3734",
  },
  {
    image: prodimg3,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Women Crater Remixa Sneakers",
    price: "Rs.2767",
  },
  {
    image: prodimg4,
    name: "Vero Moda",
    description: "Vero Moda",
    price: "Rs.5467",
  },
  {
    image: prodimg5,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Men Crater Remixa Sneakers",
    price: "Rs.5467",
  },
  {
    image: prodimg6,
    name: "ADIDAS",
    description: "Puma shoe description",
    price: "Rs.3734",
  },
  {
    image: prodimg3,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Women Crater Remixa Sneakers",
    price: "Rs.2767",
  },
  {
    image: prodimg4,
    name: "Bond Street By Red Tape Remixa Sneakers",
    description: "Vero Moda",
    price: "Rs.5467",
  },
];

const Cardcontainer = () => {
  return carddata.map((item) => {
    return <Card key={item.name} item={item} />;
  });
};
export default Cardcontainer;
