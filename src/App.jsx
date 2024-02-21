import { useState } from "react";
import "./App.css";
import pizzaData from "./pizzaData";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Order />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <h1>Pizza Co.</h1>
        <h3>Our Menu</h3>
      </header>
    </>
  );
}
function Menu() {
  return (
    <>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </>
  );
}

function Pizza({ pizza }) {
  return (
    <>
      <div className="pizza-info">
        <img src={pizza.photoName} />
        <div className="pizza-details">
          <h4>{pizza.name}</h4>
          <p>{pizza.ingredients}</p>
          <p className="price">{pizza.price}$</p>
        </div>
      </div>
    </>
  );
}

function Order() {
  return (
    <div>
      <button>Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <>
      <footer>
        {isOpen
          ? "We're currently open, come visit us or order online"
          : `Sorry, we're closed. We're open from ${openHour}:00 till ${closeHour}:00`}
      </footer>
    </>
  );
}
export default App;
