import React, { useEffect } from 'react'
import MapMaker from "../../assets/images/contact/mapmaker.svg"
import Email from "../../assets/images/contact/email.svg"
import Phone from "../../assets/images/contact/phone.svg"
import { Link } from 'react-router-dom'

function Contact() {

    useEffect(() => {
        document.title = 'Liên hệ'
    }, [])
    return (
        <div className="contact">
            <div className="container">
                <h3>Liên hệ</h3>
                <div className="row">
                    <div className="contact-detail col-12 col-lg-6">
                        <div className="description">
                            <p>Công ty cổ phần TechGalaxy được thành lập vào năm 2020 với tư cách là nhà bán lẻ ủy quyền
                                chính thức của Apple tại Việt Nam. Các sản phẩm Apple chính hãng VN/A do Apple Việt Nam phân
                                phối được bán tại hệ thống TechGalaxy với mức giá tốt nhất thị trường cùng chế độ bảo hành
                                uy tín. </p>
                            <p>Trong tương lai, TechGalaxy sẽ tiếp tục mở rộng hệ thống chi nhánh, hướng tới mục tiêu có mặt
                                tại 63 tỉnh thành trên toàn quốc. Đồng thời, nâng cao chất lượng dịch vụ, hạn chế những rủi
                                ro, lắng nghe và tiếp thu góp ý của quý khách hàng nhằm đem đến trải nghiệm tốt nhất khi mua
                                sắm tại TechGalaxy. </p>
                        </div>

                        <div className="coms-detail">
                            <div className="coms-item">
                                <div className="coms-image">
                                    <img src={MapMaker} alt={MapMaker} className="filter-gray" />
                                </div>
                                <Link to="#" className="coms-para">1 Nguyễn Trãi, Thanh Xuân, Hà Nội</Link>
                            </div>

                            <div className="coms-item">
                                <div className="coms-image">
                                    <img src={Email} alt={Email} className="filter-gray" />
                                </div>
                                <Link to="#" className="coms-para">techgalaxy@gmail.com</Link>
                            </div>

                            <div className="coms-item">
                                <div className="coms-image">
                                    <img src={Phone} alt={Phone} className="filter-gray" />
                                </div>
                                <Link to="#" className="coms-para">+84 38 663 9002</Link>
                            </div>
                        </div>
                    </div>

                    <div className="map-container col-12 col-lg-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1457.0387693008847!2d105.80802366931648!3d20.99621093620442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac96ec00978f%3A0x3cdc492e337c0044!2zMSDEkC4gTmd1eeG7hW4gVHLDo2ksIFRoxrDhu6NuZyDEkMOsbmgsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1660035557005!5m2!1sen!2s"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact