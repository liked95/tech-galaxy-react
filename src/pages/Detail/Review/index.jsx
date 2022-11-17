import Context from 'context/index'
import React from 'react'
import { avgRating } from 'components/ProductItem/index';
import UserComment from './UserComment';
import { useDispatch } from 'react-redux';
import { toggleAllReviews, toggleWriteReview } from 'features/Products/product.slice';
import AllReviews from './AllReviews';




function Review(props) {
    const { reviews } = props.product
    const dispatch = useDispatch()

    function ratingCount(reviews, star) {
        return reviews.filter(review => review.rating == star).length
    }

    const handleOpenWriteReview = () => {
        dispatch(toggleWriteReview())
    }

    const handleOpenAllReviews = () => {
        dispatch(toggleAllReviews())
    }
   


    return (
        <div className="review">
            <div className="container">
                <div className="review-box d-flex">
                    <div className="review-left">
                        <div className="review-title">
                            Đánh giá <span className="brand">điện thoại</span> <span className="product">{props.product.name}</span>
                        </div>

                        <div className="rating-box">
                            <span className="rating-count"><span>{reviews.length}</span> đánh giá</span>
                            <span className="rating-avg">
                                <span>{avgRating(reviews)}</span>&nbsp;
                                <i className="fa-solid fa-star"></i></span>
                        </div>

                        <div className="rating-detail">
                            {[5, 4, 3, 2, 1].map(i => {
                                const percent = reviews.length != 0 ? ((ratingCount(reviews, i) / reviews.length) * 100).toFixed(0) : 0
                                return (
                                    <div className="component" key={i}>
                                        <p className="rating-label">{i} <span><i className="fa-solid fa-star"></i></span></p>
                                        <div className="rating-bar">
                                            <div className="rating-bar-percent" style={{ width: `${percent}%` }}></div>
                                        </div>
                                        <p className="rating-percent">{percent}%</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    <div className="review-right">
                        <div className="user-review-container">
                            {reviews.map((review, index) => <UserComment key={index} review={review} />)}
                        </div>

                        <div className="review-actions">
                            <button id="add-review" onClick={handleOpenWriteReview}>Viết đánh
                                giá</button>
                            <button id="see-all-reviews" onClick={handleOpenAllReviews}>
                                Xem tất cả đánh giá
                                <i className="fa-solid fa-caret-right"></i>
                            </button>
                        </div>
                    </div>

                    <AllReviews />
                </div>
            </div>
        </div>
    )
}

export default Review