import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-column col-lg-3 col-sm-6">
            <h2>Tech Galaxy</h2>
            <Link to="#">GPKD: 001100431112</Link>
            <Link to="#">Địa chỉ: Thanh Xuân - Hà Nội</Link>
            <Link to="#">Ngày thành lập: 14 - 07 - 2022</Link>
            <Link to="#">Chủ sở hữu: Vũ Hoài Sơn</Link>
          </div>

          <div className="footer-column col-lg-3 col-sm-6">
            <h2>Dịch vụ hỗ trợ</h2>
            <Link to="#">Dịch vụ hỗ trợ</Link>
            <Link to="#">Đặt hàng và thanh toán</Link>
            <Link to="#">Chính sách bảo hành</Link>
            <Link to="#">Bảo hành mở rộng</Link>
            <Link to="#">Giải quyết khiếu nại</Link>
          </div>

          <div className="footer-column col-lg-3 col-sm-6">
            <h2>Đối tác thương hiệu</h2>
            <Link to="#">Apple</Link>
            <Link to="#">Samsung</Link>
            <Link to="#">Xiaomi</Link>
            <Link to="#">Huawei</Link>
            <Link to="#">Microsoft</Link>
          </div>

          <div className="footer-column col-lg-3 col-sm-6">
            <h2>Đối tác thanh toán</h2>
            <Link to="#">Vietcombank</Link>
            <Link to="#">VNPAY</Link>
            <Link to="#">Mocagrab</Link>
            <Link to="#">Momo</Link>
            <Link to="#">Zalopay</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
