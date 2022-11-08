
import React, { useEffect, useState } from 'react'
import { formatMoney } from 'utils/index';
import { useSelector, useDispatch } from 'react-redux';
import { vouchers } from 'data/index';
import { updateDiscount, updateGrandTotal, updatePretaxValue, updateTax, updateTotalValue, updateVoucherCode } from 'features/Cart/cart.slice';




function CartTotalCalucation({ renderedCart }) {
    const dispatch = useDispatch()
    let total = 0
    for (let item of renderedCart) {
        if (item.checked) total += item.price * item.count
    }

    const [voucher, setVoucher] = useState(useSelector(state=>state.cartList.voucherCode))
    const [discount, setDiscount] = useState(useSelector(state=>state.cartList.discount))

    const shippingFee = useSelector(state => state.cartList.shippingFee)
    const cart = useSelector(state => state.cartList.items)

    const handleApplyVoucher = () => {
        let voucherValue = voucher.trim().toUpperCase()
        if (voucherValue == "") {
            alert("Mã giảm giá không được để trống");
            setDiscount(0)
            dispatch(updateDiscount(0))
            dispatch(updateVoucherCode(""))
            return;
        }

        if (voucherValue in vouchers) {
            if (total == 0) {
                alert("Không thể áp dụng mã giảm giá khi tổng đơn hàng bằng 0")
                
                return;
            }

            const discountFactor = vouchers[voucherValue].value
            const discountLimit = vouchers[voucherValue].limit
            let discount = total * discountFactor < discountLimit ? -total * discountFactor : -discountLimit
            setDiscount(discount)
            dispatch(updateDiscount(discount))
            dispatch(updateVoucherCode(voucherValue))
            alert("Áp mã giảm giá thành công")
        } else {
            alert("Mã giảm giá không hợp lệ");
            setDiscount(0)
            dispatch(updateDiscount(0))
            dispatch(updateVoucherCode(""))
            return
        }
    }




    useEffect(() => {
        let voucherValue = voucher.trim().toUpperCase()
        if (voucherValue == "") {
            setDiscount(0)
            return;
        }

        if (voucherValue in vouchers) {
            if (total == 0) {
                return;
            }
            const discountFactor = vouchers[voucherValue].value
            const discountLimit = vouchers[voucherValue].limit
            setDiscount(total * discountFactor < discountLimit ? -total * discountFactor : -discountLimit)

        } else {
            setDiscount(0)
            return
        }
    }, [cart])

    let totalValue = total
    let pretaxValue = totalValue + shippingFee + discount
    let tax = pretaxValue * .08
    let grandTotal = pretaxValue * 1.08

    dispatch(updateTotalValue(totalValue))
    dispatch(updatePretaxValue(pretaxValue))
    dispatch(updateTax(tax))
    dispatch(updateGrandTotal(grandTotal))





    return (
        <div className="col-lg-4 total-cart-container">
            <div className="total-value">
                <span>Tiền hàng</span>
                <span>{formatMoney(total)}</span>
            </div>

            <div className="shipment-fee">
                <span>
                    Phí vận chuyển
                    <i data-toggle="tooltip" data-placement="top" data-trigger="click"
                        title="Chọn địa chỉ để hiện phí ship" className="fa-solid fa-circle-question"></i>
                </span>
                <span>{formatMoney(shippingFee)}</span>
            </div>

            <div className="discount">
                <span>Chiết khấu</span>
                <span>{formatMoney(discount)}</span>
            </div>

            <div className="pretax-value">
                <span>Tạm tính</span>
                <span>{formatMoney(pretaxValue)}</span>
            </div>

            <div className="vat">
                <span>VAT (8%)</span>
                <span>{formatMoney(tax)}</span>
            </div>

            <div className="grand-total fw-bold">
                <span>Tổng cộng</span>
                <span>{formatMoney(grandTotal)}</span>
            </div>

            <div className="voucher-container">

                <div className="voucher-field-container">
                    <div className="form-floating">
                        <i data-toggle="tooltip" data-placement="right" data-trigger="click" title=""
                            className="fa-solid fa-circle-question" data-html="true" data-original-title=""></i>
                        <input
                            type="text"
                            className="form-control"
                            id="voucher-field"
                            placeholder="MGG"
                            value={voucher}
                            onChange={e => setVoucher(e.target.value)}
                        />
                        <label htmlFor="voucher-field">Mã giảm giá</label>
                    </div>
                </div>

                <button id="voucher-apply-btn" onClick={handleApplyVoucher}>Áp dụng</button>

            </div>
        </div>
    )
}

export default CartTotalCalucation