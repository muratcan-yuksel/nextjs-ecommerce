import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ product, bannerData }) => (
  <div>
    <HeroBanner />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {["Product 1, two, three"].map((product) => product)}
    </div>
    <FooterBanner />
  </div>
);

export const getServersideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
