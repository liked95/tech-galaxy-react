import React, { useContext } from "react";
import Context from "context/index";
import ProductItem from "components/ProductItem/index";
import { useSelector } from "react-redux";
import {useGetProductsQuery} from "features/Products/products.service"
import Banner from "./Banner";

function Home() {
  // const { products } = useContext(Context)
  useGetProductsQuery()
  const products = useSelector(state=>state.productList.products)
  const smartphones = products.filter(p => p.category == "smartphone").sort((a, b) => b.soldQuantity - a.soldQuantity).slice(0, 10)
  const tablets = products.filter(p => p.category == "tablet")
  const laptops = products.filter(p => p.category == "laptop")
  
  
  



  return (
    <>
      <Banner />

      <section className="top-sold-phones">
        <div className="container">
          <h3>SMARTPHONE BÁN CHẠY</h3>
          <div className="row">
            {smartphones.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>

      <section className="top-sold-tablets">
        <div className="container">
          <h3>MÁY TÍNH BẢNG BÁN CHẠY</h3>
          <div className="row">
          {tablets.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>

      <section className="top-sold-laptops">
        <div className="container">
          <h3>LAPTOP BÁN CHẠY</h3>
          <div className="row">
          {laptops.map((item, index) => <ProductItem key={index} props={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
