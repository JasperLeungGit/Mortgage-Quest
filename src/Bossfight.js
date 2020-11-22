import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import "./App.css";

const Bossfight = () => {
  <link rel="import" href="x-gif.html" />;
  const amnt = 0;
  const [eGif, setEGif] = useState([]);
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
  useEffect(() => {
    if (amnt <= 50000) {
      setEGif(
        "https://www.animatedimages.org/data/media/574/animated-monster-image-0014.gif"
      );
    } else if (50000 < amnt <= 100000) {
      setEGif(
        "https://www.animatedimages.org/data/media/574/animated-monster-image-0132.gif"
      );
    } else if (100000 < amnt <= 500000) {
      setEGif(
        "https://www.animatedimages.org/data/media/574/animated-monster-image-0024.gif"
      );
    } else {
      setEGif(
        "https://www.animatedimages.org/data/media/574/animated-monster-image-0024.gif"
      );
    }
  }, [amnt]);
  return (
    <div id="bossfight">
      <video width="320" height="240" controls>
        <source src="./images/hero.mp4" />
      </video>
      <img id="enemy" src={eGif} border="0" alt="animated-monster-image-0014" />
    </div>
  );
};
export default Bossfight;
