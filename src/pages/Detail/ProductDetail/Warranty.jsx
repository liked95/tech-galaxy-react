import React from 'react'

function Warranty() {
    return (
        <div className="warranty">
            <div className="warranty-claim">
                <span className="warranty-icon"><i className="fa-solid fa-money-bill"></i></span>
                <span className="warranty-description">Hư gì đổi nấy 12 tháng tại 999 siêu thị toàn quốc (miễn
                    phí
                    tháng đầu)</span>
            </div>

            <div className="warranty-claim">
                <span className="warranty-icon"><i className="fa-solid fa-calendar-check"></i></span>
                <span className="warranty-description">Bảo hành chính hãng 1 năm tại các trung tâm bảo hành hãng
                </span>
            </div>

            <div className="warranty-claim">
                <span className="warranty-icon"><i className="fa-solid fa-box"></i></span>
                <span className="warranty-description">Sản phẩm nguyên seal, đầy đủ phụ kiện</span>
            </div>
        </div>
    )
}

export default Warranty