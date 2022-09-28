import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) =>
{
  return (
    <div>

      <div className="hero-banner-container"
        style={{
          // backgroundImage: "",
          backgroundImage: `url(https://cdn.sanity.io/images/fb4zoq1k/production/6286d86bf461c0d98a144b6e0cbeb2ecbfaab307-1600x613.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'au',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="new-hero">
          <h3>{heroBanner.largeText1}</h3>
          <h3>{heroBanner.midText}</h3>
        </div>
      </div>
      <div style={{ fontSize: '22px', paddingTop: "20px" }} className="desc">
        <Link href="/despre">Despre noi</Link>
        <p>{heroBanner.desc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
