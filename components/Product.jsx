import React, { useEffect } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Product = ({ product: { image, name, slug, price } }) =>
{
  const { setQty } = useStateContext();

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card" onClick={() => setQty(1)}>
          {image &&
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
            />
          }
          <p className="product-name">{name}</p>
          <p className="product-price">{price} RON</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
