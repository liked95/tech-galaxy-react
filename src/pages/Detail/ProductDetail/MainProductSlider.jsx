import React, { useState } from "react";
import Slider from "react-slick";
import './index.css'

const AsNavFor = props => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const { mainCarouselImages, dotCarouselImages, colors } = props

    return (
        <div>
            <Slider className="mainSlickProduct"
                asNavFor={nav2} 
                ref={c => setNav1(c)}
                dots={false}
            >
                {mainCarouselImages.map((image, index) => (
                    <div key={index}>
                        <img src={process.env.PUBLIC_URL + `/publicImages/main-carousel-images/${image}`} alt={image} />
                    </div>
                ))}
            </Slider>


            <Slider className="thumbSlickProduct"
                asNavFor={nav1}
                ref={c => setNav2(c)}
                slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
                infinite={false}
            >
                {dotCarouselImages.map((image, index) => (
                    <div key={index}>
                        <div className='slick-image-wrapper'>
                            <img src={process.env.PUBLIC_URL + `/publicImages/thumnail-carousel/${image}`} alt={image} />
                        </div>
                        <p className="slick-thumbnail-name">{colors[index]}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AsNavFor