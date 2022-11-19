import { Link, NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";


import techGalaxy from "../../assets/images/header/TECH GALAXY.png";
import TG from "../../assets/images/header/TG.ico";
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
import { openSideNav, turnBackDropOn } from "../SideNav/sideNav.slice"
import Search from "./Search";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuItem from "./MenuItemComponent";
import { togglePurchaseHistory } from "features/History/history.slice";

function Header() {
  const dispatch = useDispatch()
  const show = useSelector(state=>state.history.isPurchaseHistoryOpen)
  const handleClose = () => {
    dispatch(togglePurchaseHistory())
  }

  const handleShow = () => {
    dispatch(togglePurchaseHistory())
    setShowAuth(false)
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
  let historyItems = useSelector(state => state.history.purchases)
  if (auth) {
    historyItems = historyItems.filter(item => item.userId == auth.id)
  } else {
    historyItems = []
  }
  // console.log(historyItems)


  const handleLogout = () => {
    localStorage.setItem('auth', null)
    dispatch(logout())
  }

  const handleOpenSideNav = () => {
    dispatch(openSideNav())
    dispatch(turnBackDropOn())
    // console.log("click");

  }

  // menu khi click vao avatar
  const [showAuth, setShowAuth] = useState(false)
  const handleToggleAuth = () => {
    setShowAuth(!showAuth)
  }

  const authMenuRef = useRef()

  useEffect(() => {
    const handleCloseAuthMenu = (e) => {
      if (!authMenuRef.current?.contains(e.target)) {
        setShowAuth(false)
      }
    }

    document.addEventListener('click', handleCloseAuthMenu)
    return () => document.removeEventListener('click', handleCloseAuthMenu)
  }, [])

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

          <Search />

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
            <div className='credential-container' ref={authMenuRef}>
              <div className="avatar-image" onClick={handleToggleAuth}>
                <img src={DefaultAvatar} alt="ava-default" />
              </div>

              {showAuth &&
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: "-100%", height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "100%" }}
                    exit={{ opacity: 0, y: "-100%", height: 0 }}
                  >
                    <div className="arrow-up"></div>
                    <ul className="dropdown-container">
                      <li>Xin chào <b>{auth.username}</b></li>
                      <li onClick={handleShow}>Lịch sử đặt hàng</li>
                      <li className="logout-btn" onClick={handleLogout}>Đăng xuất</li>
                    </ul>
                  </motion.div>
                </AnimatePresence>}
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

          
            <MenuItem image={smartPhone} title = 'Điện thoại' />
            <MenuItem image={tablet} title = 'Tablet' />
            <MenuItem image={laptop} title = 'Laptop' />

           

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
                  <i className="fa-solid fa-calendar-days"></i>&nbsp;
                  {purchase.date}
                </div>
                <div className="history-time">
                  <i className="fa-solid fa-clock"></i>&nbsp;
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
