import React, { useContext, useState, useEffect } from "react";
import Context from "context/index";
import ProductItem from "components/ProductItem/index";
import Banner from "./Banner";

import { useSelector } from "react-redux";
import { motion } from 'framer-motion'
import { PAGE_TRANSITION_DURATION } from "utils/index";
import { useGetProductsQuery } from "features/Products/products.service"
import Spinner from "components/Spinner/index";



function Home() {
  const { status } = useGetProductsQuery()
  const products = useSelector(state => state.productList.products)
  console.log(status);
  const smartphones = products.filter(p => p.category == "smartphone").sort((a, b) => b.soldQuantity - a.soldQuantity).slice(0, 10)
  const tablets = products.filter(p => p.category == "tablet")
  const laptops = products.filter(p => p.category == "laptop")






  return (
    <motion.div
      className="homepage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}
    >




      {status == 'fulfilled' && <Banner />}

      {/* {status == 'pending' && <Spinner />} */}


      <section className="top-sold-phones">
        <div className="container">
          <h3>SMARTPHONE BÁN CHẠY</h3>
          <div className="row">
            {smartphones.map((item, index) => <ProductItem.Loading key={index} props={item} status={status} />)}
          </div>
        </div>
      </section>

      {status == "fulfilled" && <section className="top-sold-tablets">
        <div className="container">
          <h3>MÁY TÍNH BẢNG BÁN CHẠY</h3>
          <div className="row">
            {tablets.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>}

      {status == "fulfilled" && <section className="top-sold-laptops">
        <div className="container">
          <h3>LAPTOP BÁN CHẠY</h3>
          <div className="row">
            {laptops.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>}
    </motion.div>
  );
}

export default Home;
