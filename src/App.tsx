import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const greetings = "Hello, World!";
  const crew = ["develepor", "designer", "product manager", " tester"];
  const food = ["pizza", "sushi", "burger", "salad"];
  let showTitle = true;
  // const showTitle= false;
  const handleClick = (e: any) => {
    e.preventDefault();
    alert("Link clicked!");
  };
  const style = {
    color: "red",
    backgroundColor: "blue",
    margin: "20px",
  };
  const style2 = {
    color: "navy",
    backgroundColor: "white",
   fontSize: "10px",
  };
  const style3 = {
    color: "green",
    display: "outline",
  };
  return (
    <>
      <h6 style={style} onClick={handleClick}>
        {greetings}
      </h6>

      {showTitle ? <h2 style={style3}>Welcome to Vite + React</h2> : <h2 style={style3}>Title is hidden</h2>}
      {
        <ul style={style2}>
          {crew.map((value, index) => (
            <li>{value}</li>
          ))}
        </ul>
      }
      {
        <ul style={style2}>
          {food.map((v, indx) => (
            <li>{v}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default App;
