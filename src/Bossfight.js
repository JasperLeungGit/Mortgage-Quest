import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import "./App.css";

const Bossfight = () => {
  //   const {
  //     amnt,
  //     amortY,
  //     amortM,
  //     interest,
  //     interestType,
  //     interestTermY,
  //     interestTermM,
  //     setAmnt,
  //   } = useContext(GlobalContext);

  //     var Payment = amnt * (interest / n) * (1 + interest / n)**(n*amortY) / ((1 + interest / n)**(n*amortY) - 1);

  return (
    <div id="bossfight">
      <img
        id="hero"
        src="https://keyword-hero.com/wp-content/uploads/2017/04/Cart-Hero.png"
      ></img>
      <img
        id="enemy"
        src="https://static.thenounproject.com/png/1561390-200.png"
      ></img>
    </div>
  );
};
export default Bossfight;
