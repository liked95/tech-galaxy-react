import React, { useContext } from "react";
import Context from "context/index";
import ProductItem from "components/ProductItem/index";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'


import { useGetProductsQuery } from "features/Products/products.service"
import Banner from "./Banner";
import { PAGE_TRANSITION_DURATION } from "utils/index";
import { useEffect } from "react";

function Home() {
  // const { products } = useContext(Context)
  useGetProductsQuery()
  const products = useSelector(state => state.productList.products)
  const smartphones = products.filter(p => p.category == "smartphone").sort((a, b) => b.soldQuantity - a.soldQuantity).slice(0, 10)
  const tablets = products.filter(p => p.category == "tablet")
  const laptops = products.filter(p => p.category == "laptop")

  const start = new Date()

  useEffect(() => {
    let end = new Date()
    console.log(end - start)
  }, [products])






  return (
    <motion.div
      className="homepage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}
    >

      <Banner />

      {products.length > 0 && <section className="top-sold-phones">
        <div className="container">
          <h3>SMARTPHONE BÁN CHẠY</h3>
          <div className="row">
            {smartphones.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>}

      {products.length > 0 && <section className="top-sold-tablets">
        <div className="container">
          <h3>MÁY TÍNH BẢNG BÁN CHẠY</h3>
          <div className="row">
            {tablets.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>}

      {products.length > 0 && <section className="top-sold-laptops">
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
