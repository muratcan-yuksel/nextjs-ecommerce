import React from "react";

const Home = ({ products, bannerData }) => (
  <div>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {["Product 1, two, three"].map((product) => product)}
    </div>
  </div>
);

export default Home;
