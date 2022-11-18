import Context from 'context/index'
import { useDecreaseItemCountMutation, useDeleteItemMutation, useIncreaseItemCountMutation, useToggleCheckMutation } from 'features/Cart/cart.service'
import { useGetUsersQuery } from 'features/Users/users.service'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { formatMoney } from 'utils/index'
import { useSelector } from '../../../../node_modules/react-redux/es/exports'

function CartItem({ item }) {
    // console.log(item);
    const { name, color, count, alterOption, image, price, oldPrice, checked, productID, userId, id } = item
    const [toggleCheck] = useToggleCheckMutation()
    const [increaseItemCount] = useIncreaseItemCountMutation()
    const [decreaseItemCount] = useDecreaseItemCountMutation()
    const [deleteItem] = useDeleteItemMutation()

    useGetUsersQuery()
    const auth = useSelector(state => state.userList.auth)
    


    const handleToggleChecked = (id) => {
        const updatedItem = {
            productID,
            userId: auth.id,
            alterOption,
            color,
            count,
            name,
            price,
            oldPrice,
            image,
            checked: !checked,
            id
        }
        toggleCheck(updatedItem)
    }

    const handleDecreaseCount = (id) => {
        if (count <= 1) return;

        const updatedItem = {
            productID,
            userId: auth.id,
            alterOption,
            color,
            count: count - 1,
            name,
            price,
            oldPrice,
            image,
            checked,
            id
        }
        decreaseItemCount(updatedItem)

    }

    const handleIncreaseCount = (id) => {
        const updatedItem = {
            productID,
            userId: auth.id,
            alterOption,
            color,
            count: count + 1,
            name,
            price,
            oldPrice,
            image,
            checked,
            id
        }
        increaseItemCount(updatedItem)
    }

    const handleDeleteCartItem = (id) => {
        // console.log(id);
        deleteItem(id)
    }

    return (
        <div className="cart-item">

            <input type="checkbox" className="choose-item" checked={checked} onChange={e => handleToggleChecked(id)} />

            <Link to={`/detail?id=${productID}`} className="product">
                <div className="cart-item-image">
                    <img src={process.env.PUBLIC_URL + `/publicImages/thumnail-carousel/${image}`} alt={image} />
                </div>

                <div className="cart-item-detail">
                    <div className="product-name">{name}</div>
                    <div className="product-attr">({color}, {alterOption})</div>
                </div>
            </Link>

            <div className="prices">
                <div className="new-price">{formatMoney(price)}</div>
                <div className="old-price">{formatMoney(oldPrice)}</div>
            </div>

            <div className="quantity">
                <div
                    className={`value-button ${count==1 ? 'disabled' : ''}`}
                    id="decrease"
                    value="Decrease Value"
                    onClick={e => handleDecreaseCount(id)}
                >
                    -
                </div>
                <span type="number" id="number">{count}</span>
                <div
                    className="value-button"
                    id="increase"
                    value="Increase Value"
                    onClick={e => handleIncreaseCount(id)}
                >
                    +
                </div>
            </div>

            <div className="value">{formatMoney(price * count)}</div>

            <div className="delete-item" onClick={() => handleDeleteCartItem(id)}>
                <i className="fa-solid fa-circle-minus"></i>
            </div>
        </div>
    )
}

export default CartItem