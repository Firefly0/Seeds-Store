import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () =>
{
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() =>
  {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Multumim pentru comanda!</h2>
        <p className="email-msg"></p>
        <p className="description">
          Pentru orice intrebari sunati la <a href="tel:0768346741">0768346741</a> sau trimiteti un email
          pe adresa:
          <a className="email" href="mailto:mihaiasiazs@yahoo.com">
            mihaiasiazs@yahoo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continua Shopping-ul
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
