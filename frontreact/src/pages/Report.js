import React, { useState, useEffect } from "react";
import { Chart } from "../components/Chart";
export const Report = () => {
  const [products, setProducts] = useState([]);

  const origin = "http://localhost:3001/api";

  useEffect(() => {
    fetch(`${origin}/products?q=`)
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <section id="report">
      <div className="report-container">
        <h1>Unidades en inventario</h1>
        {console.log(products)}
        <Chart data={products} />
      </div>
    </section>
  );
};
