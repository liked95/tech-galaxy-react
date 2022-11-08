import React, { useContext } from "react";
import iPadBanner from "../../assets/images/ipad_banner.png";
import caseBanner from "../../assets/images/case-banner.png";
import macbookBanner from "../../assets/images/macbook_banner.png";
import Context from "context/index";
import ProductItem from "components/ProductItem/index";
import { useSelector } from "react-redux";
import {useGetProductsQuery} from "features/Products/products.service"

function Home() {
  // const { products } = useContext(Context)
  useGetProductsQuery()
  const products = useSelector(state=>state.productList.products)
  const smartphones = products.filter(p => p.category == "smartphone").sort((a, b) => b.soldQuantity - a.soldQuantity).slice(0, 10)
  const tablets = products.filter(p => p.category == "tablet")
  const laptops = products.filter(p => p.category == "laptop")
  
  
  



  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="banner-images owl-carousel">
            <div className="banner-img">
              <a href="promotion.html">
                <img src={iPadBanner} alt="ipad_banner" />
              </a>
            </div>

            <div className="banner-img">
              <a href="promotion.html">
                <img src={caseBanner} alt="case-banner" />
              </a>
            </div>

            <div className="banner-img">
              <a href="promotion.html">
                <img src={macbookBanner} alt="macbook_banner" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
