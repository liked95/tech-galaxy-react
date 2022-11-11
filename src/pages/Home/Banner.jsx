import React from 'react'
import Slider from 'react-slick';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

import iPadBanner from "../../assets/images/ipad_banner.png";
import caseBanner from "../../assets/images/case-banner.png";
import macbookBanner from "../../assets/images/macbook_banner.png";

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: false,
    };
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="banner-images">
                    <Slider {...settings}>
                        {[iPadBanner, caseBanner, macbookBanner].map((image, index) => (
                            <div className="banner-img" key={index}>
                                <Link to="/promotion">
                                    <img src={image} alt={image} />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Banner