import React, {useEffect} from 'react'
import { motion } from 'framer-motion'

import zFold1 from '../../assets/images/promotion/z-fold3-1.jpg'
import zFold2 from '../../assets/images/promotion/z-fold3-2.jpg'
import { PAGE_TRANSITION_DURATION } from 'utils/index'

function Promotion() {

    useEffect(() => {
        document.title = 'Khuyến mãi'
    }, [])
    return (
        <motion.div
            className="promotion"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}>
            <div className="container">
                <h2>Samsung kỳ vọng doanh số dòng Galaxy Z màn hình gập sẽ vượt Galaxy S series vào năm 2025</h2>
                <p>Gần đây, Samsung đã chính thức trình làng bộ đôi smartphone gập tiếp theo – Galaxy Z Flip4 và Z Fold4 5G thu hút đông đảo sự quan tâm của truyền thông. Bên cạnh đó, hiện nay, gã khổng lồ công nghệ Hàn Quốc còn đang giữ vị trí số 1 trong phân khúc điện thoại màn hình gập toàn cầu. Bởi vậy, không quá bất ngờ khi Samsung đang rất kỳ vọng doanh số bội thu ở mảng này.</p>

                <div className="promotion-image">
                    <img src={zFold1} alt={zFold1} />
                </div>

                <p>TM Roh, Chủ tịch mảng Kinh doanh Trải nghiệm Di động của Samsung, cho biết: “<i>Đến năm 2025, các lô hàng smartphone màn hình gập sẽ chiếm hơn 50% tổng lô hàng điện thoại thông minh cao cấp của Samsung. Màn hình gập sẽ trở thành tiêu chuẩn mới của điện thoại thông minh</i>”.</p>

                <p>Từ năm 2020 đến năm 2021, phân khúc điện thoại màn hình gập đạt doanh số 0 triệu chiếc, tăng 309% theo dữ liệu từ Omdi. Và tất nhiên, dòng Galaxy Z Series của Samsung chiếm phần lớn trong số đó (khoảng 7.1 triệu chiếc). Đặc biệt, chiếc Galaxy Z Flip có giá cả phải chăng hơn nên được nhiều khách hàng ưa chuộng hơn.</p>

                <div className="promotion-image">
                    <img src={zFold2} alt={zFold2} />
                </div>

                <p>Các mẫu Galaxy Z Flip4 và Z Fold4 5G mới được công bố về cơ bản có giá tương đương với các phiên bản tiền nhiệm, thậm chí còn rẻ hơn ở một số phiên bản. Bởi vậy, tương lai doanh thu vượt mặt dòng Galaxy S series mà Samsung hướng đến rất có thể sẽ thành hiện thực.</p>
            </div>
        </motion.div>
    )
}

export default Promotion