import React from 'react'
import vnpayLogo from "assets/images/payment-supplier/vnpay.png"
import tpbankLogo from "assets/images/payment-supplier/tpbank.png"
import eximbankLogo from "assets/images/payment-supplier/eximbank.png"

function PaymentPromotion() {
    return (
        <div className="payment-box">
            <h4>Ưu đãi thanh toán</h4>
            <div className="payment-promotion no-scrollbar">
                <div className="payment-company">
                    <div className="payment-logo">
                        <img src={vnpayLogo} alt={vnpayLogo}/>
                    </div>
                    <p className="payment-discount">
                        Giảm <b>500.000đ</b>
                    </p>
                    <p className="discount-item">Đối với iPhone</p>
                </div>

                <div className="payment-company">
                    <div className="payment-logo">
                    <img src={tpbankLogo} alt={tpbankLogo}/>
                    </div>
                    <p className="payment-discount">
                        Giảm <b>300.000đ</b>
                    </p>
                    <p className="discount-item">Sản phẩm từ 8tr</p>
                </div>

                <div className="payment-company">
                    <div className="payment-logo">
                    <img src={eximbankLogo} alt={eximbankLogo}/>
                    </div>
                    <p className="payment-discount">
                        Giảm <b>200.000đ</b>
                    </p>
                    <p className="discount-item">Sản phẩm từ 3tr</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentPromotion