import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Bossfight = () => {
  const state = useContext(GlobalContext);
  const [eGif, setEGif] = useState([]);
  const [hGif, setHGif] = useState([]);
  const [payment, setPayment] = useState(0);
  const [health, setHealth] = useState(state.amnt);
  // const {
  //   amnt,
  //   amortization,
  //   state.interestRate,
  //   state.frequency,
  //   state.interestType,
  //   interestTerm,
  //     var Payment = amnt * (interest / n) * (1 + interest / n)**(n*amortY) / ((1 + interest / n)**(n*amortY) - 1);

  useEffect(() => {
    // setPayment(
    //   (state.amnt * (state.interestRate / state.frequency) * (1 + state.interestRate / state.frequency) ** (state.frequency * amortY)) /
    //     ((1 + state.interestRate / state.frequency) ** (state.frequency * amortY) - 1)
    // );
    setPayment(666420); //temp, delete when formula implemented
    if (state.amnt >= 2000000) {
      setEGif(
        "https://vignette.wikia.nocookie.net/experience-ro/images/3/3a/Naght_Sieger.gif/revision/latest?cb=20170904212615"
      );
    } else if (1000000 <= state.amnt) {
      setEGif(
        "https://www.ckaleb.com/wp-content/uploads/2018/05/bloody_knight.gif"
      );
    } else if (500000 <= state.amnt) {
      setEGif(
        "https://lh3.googleusercontent.com/proxy/YyRaPhQZEo3UtLzo0BDbBfV-vMtSI4uKdbzovv6VuCfJZkXp_SDQeQwZKJ95BBoLFcL0Ek-aPrZV2hscZCk1QHUWAw"
      );
    } else {
      setEGif(
        "https://i.pinimg.com/originals/7d/5d/04/7d5d04d274912599ab9f587e6b47a5a4.gif"
      );
    }

    switch (state.frequency) {
      case "monthly":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900661688958996/knight60.gif"
        );
        break;
      case "semimonthly":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900663164305418/knight100.gif"
        );
        break;
      case "bimonthly":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900659544883230/knight30.gif"
        );
        break;
      case "weekly":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900665664241674/knight160.gif"
        );
        break;
      case "accelerated weekly":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900667099611136/knight200.gif"
        );
        break;
      default:
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900664372920320/knight130.gif"
        );
    }
  }, [state]);

  const debugMe = () => {
    console.log(health);
  };

  return (
    <div id="bossfight">
      <h1 id="result-text">
        Your {state.frequency} payment will be ${payment}
      </h1>
      <progress
        className="progress"
        // value={health}
        value={state.amnt / 2}
        max={state.amnt}
      />
      <img id="hero" src={hGif} border="0" alt="animated-monster-0075" />
      <img id="enemy" src={eGif} border="0" alt="animated-monster-0014" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      ></link>
      <h1 id="damage-text">-${payment}</h1>
      <h1 id="payment-text">Payment x completed!</h1>
      <button id="bossButton" onClick={debugMe}>
        HIT ME
      </button>
    </div>
  );
};
export default Bossfight;
