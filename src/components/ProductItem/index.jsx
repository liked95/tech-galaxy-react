import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatMoney } from 'utils/index';
import Skeleton from 'components/Skeleton/index';

export function avgRating(reviews) {
  let sum = 0
  for (let review of reviews) {
    sum += review.rating
  }
  return (sum / reviews.length).toFixed(1)
}


const ProductItem = React.forwardRef((prop, ref) => {
  // console.log(ref);
  const { id, name, indexProductImgURL, features, currentPrices, oldPrices, alterOptions, discounts, soldQuantity, reviews } = prop.props
  // console.log(prop.status)
  const [option, setOption] = useState(0)


  return (
    <div ref={ref} className="product-card">
      <Link to={`/detail?id=${id}`} className="product-image">
        <img src={process.env.PUBLIC_URL + `/publicImages/product-card-images/${indexProductImgURL}`} alt={indexProductImgURL} />
      </Link>

      <div className="product-content">
        <Link to={`/detail?id=${id}`} className="product-name">{name}</Link>
        <p className="product-id" style={{ display: 'none' }}></p>

        <div className="alter-options no-scrollbar">
          {alterOptions.map((optionContent, index) => <button
            key={index}
            className={index == option ? 'active' : ''}
            onClick={() => setOption(index)}>
            {optionContent}
          </button>)}
        </div>

        <div className="old-price-container">
          <span className="old-price">{formatMoney(oldPrices[option])}</span>
          <span className="percent">{(((oldPrices[option] / currentPrices[option]) - 1) * 100).toFixed(0) + '%'}</span>
        </div>

        <p className="current-price">{formatMoney(currentPrices[option])}</p>

        <ul className="product-description">
          {features.map((feature, index) => <li key={index}><span>{feature}</span></li>)}
        </ul>

        <div className="product-card-bottom">
          <div className="bot-first">
            <div className="rating">
              <i className="fa-solid fa-star"></i>&nbsp;
              <span>{avgRating(reviews)}</span>
            </div>
            <div className="qtt-sold">
              ???? b??n: {soldQuantity}
            </div>
          </div>

          {/* <div className="bot-second" >
            <i className="fa-solid fa-circle-plus"></i>
            <p>So s??nh</p>
          </div> */}
        </div>
      </div>
    </div>
  )
})


export default ProductItem