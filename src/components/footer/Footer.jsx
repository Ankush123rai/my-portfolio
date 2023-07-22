// Footer.js
import React, { useState } from "react";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navitage = useNavigate();
  const [input, setInput] = useState("");
  const [owner, setOwner] = useState(false);
  console.log(input);
  const handleSubmitId = () => {
    if (input == "ankush2000") {
      setOwner(true);
      alert("hii Ankush");
      navitage("/mySection");
      localStorage.setItem("admin", owner);
    } else {
      alert("You are not Owner!!");
    }
  };
  return (
    <footer className={style.footer}>
      <div className={style.owner}>
        <h5>Admin Section...</h5>
        <input
          type="text"
          placeholder="Enter ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmitId}>Go</button>
      </div>
      <div className={style.details}>
        <h3>Ankush kumar rai</h3>
        <p>ankush98rai@gmail.com</p>
        <p>Jorhat, Assam, India</p>
      </div>
    </footer>
  );
};

export default Footer;
