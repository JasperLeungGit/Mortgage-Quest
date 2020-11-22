import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import DamageNumbers from "./DamageNumbers";

const Bossfight = () => {
  const state = useContext(GlobalContext);
  const [eGif, setEGif] = useState([]);
  const [hGif, setHGif] = useState([]);
  const [payment, setPayment] = useState(0);
  const [health, setHealth] = useState(state.amnt);
  const [freq, setFreq] = useState("");
  const [boss, setBoss] = useState("");
  const [fought, setFought] = useState(false);
  // const {
  //   amnt,
  //   state.amortization,
  //   state.interestRate,
  //   state.frequency,
  //   state.interestType,
  //   state.interestTerm,
  //     var Payment = amnt * (interest / n) * (1 + interest / n)**(n*amortY) / ((1 + interest / n)**(n*amortY) - 1);

  useEffect(() => {
    setHealth(state.amnt);
    var payment =
      (state.amnt *
        (state.interestRate / 100 / state.frequency) *
        (1 + state.interestRate / 100 / state.frequency) **
          ((state.frequency * state.amortization) / 12)) /
      ((1 + state.interestRate / 100 / state.frequency) **
        ((state.frequency * state.amortization) / 12) -
        1);

    setPayment(Math.ceil((payment * 100).toFixed(3)) / 100);
    // setPayment(666420); //temp, delete when formula implemented
    if (state.amnt >= 2000000) {
      setFought(true);
      setEGif(
        "https://vignette.wikia.nocookie.net/experience-ro/images/3/3a/Naght_Sieger.gif/revision/latest?cb=20170904212615"
      );
      setBoss("BOSS LEVEL: MAX (>= $2000000)");
    } else if (1000000 <= state.amnt) {
      setFought(true);
      setEGif(
        "https://www.ckaleb.com/wp-content/uploads/2018/05/bloody_knight.gif"
      );
      setBoss("BOSS LEVEL: INSANE (>= $1000000)");
    } else if (500000 <= state.amnt) {
      setFought(true);
      setEGif(
        "https://i.pinimg.com/originals/7d/5d/04/7d5d04d274912599ab9f587e6b47a5a4.gif"
      );
      setBoss("BOSS LEVEL: HARD (>= $500000)");
    } else {
      setFought(true);
      setEGif(
        "https://www.animatedimages.org/data/media/574/animated-monster-image-0014.gif"
      );
      setBoss("BOSS LEVEL: NORMAL (< $500000)");
    }
    switch (state.frequency) {
      case "12":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900661688958996/knight60.gif"
        );
        setFreq("monthly");
        break;
      case "24":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900663164305418/knight100.gif"
        );
        setFreq("semi-monthly");
        break;
      case "6":
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900659544883230/knight30.gif"
        );
        setFreq("bi-monthly");
        break;
      default:
        setHGif(
          "https://cdn.discordapp.com/attachments/779511824671834112/779900667099611136/knight200.gif"
        );
        setFreq("weekly");
    }

    if (health <= 0 && fought === false) {
      setEGif(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      );
      setBoss("PLEASE INPUT THE REQUIRED VALUES TO SEE THE BOSS FIGHT");
    }
  }, [state]);

  useEffect(() => {
    if (health <= 0) {
      if (fought) {
        setEGif("https://emoji.gg/assets/emoji/confetti.gif");
        setBoss(
          "BOSS WAS SLAIN! CALCULATE ANOTHER MORTGAGE BY ENTERING NEW VALUES"
        );
      }
    }
  }, [health]);

  // const calcSpeed = () => {
  //   if (payment > 0) return (1 / state.frequency) * 10;
  //   return 0;
  // };

  const calcSpeed = () => {
    if (payment > 0) {
      switch (state.frequency) {
        case "12":
          return 0.8;
        case "24":
          return 0.48;
        case "6":
          return 1.6;
        default:
          return 0.32;
      }
    }
    return 0;
  };

  const calcIterations = () => {
    if (health > 0) return "infinite";
    return "0";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(health - payment);
    }, calcSpeed() * 1000);
    return () => clearInterval(interval);
  });

  return (
    <div id="bossfight" style={{ display: state.someFunc }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      ></link>
      <h1 id="result-text">
        Your {freq} payment will be about ${payment}.
      </h1>
      <h1 id="total-text">TOTAL Health/Mortgage: ${state.amnt}</h1>
      <progress className="progress" value={health} max={state.amnt} />
      <img
        id="hero"
        style={{
          visibility: payment > 0 ? "visible" : "hidden",
        }}
        src={hGif}
        border="0"
        alt="animated-monster-0075"
      />
      <img
        id="enemy"
        style={{
          visibility: payment > 0 ? "visible" : "hidden",
        }}
        src={eGif}
        border="0"
        alt="animated-monster-0014"
      />

      <DamageNumbers
        iterations={calcIterations()}
        payment={payment}
        speed={calcSpeed()}
      />

      <h1 id="payment-text">{boss}</h1>
      <div className="control has-text-centered">
        <button className="button is-dark">
          <a href="#header">Calculate another mortgage!</a>
        </button>
      </div>
    </div>
  );
};
export default Bossfight;
