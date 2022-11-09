import ProductItem from 'components/ProductItem/index';
import React from 'react';
import Slider from 'react-slick';

function ProductSlider({ products }) {
    // console.log(products);
    const settings = {
        dots: false,
        infinite: products.length > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: products.length > 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: products.length > 3,
                }
            },
            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: products.length > 2,
                }
            },

        ]
    };


    return (
        <Slider {...settings}>
            {products.map(product => <ProductItem key={product.id} props={product} />)}
        </Slider>
    );
}

export default ProductSlider