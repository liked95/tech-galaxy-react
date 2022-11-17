import React from 'react'
import { Modal } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from 'features/Products/products.service';
import { toggleAllReviews } from 'features/Products/product.slice';

function AllReviews() {
  const dispatch = useDispatch()
  const location = useLocation()
  const params = queryString.parse(location.search)
  const id = +params.id

  useGetProductsQuery()
  const products = useSelector(state => state.productList.products)
  let product = products.find(p => p.id == id)

  const show = useSelector(state => state.productList.isAllReviewsOpen)

  const handleClose = () => {
    dispatch(toggleAllReviews())
  }

  // console.log(product.reviews.length);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tất cả đánh giá cho {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row">
        <div className='user-review-container'>
          {product.reviews.map((review, index) => (
            <div className="user-review" key={index}>
              <div className="review-identity">
                <div className="reviewer-name">{review.reviewer}</div>
                <div className="user-rating">{review.userRatingContent}</div>
                <div className="review-time">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i>&nbsp;
                    {review.date}
                  </div>
                  <div className="time">
                    <i className="fa-solid fa-clock"></i>&nbsp;
                    {review.time}
                  </div>
                </div>
              </div>
              <p className="review-content">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={handleClose}>Đóng</button>
      </Modal.Footer>
    </Modal>
  )
}

export default AllReviews