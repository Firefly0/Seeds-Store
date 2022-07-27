import React from "react";
import emailjs from "emailjs-com";
import { useStateContext } from "../context/StateContext";

export default function ContactUs() {
  const { cartItems } = useStateContext();
  const produse = cartItems.map((el) => {
    return {
      name: el.name,
      quantity: el.quantity,
    };
  });

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
  let listaProduse = function (produse) {
    for (let i = 0; i < a.length; i++) {
      str.push(a[i].name + " nr de pachete " + a[i].quantity);
    }
    return str.join("\r\n");
  };
  console.log(str);

  return (
    <form className="contact-form " onSubmit={sendEmail}>
      <input type="text" name="name" required placeholder="Nume" />
      <input
        type="text"
        name="phone_number"
        required
        placeholder="Numar de telefon"
      />

      <textarea name="html_message" placeholder="Mesaj" />

      <input type="submit" value="Send" />
    </form>
  );
}
