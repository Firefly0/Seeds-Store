import React, { useRef } from "react";
import Link from "next/link";
import
{
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import EmailSend from "./EmailSend";

const Cart = () =>
{
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () =>
  {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  // console.log(cartItems);
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Cosul de cumparaturi</span>
          <span className="cart-num-items">
            (
            {totalQuantities === 1
              ? totalQuantities + " produs"
              : totalQuantities + " produse"}
            )
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Cosul de cumparaturi este gol</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continua Shopping-ul
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item ?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price} RON</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num" onClick="">
                          {item.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>{totalPrice} RON </h3>
              </div>
              <div className="total-transport">
                <h3 style={{ fontWeight: "lighter" }}>Taxa transport: </h3>
                <h3 style={{ fontWeight: "lighter" }}>Intre 15 si 20 RON </h3>
              </div>
              <div className="total-transport">
                <h3
                  style={{
                    fontWeight: "lighter",
                  }}
                >
                  Gratis pentru comenzi ce depasesc 99 RON{" "}
                </h3>
              </div>
              <div className="btn-container">
                {/* <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button> */}
                <div>
                  <EmailSend />
                </div>
                <div></div>
              </div>
            </div>
          )}
          <div style={{ height: "200px" }}>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
