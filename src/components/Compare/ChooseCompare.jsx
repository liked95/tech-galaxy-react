import React from 'react'

function ChooseCompare() {
    return (
        <div className="modal fade" id="choose-compare-item" tabIndex="-1" role="dialog"
            aria-labelledby="choose-compare-itemTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="choose-compare-item-title">Thêm so sánh</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="search-cp-items">
                            <h6>Nhập để tìm kiếm</h6>
                            <div className="cp-search-input">
                                <input type="text" placeholder="Tìm kiếm để so sánh" />
                                <div className="glass-img">
                                    <img src="../static/images/header/magnifying-glass.svg" alt="magnify-glass"
                                        className="magnify-glass filter-gray" />
                                    <img src="../static/images/header/cancel.svg" alt="cancel"
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCompare