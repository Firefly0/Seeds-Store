import React from "react";
import emailjs from "emailjs-com";
import { useStateContext } from "../context/StateContext";
import Success from "../pages/success";

export default function ContactUs() {
  const { cartItems } = useStateContext();
  const produse = cartItems.map((el) => {
    return {
      name: el.name,
      quantity: el.quantity,
    };
  });
  // console.log(produse);

  function sendEmail(e) {
    // console.log(cartItems);
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_cge3zfj",
        "template_vjzapum",
        e.target,
        "EHb4HcEL3Gxs5KQs7"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  // console.log(produse);

  let str = [];

  function listaProduse(produse) {
    for (let i = 0; i < produse.length; i++) {
      str.push(produse[i].name + " nr de pachete " + produse[i].quantity);
    }
    // return JSON.stringify(str);
    return str.join("\r\n");
  }

  console.log(str);
  const listaFinal = listaProduse(produse);
  console.log(listaFinal);
  const nume11 = document.getElementById("nume1");
  const nume22 = document.getElementById("nume2");
  const nume33 = document.getElementById("nume3");

  let redirect = function () {
    if (!nume11 && !nume22 && nume33) {
      return setTimeout(() => {
        window.location.href = "http://www.gradinadinpadure.ro/success";
      }, 1000);
    } else
      alert("Va rugam completati campurile pentru Nume, Adresa, Nr de tel ");
  };
  return (
    <form className="contact-form " onSubmit={sendEmail}>
      <input
        id="nume1"
        type="text"
        name="name"
        className="btn-message"
        required
        placeholder="Nume"
      />
      <input
        id="nume2"
        type="text"
        name="adresa"
        className="btn-message"
        required
        placeholder="Adresa"
      />
      <input
        id="nume3"
        type="text"
        name="phone_number"
        className="btn-message"
        required
        placeholder="Nr. de tel"
      />

      {/* <input type="submit" value="Trimite" className="btn-message" /> */}
      <button
        type="submit"
        onClick={redirect}
        className="btn-message"
        style={{ backgroundColor: "green" }}
      >
        Trimite
      </button>
      <textarea
        id="nume4"
        name="html_message"
        placeholder="Mesaj"
        className="btn-message"
      />
      <input type="hidden" name="message" value={listaFinal} />
    </form>
  );
}
