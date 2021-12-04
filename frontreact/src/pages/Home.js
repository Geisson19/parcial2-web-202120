import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FormattedMessage } from "react-intl";

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  const origin = "http://localhost:3001/api";

  useEffect(() => {
    fetch(`${origin}/products?q=${searchKey}`)
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, [searchKey]);

  return (
    <section id="home">
      <div className="home-container">
        <h1>
          <FormattedMessage id="gallery" />
        </h1>
        <div className="home-card">
          {products?.map(({ _id, name, picture, price, isActive }) => (
            <Card
              key={_id}
              name={name}
              picture={picture}
              price={price}
              isActive={isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
