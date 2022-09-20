import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) =>
{
  console.log(heroBanner)
  return (
    <div className="hero-banner-container"
      style={{
        // backgroundImage: "",
        background: `linear-gradient(90deg, rgba(110,191,183,0.5) 0%, rgba(172,205,205,0.5) 31%, rgba(0,212,255,0.5) 100%),  url(https://cdn.sanity.io/images/fb4zoq1k/production/6286d86bf461c0d98a144b6e0cbeb2ecbfaab307-1600x613.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'au',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h3>{heroBanner.largeText1}</h3>
        {/* <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        /> */}

        <div>
          {/* <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link> */}
          <div className="desc">
            <h5>Despre noi</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
