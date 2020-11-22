import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import "./App.css";

const Bossfight = () => {
  const amnt = 0; //temp
  const frequency = "monthly"; // temp
  const [eGif, setEGif] = useState([]);
  const [hGif, setHGif] = useState(0);
  // const {
  //   amnt,
  //   amortization,
  //   interestRate,
  //   frequency,
  //   interestType,
  //   interestTerm,
  //   setAmnt,
  // } = useContext(GlobalContext);

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

  useEffect(() => {
    if (frequency === "monthly") {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900661688958996/knight60.gif"
      );
    } else if (frequency === "semimonthly") {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900663164305418/knight100.gif"
      );
    } else if (frequency === "bimonthly") {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900659544883230/knight30.gif"
      );
    } else if (frequency === "weekly") {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900665664241674/knight160.gif"
      );
    } else if (frequency === "accelerated weekly") {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900667099611136/knight200.gif"
      );
    } else {
      setHGif(
        "https://cdn.discordapp.com/attachments/779511824671834112/779900664372920320/knight130.gif"
      );
    }
  }, [frequency]);

  return (
    <div id="bossfight">
      <img id="hero" src={hGif} border="0" alt="animated-monster-image-0075" />
      <img id="enemy" src={eGif} border="0" alt="animated-monster-image-0014" />
    </div>
  );
};
export default Bossfight;
