import React from 'react'
import {Link} from 'react-router-dom'

function DetailHeading({product}) {
    
    return (
        <div className="detail-heading">
            <div className="container">
                <div className="product-breadcrumb">
                    <Link to={`/smartphone?brands[]=${product.brand}`} className="breadcrumb__brand">{product.brand.toUpperCase()}</Link>&nbsp;
                    <i className="fa-solid fa-angle-right"></i>&nbsp;
                    <Link to={`/detail?id=${product.id}`} className="breadcrumb__product">{product.name}</Link>
                </div>

                <div className="product-name">
                    <p>Điện thoại {product.name}</p>
                </div>

                <div className="product-detail-compare-btn">

                </div>
            </div>
        </div>
    )
}

export default DetailHeading