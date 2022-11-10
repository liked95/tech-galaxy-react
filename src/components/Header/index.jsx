import { Link, NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";


import techGalaxy from "../../assets/images/header/TECH GALAXY.png";
import TG from "../../assets/images/header/TG.ico";
import magnifyingGlass from "../../assets/images/header/magnifying-glass.svg";
import cancel from "../../assets/images/header/cancel.svg";
import homePage from "../../assets/images/header/homepage.svg";
import smartPhone from "../../assets/images/header/smartphone.svg";
import laptop from "../../assets/images/header/laptop.svg";
import tablet from "../../assets/images/header/tablet.svg";
import promotion from "../../assets/images/header/promotion.svg";
import contact from "../../assets/images/header/contact.svg";
import aboutUs from "../../assets/images/header/about-us.svg";
import DefaultAvatar from '../../assets/images/contingency-images/default-avatar.png'
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import { useContext, useState } from "react";
import Context from "context/index";
import { logout } from "features/Users/user.slice"
import { useDispatch, useSelector } from "react-redux";
import { useGetCartQuery } from "features/Cart/cart.service";
import { useGetHistoryQuery } from "features/History/history.service";
import { formatMoney } from "utils/index";
import {openSideNav} from "../SideNav/sideNav.slice"

function Header() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }


  const auth = useSelector(state => state.userList.auth)



  useGetCartQuery()
  const cart = useSelector(state => state.cartList.items)
  let renderedCart
  if (auth) {
    renderedCart = cart.filter(item => item.userId == auth.id)
  } else {
    renderedCart = []
  }

  useGetHistoryQuery()
  let historyItems=useSelector(state => state.history.purchases)
  if (auth) {
    historyItems=historyItems.filter(item => item.userId == auth.id)
  } else {
    historyItems=[]
  }
  // console.log(historyItems)


  const handleLogout = () => {
    localStorage.setItem('auth', null)
    dispatch(logout())
  }

  const handleOpenSideNav = () => {
    dispatch(openSideNav())
    console.log("click");

  }

  return (
    <header>
      <div className="first-header-row">
        <span id="sidebar-open-btn" onClick={handleOpenSideNav}>
          <i className="fa-solid fa-bars"></i>
        </span>

        <div className="container">
          <Link to="/" className="logo-img">
            <img src={techGalaxy} alt="tech-galaxy" />
          </Link>

          <NavLink to="/" className="mobile-logo-img">
            <img src={TG} alt="tech-galaxy" />
          </NavLink>

          <div className="search-input">
            <input type="text" placeholder="Tìm kiếm" />
            <div className="glass-img">
              <img
                src={magnifyingGlass}
                alt="magnify-glass"
                className="magnify-glass filter-gray"
              />
              <img
                src={cancel}
                alt="cancel"
                className="cancel-search-icon filter-gray"
              />
            </div>
            <div id="search-result"></div>
          </div>

          {!auth && (<div className="login-logout">
            <Link className="login-btn" to="/login">
              Đăng nhập
            </Link>
            <p>|</p>
            <Link className="register-btn" to="/register">
              Đăng ký
            </Link>
          </div>)}

          {auth && (
            <div className='credential-container'>
              <div className="avatar-image">
                <img src={DefaultAvatar} alt="ava-default" />
              </div>
              <div className="arrow-up"></div>
              <ul className="dropdown-container">
                <li>Xin chào <b>{auth.username}</b></li>
                <li onClick={handleShow}>Lịch sử đặt hàng</li>
                <li className="logout-btn" onClick={handleLogout}>Đăng xuất</li>
              </ul>
            </div>
          )}

          <Link className="cart-icon" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-length">{auth ? renderedCart.length : ""}</span>
          </Link>
        </div>
      </div>

      <div className="second-header-row">
        <div className="container">
          <ul className="main-menu">
            <li className="menu-icon">
              <NavLink to="/" end>
                <div className="icon-box">
                  <img src={homePage} alt="homepage" className="filter-white" />
                </div>
                <p>Trang chủ</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={smartPhone} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>Điện thoại</p>
                <ul className="sub-menu">
                  <Link to="smartphone?brands[]=apple">
                    <li className="sub-menu-item">iPhone</li>
                  </Link>
                  <Link to="smartphone?brands[]=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone?brands[]=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone?brands[]=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={tablet} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>máy tính bảng</p>
                <ul className="sub-menu">
                  <Link to="smartphone.html?brand=apple">
                    <li className="sub-menu-item">iPad</li>
                  </Link>
                  <Link to="smartphone.html?brand=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone.html?brand=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone.html?brand=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={laptop} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>laptop</p>
                <ul className="sub-menu">
                  <Link to="smartphone.html?brand=apple">
                    <li className="sub-menu-item">Macbook</li>
                  </Link>
                  <Link to="smartphone.html?brand=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone.html?brand=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone.html?brand=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/promotion">
                <div className="icon-box">
                  <img
                    src={promotion}
                    alt="promotion"
                    className="filter-white"
                  />
                </div>
                <p>khuyến mãi</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/about">
                <div className="icon-box">
                  <img src={aboutUs} alt="about-us" className="filter-white" />
                </div>
                <p>về chúng tôi</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/contact">
                <div className="icon-box">
                  <img src={contact} alt="contact" className="filter-white" />
                </div>
                <p>liên hệ</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lịch sử mua hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {historyItems.length > 0 && historyItems.map((purchase, index) => (
            <div className="history-item mb-3" key={index}>
              <div className="payment-time d-flex">
                <div className="history-date">
                  <i className="fa-solid fa-calendar-days"></i>
                  {purchase.date}
                </div>
                <div className="history-time">
                  <i className="fa-solid fa-clock"></i>
                  {purchase.hour}
                </div>
              </div>
              <div id="payment-item-container" className="position-relative">
                <div className="payment-item-content">
                  <div className="payment-item-title d-flex mb-3">
                    <div className="product fw-bold px-5">Sản phẩm</div>
                    <div className="prices text-end fw-bold px-4">Giá</div>
                    <div className="quantity text-center fw-bold">Số lượng</div>
                    <div className="value text-end fw-bold">Số tiền</div>
                  </div>

                  {purchase.items.map((item, index) => (
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
                        <span>{item.count}</span>
                      </div>
                      <div className="value text-end">{formatMoney(item.price * item.count)}</div>
                    </div>
                  ))}

                </div>
                <div className="fade-btn-container d-none justify-content-center">
                  <button className="expand-history-btn">Xem tất cả</button>
                </div>
              </div>
              <div className="row" id="payment-shipment-info">
                <div className="total-cart-container col-6">
                  <h5 className="text-center mb-3">Tổng quan đơn hàng</h5>
                  <div className="total-value">
                    <span>Tiền hàng</span>
                    <span>{formatMoney(purchase.totalValue)}</span>
                  </div>
                  <div className="shipment-fee">
                    <span>Phí vận chuyển</span>
                    <span>{formatMoney(purchase.shippingFee)}</span>
                  </div>
                  <div className="discount">
                    <span>Chiết khấu</span>
                    <span>{formatMoney(purchase.discount)}</span>
                  </div>
                  <div className="pretax-value">
                    <span>Tạm tính</span>
                    <span>{formatMoney(purchase.pretaxValue)}</span>
                  </div>
                  <div className="vat">
                    <span>VAT (8%)</span>
                    <span>{formatMoney(purchase.tax)}</span>
                  </div>
                  <div className="grand-total fw-bold">
                    <span>Tổng cộng</span>
                    <span>{formatMoney(purchase.grandTotal)}</span>
                  </div>
                </div>
                <div className="receiver-info col-6">
                  <h5 className="text-center mb-3">Thông tin người nhận</h5>
                  <p>Họ và tên: <span id="order-name">{purchase.customerName}</span></p>
                  <p>Số điện thoại <span id="order-phone">{purchase.customerPhone}</span></p>
                  <p>Địa chỉ: <span id="order-address">{purchase.customerAddress}, {purchase.ward}, {purchase.district}, {purchase.province}</span></p>
                  <p>Phương thức thanh toán: <span id="order-payment-method">{purchase.paymentValue}</span></p>
                </div>
              </div>
            </div>
          ))}

          {historyItems.length == 0 && <p>Bạn chưa thanh toán lần nào</p>}
        </Modal.Body>

        <Modal.Footer>
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Đóng</button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}

export default Header;
