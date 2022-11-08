import React from 'react'

function CompareResult() {
    return (
        <div className="modal fade" id="compareResult" tabIndex="-1" role="dialog"
            aria-labelledby="comapareResultTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Kết quả so sánh</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-bordered" style={{ tableLayout: 'fixed' }}>
                            <thead>
                                <tr>
                                    <th className="table-heading">
                                        <div className="product-card">
                                            <a href="./detail.html?id=${p.id}" className="product-image">
                                                <img src="assetes/images/product-card-images/iphone-13-mini.jpg" alt="${p.name}" />
                                            </a>

                                            <div className="product-content">
                                                <p className="product-name">iPhone 13 promax</p>


                                                <div className="old-price-container">
                                                    <span className="old-price">19900000</span>
                                                    <span className="percent">19900000</span>
                                                </div>

                                                <p className="current-price">-18%</p>


                                                <div className="product-card-bottom">
                                                    <div className="bot-first">
                                                        <div className="rating">
                                                            4.5
                                                        </div>
                                                        <div className="qtt-sold">
                                                            Đã bán: 512
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>

                                    <th className="table-heading">
                                        <div className="product-card">
                                            <a href="./detail.html?id=${p.id}" className="product-image">
                                                <img src="assetes/images/product-card-images/iphone-13-mini.jpg" alt="${p.name}" />
                                            </a>

                                            <div className="product-content">
                                                <p className="product-name">iPhone 13 promax</p>


                                                <div className="old-price-container">
                                                    <span className="old-price">19900000</span>
                                                    <span className="percent">19900000</span>
                                                </div>

                                                <p className="current-price">-18%</p>


                                                <div className="product-card-bottom">
                                                    <div className="bot-first">
                                                        <div className="rating">
                                                            4.5
                                                        </div>
                                                        <div className="qtt-sold">
                                                            Đã bán: 512
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>

                                    <th className="table-heading">
                                        <div className="product-card">
                                            <a href="./detail.html?id=${p.id}" className="product-image">
                                                <img src="assetes/images/product-card-images/iphone-13-mini.jpg" alt="${p.name}" />
                                            </a>

                                            <div className="product-content">
                                                <p className="product-name">iPhone 13 promax</p>


                                                <div className="old-price-container">
                                                    <span className="old-price">19900000</span>
                                                    <span className="percent">19900000</span>
                                                </div>

                                                <p className="current-price">-18%</p>


                                                <div className="product-card-bottom">
                                                    <div className="bot-first">
                                                        <div className="rating">
                                                            4.5
                                                        </div>
                                                        <div className="qtt-sold">
                                                            Đã bán: 512
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                </tr>


                            </thead>

                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareResult