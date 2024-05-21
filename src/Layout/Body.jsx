import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 12.98,
    name: "Banana",
    description: "Fresh Banana from thailand",
  },
  {
    id: 2,
    price: 13.98,
    name: "Mango",
    description: "Fresh Mango from thailand",
  },
  {
    id: 3,
    price: 14.98,
    name: "Apple",
    description: "Fresh Apple from thailand",
  },
  {
    id: 4,
    price: 15.98,
    name: "Orange",
    description: "Fresh Orange from thailand",
  },
  {
    id: 5,
    price: 16.98,
    name: "Lemon",
    description: "Fresh Lemon from thailand",
  },
  {
    id: 6,
    price: 19.98,
    name: "Gwaythee",
    description: "Fresh Gwaythee from thailand",
  },
];

const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
