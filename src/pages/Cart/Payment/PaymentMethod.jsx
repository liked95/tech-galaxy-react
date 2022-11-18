import { useDeleteItemMutation, useGetCartQuery } from 'features/Cart/cart.service';
import { useAddToHistoryMutation } from 'features/History/history.service';
import React from 'react'
import { useState } from 'react'
import { Modal } from "react-bootstrap";
import { formatMoney } from 'utils/index';
import { useDispatch, useSelector } from 'react-redux';
import { updateDiscount, updateVoucherCode } from 'features/Cart/cart.slice';
import {useNavigate} from 'react-router-dom'
function PaymentMethod() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addToHistory] = useAddToHistoryMutation()
    const [deleteItem] = useDeleteItemMutation()

    const [payment, setPayment] = useState("")
    let paymentValue
    if (payment == 'cash') paymentValue = "Bằng tiền mặt khi giao hàng"
    if (payment == 'bank') paymentValue = "Chuyển khoản ngân hàng"
    if (payment == 'credit') paymentValue = "Trả góp qua thẻ tín dụng"
    if (payment == 'wallet') paymentValue = "Thanh toán qua ví điện tử"

    const [isExpand, setIsExpand] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setIsExpand(false)
    };

    const auth = useSelector(state => state.userList.auth)
    useGetCartQuery()
    const cart = useSelector(state => state.cartList.items)
    const checkItems = cart.filter(item => item.userId == auth.id && item.checked == true)


    const customerName = useSelector(state => state.cartList.customerName)
    const customerPhone = useSelector(state => state.cartList.customerPhone)
    const customerAddress = useSelector(state => state.cartList.customerAddress)

    const province = useSelector(state => state.cartList.province)
    const district = useSelector(state => state.cartList.district)
    const ward = useSelector(state => state.cartList.ward)

    const totalValue = useSelector(state => state.cartList.totalValue)
    const shippingFee = useSelector(state => state.cartList.shippingFee)
    const discount = useSelector(state => state.cartList.discount)
    const pretaxValue = useSelector(state => state.cartList.pretaxValue)
    const tax = useSelector(state => state.cartList.tax)
    const grandTotal = useSelector(state => state.cartList.grandTotal)

    const handleProceedPayment = () => {
        if (totalValue == 0) {
            alert("Ít nhất 1 sản phẩm phải được chọn!")
            return
        }
        if (!customerName) {
            alert("Tên không được để trống")
            return
        }
        if (!customerPhone) {
            alert("Số điện thoại không được để trống")
            return
        }

        if (!customerAddress) {
            alert("Địa chỉ cụ thể không được để trống")
            return
        }

        if (!payment) {
            alert("Phương thức thanh toán không được để trống!")
            return
        }

        setShow(true)
    };


    const toggleExpand = () => {
        setIsExpand(!isExpand)
    }

    const confirmOrder = () => {
        const purchaseObj = {
            items: checkItems,
            userId: auth.id,
            customerName,
            customerPhone,
            customerAddress,
            province,
            district,
            ward,
            totalValue,
            shippingFee,
            discount,
            pretaxValue,
            tax,
            grandTotal,
            paymentValue,
            date: new Date().toLocaleDateString("vi-VN"),
            hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
        addToHistory(purchaseObj)

        const idArr = []
        for (let item of checkItems) {
            idArr.push(item.id)
        }
        for (let item of checkItems) {
            deleteItem(item.id)
        }

        setShow(false)
        dispatch(updateDiscount(0))
        dispatch(updateVoucherCode(""))
        setTimeout(() => {
            alert("Bạn đã mua hàng thành công")
        }, 200);
    }

    const handleGoBack = () => navigate(-1)

    return (
        <>
            <div className="col-lg-4 col-md-6 payment-method-container">

                <h4>Phương thức thanh toán</h4>
                <div className="payment-method">
                    <input type="radio" name="method" id="cash"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "cash"} />
                    <label htmlFor="cash">Bằng tiền mặt khi giao hàng</label>
                    <span><i className="fa-solid fa-money-bill-1"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="bank"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "bank"} />
                    <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                    <span><i className="fa-solid fa-house-chimney-crack"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="credit"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "credit"} />
                    <label htmlFor="credit">Trả góp qua thẻ tín dụng</label>
                    <span><i className="fa-brands fa-cc-visa"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="wallet"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "wallet"} />
                    <label htmlFor="wallet">Thanh toán qua ví điện tử</label>
                    <span><i className="fa-solid fa-wallet"></i></span>
                </div>

                <div className="payment-btn-area">
                    <div className="go-back-btn" onClick={handleGoBack}>
                        <span><i className="fa-solid fa-caret-left"></i></span>
                        Tiếp tục mua hàng
                    </div>

                    <button id="pay-btn" onClick={handleProceedPayment}>Thanh toán</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận thanh toán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="payment-item-container" className={`position-relative ${!isExpand ? "shrink" : ""}`}>
                        <div className="payment-item-content">
                            <div className="payment-item-title d-flex mb-3">
                                <div className="product fw-bold text-center">Sản phẩm</div>
                                <div className="prices text-end fw-bold px-4">Giá</div>
                                <div className="quantity text-center fw-bold">Số lượng</div>
                                <div className="value text-end fw-bold">Số tiền</div>
                            </div>
                            {checkItems.map((item, index) => (
                                <div className="cart-item mb-2" key={index}>

                                    <div className="product d-flex">
                                        <div className="cart-item-image">
                                            <img src={`/publicImages/thumnail-carousel/${item.image}`} alt={item.image} />
                                        </div>

                                        <div className="cart-item-detail">
                                            <div className="product-name">{item.name}</div>
                                            <div className="product-attr">({item.color}, {item.alterOption})</div>
                                        </div>
                                    </div>

                                    <div className="prices text-end">
                                        <div className="new-price fw-bold">{formatMoney(item.price)}</div>
                                        <div className="old-price"><del>{formatMoney(item.oldPrice)}<del></del></del></div>
                                    </div>

                                    <div className="quantity text-center">

                                        <span className="mobile-count-label">Số lượng: </span>
                                        <span>{item.count}</span>
                                    </div>

                                    <div className="value text-end">{formatMoney(item.count * item.price)}</div>
                                </div>
                            ))}
                        </div>
                        <div className={`fade-btn-container d-flex justify-content-center ${checkItems.length <= 2 ? "d-none" : ""} ${isExpand ? "active" : ""}`}>
                            <button id="expand-cart-btn"
                                onClick={toggleExpand}>
                                {isExpand ? "Thu gọn" : "Xem tất cả"}
                            </button>
                        </div>
                    </div>

                    <div className="row" id="payment-shipment-info">
                        <div className="total-cart-container col-6">
                            <h6 className="text-center mb-3">Tổng quan đơn hàng</h6>
                            <div className="total-value">
                                <span>Tiền hàng</span>
                                <span>{formatMoney(totalValue)}</span>
                            </div>

                            <div className="shipment-fee">
                                <span>Phí vận chuyển</span>
                                <span>{formatMoney(shippingFee)}</span>
                            </div>

                            <div className="discount">
                                <span>Chiết khấu</span>
                                <span>{formatMoney(discount)}</span>
                            </div>

                            <div className="pretax-value">
                                <span>Tạm tính</span>
                                <span>{formatMoney(pretaxValue)}</span>
                            </div>

                            <div className="vat">
                                <span>VAT (8%)</span>
                                <span>{formatMoney(tax)}</span>
                            </div>

                            <div className="grand-total fw-bold">
                                <span>Tổng cộng</span>
                                <span>{formatMoney(grandTotal)}</span>
                            </div>


                        </div>

                        <div className="receiver-info col-6">
                            <h6 className="text-center mb-3">Thông tin người nhận</h6>
                            <p>Họ và tên: <span id="order-name">{customerName}</span></p>
                            <p>Số điện thoại <span id="order-phone"></span>{customerPhone}</p>
                            <p>Địa chỉ: <span id="order-address">{customerAddress}</span></p>
                            <p>Phương thức thanh toán: <span id="order-payment-method">{paymentValue}</span></p>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Đóng</button>
                    <button type="button" className="btn btn-primary" id="confirm-btn" onClick={confirmOrder}>Xác nhận thanh toán</button>
                </Modal.Footer>
            </Modal>

        </>


    )
}

export default PaymentMethod