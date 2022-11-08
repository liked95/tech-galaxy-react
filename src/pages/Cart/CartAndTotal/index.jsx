import Context from 'context/index'
import { useGetCartQuery } from 'features/Cart/cart.service'
import React from 'react'
import { useSelector } from '../../../../node_modules/react-redux/es/exports'
import CartItem from './CartItem'
import CartTotalCalucation from './CartTotalCalucation'

function CartAndTotal() {
  const auth = useSelector(state => state.userList.auth)
 

  useGetCartQuery()
  const cart = useSelector(state => state.cartList.items)

  let userId = auth.id
  const renderedCart = cart.filter(item => item.userId == userId)



  return (
    <div className="cart-and-total">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 cart-detail">
            <div className="cart-title">
              <input type="checkbox" name="toggle-all" id="toggle-all" />
              <div className="product">Sản phẩm</div>
              <div className="prices">Giá</div>
              <div className="quantity">Số lượng</div>
              <div className="value">Số tiền</div>
              <div className="delete-all">Xóa</div>
            </div>

            <div className="cart-content">
              {renderedCart.length == 0 && <p>Bạn chưa mua sản phẩm nào. Tiếp tục mua và quay lại đây nhé</p>}
              {renderedCart.length > 0 && renderedCart.map((item, index) => <CartItem key={index} item={item} />)}

            </div>

          </div>



          <CartTotalCalucation renderedCart={renderedCart} />
        </div>
      </div>
    </div>
  )
}

export default CartAndTotal