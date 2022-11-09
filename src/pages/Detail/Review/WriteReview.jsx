import { toggleWriteReview } from 'features/Products/product.slice';
import { useGetProductsQuery, useUpdateReviewMutation } from 'features/Products/products.service';
import React from 'react'
import { useState } from 'react';
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

function WriteReview() {
    const [updateReview] = useUpdateReviewMutation()
    const dispatch = useDispatch()
    const show = useSelector(state => state.productList.isWriteReviewOpen)

    const auth = useSelector(state => state.userList.auth)


    const [input, setInput] = useState("")
    const [checked, setChecked] = useState(5)


    const location = useLocation()
    const params = queryString.parse(location.search)
    const id = +params.id

    useGetProductsQuery()
    const products = useSelector(state => state.productList.products)
    let product = products.find(p => p.id == id)
    console.log(product);

    const handleClose = () => {
        dispatch(toggleWriteReview())
    }

    const handleSubmitReview = () => {
        if (!input.trim()) {
            alert("Nội dung đánh giá không được để trống!")
            return
        }
        const review = {
            reviewer: auth.username,
            date: new Date().toLocaleDateString("vi-VN"),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            rating: checked,
            content: input,
        }

        // tao review moi
        const updateReviews = product.reviews.slice()
        updateReviews.unshift(review)
        product = {...product, reviews: updateReviews}

        alert("Cảm ơn bạn đã thêm đánh giá!")
        dispatch(toggleWriteReview())
        dispatch(updateReview(product))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm đánh giá cho sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">
                <div className="col-lg-3">
                    <div className="rating-button-container">
                        {[5, 4, 3, 2, 1].map(star => (
                            <div key={star}>
                                <input
                                    type="radio"
                                    name="rating-checkbox"
                                    value={star}
                                    id={`star-${star}`}
                                    checked={checked == star}
                                    onChange={e => setChecked(+e.target.value)}

                                />
                                <label htmlFor={`star-${star}`}>
                                    {star} <i className="fa-solid fa-star"></i>
                                </label>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="col-lg-9 review-input">
                    <textarea placeholder="Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm ..."
                        onChange={e => setInput(e.target.value)} value={input}></textarea>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleSubmitReview}>Gửi</button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Đóng</button>
            </Modal.Footer>
        </Modal>

    )
}

export default WriteReview