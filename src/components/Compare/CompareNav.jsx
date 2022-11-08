import React, { useState } from 'react'
import arrowDown from 'assets/images/contingency-images/arrows-down.svg'
import plusIcon from 'assets/images/contingency-images/plus-icon.png'
import magnifyingGlass from 'assets/images/header/magnifying-glass.svg'
import cancel from 'assets/images/header/cancel.svg'

import { Modal, Button } from "react-bootstrap";

function CompareNav() {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const toggleCompareNav = () => {
        setActive(!active)
    }
    return (
        <>
            <div className={`compare-nav ${active ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="cp-item-container col-lg-10">
                            <div className="product-cp-item" onClick={handleShow}>
                                <div className="add-cp-item" data-toggle="modal" data-target="#choose-compare-item">
                                    <img src={plusIcon} alt='plus-icon' />
                                </div>
                                <p>Thêm sản phẩm</p>
                            </div>

                            <div className="product-cp-item" onClick={handleShow}>
                                <div className="add-cp-item" data-toggle="modal" data-target="#choose-compare-item">
                                    <img src={plusIcon} alt='plus-icon' />
                                </div>
                                <p>Thêm sản phẩm</p>
                            </div>

                            <div className="product-cp-item" onClick={handleShow}>
                                <div className="add-cp-item" data-toggle="modal" data-target="#choose-compare-item">
                                    <img src={plusIcon} alt='plus-icon' />
                                </div>
                                <p>Thêm sản phẩm</p>
                            </div>
                        </div>

                        <div className="product-compare-action col-lg-2">
                            <div className="cp-btn-container">
                                <button id="cp-btn" className="btn btn-outline-primary disabled" data-toggle="modal" data-target="#compareResult">So sánh ngay</button>
                                <button id="delete-all-cp" className="btn btn-outline-danger disabled">Xóa hết</button>
                            </div>
                        </div>

                        <div className="toggle-cp-nav" onClick={toggleCompareNav}>
                            <p>So sánh </p>
                            <div className="minimized-cp-nav-icon">
                                <img src={arrowDown} alt="arrows-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm so sánh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="search-cp-items">
                        <h6>Nhập để tìm kiếm</h6>
                        <div className="cp-search-input">
                            <input type="text" placeholder="Tìm kiếm để so sánh" />
                            <div className="glass-img">
                                <img src={magnifyingGlass} alt="magnify-glass"
                                    className="magnify-glass filter-gray" />
                                <img src={cancel} alt="cancel"
                                    className="cancel-search-icon filter-gray" />
                            </div>
                            <div id="cp-search-result"></div>
                        </div>
                    </div>

                    <div className="watched-products">
                        <div>
                            <h6>Điện thoại đã xem</h6>
                            <div id="cp-watched-product-carousel" className="owl-carousel">

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Đóng</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CompareNav