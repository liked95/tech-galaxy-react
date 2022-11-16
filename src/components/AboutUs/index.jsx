import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_TRANSITION_DURATION } from "utils/index";

import SmartPhone1 from '../../assets/images/about-us/smartphone1.jpg'
import SmartPhone2 from '../../assets/images/about-us/smartphone2.jpg'

function AboutUs() {
    return (
        <motion.div
            className="about-us"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}>
            <div className="container">
                <h3>Giới thiệu về Tech Galaxy</h3>
                <div className="row">
                    <div className="introduction">
                        <h5 className="about-sub-title">Giới thiệu chung</h5>
                        <p className="about-para">Công ty Cổ phần Xây dựng và Đầu tư thương mại Tech Galaxy sở hữu chuỗi cửa
                            hàng Tech Galaxy - là nhà bán lẻ hàng đầu, chuyên cung cấp các sản phẩm công nghệ chính hãng tại
                            thị trường Việt Nam. Năm 2000, Tech Galaxy được thành lập, từng bước trở thành địa chỉ đáng tin
                            cậy của người tiêu dùng Việt. Với khẩu hiệu “Nếu những gì chúng tôi không có, nghĩa là bạn không
                            cần”, chúng tôi đã, đang và sẽ tiếp tục nỗ lực đem đến các sản phẩm công nghệ chính hãng đa
                            dạng, phong phú đi kèm mức giá tốt nhất phục vụ nhu cầu của quý khách hàng.
                        </p>

                        <div className="about-image">
                            <img src={SmartPhone1} alt={SmartPhone1} />
                        </div>
                    </div>

                    <div className="development-history">
                        <h5 className="about-sub-title">Lịch sử hình thành</h5>
                        <p className="about-para">Lĩnh vực hoạt động chính của công ty bao gồm: mua bán sửa chữa các thiết bị
                            liên quan đến điện thoại di động, thiết bị kỹ thuật số và các lĩnh vực liên quan đến thương mại
                            điện tử. Bằng trải nghiệm về thị trường điện thoại di động từ đầu những năm 2003, cùng với việc
                            nghiên cứu kỹ tập quán mua hàng của khách hàng Việt Nam, TechGalaxy đã xây dựng một phương thức
                            kinh doanh chưa từng có ở Việt Nam trước đây. Công ty đã xây dựng được một phong cách tư vấn bán
                            hàng đặc biệt nhờ vào một đội ngũ nhân viên chuyên nghiệp và trang web www.techgalaxy.com hỗ trợ
                            như là một cẩm nang về điện thoại di động và một kênh thương mại điện tử hàng đầu tại Việt Nam.
                        </p>

                        <div className="about-image">
                            <img src={SmartPhone2} alt={SmartPhone2} />
                        </div>

                        <p className="about-para">
                            Hiện nay, số lượng điện thoại bán ra trung bình tại TechGalaxy khoảng 300.000 máy/tháng chiếm
                            khoảng 15% thị phần điện thoại chính hãng cả nước. Trung bình một tháng bán ra hơn 10.000 laptop
                            trở thành Nhà bán lẻ bán ra số lượng laptop lớn nhất cả nước.Việc bán hàng qua mạng và giao hàng
                            tận nhà trên phạm vi toàn quốc đã được triển khai từ đầu năm 2007, hiện nay lượng khách hàng mua
                            laptop thông qua website www.techgalaxy.com và tổng đài 1900.1001 đã tăng lên đáng kể, trung
                            bình 5.000 - 6.000 đơn hàng mỗi tháng. Đây là một kênh bán hàng tiềm năng và là một công cụ hữu
                            hiệu giúp các khách hàng ở những khu vực xa mua được một sản phẩm ưng ý khi không có điều kiện
                            xem trực tiếp sản phẩm. Website www.techgalaxy.com là website thương mại điện tử lớn nhất Việt
                            Nam với số lượng truy cập hơn 1.200.000 lượt ngày, cung cấp thông tin chi tiết về giá cả, tính
                            năng kĩ thuật của hơn 500 model điện thoại và 200 model laptop của tất cả các nhãn hiệu chính
                            thức tại Việt Nam. TechGalaxy đã nhận được nhiều giải thưởng do người tiêu dùng cũng như các đối
                            tác bình chọn trong nhiều năm liền.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default AboutUs