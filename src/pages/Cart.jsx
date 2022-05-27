import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import { DialogCart, CartItem } from '../components/Cart'
import { formattingNumber } from '../utils'
import { useMemo } from 'react'

export default function Cart() {
    const { cartItems } = useSelector((state) => state.cartItemsSlice)

    const totalItemQuantity = useMemo(() => (cartItems.reduce(
        (total, item) => (total + item.quantity),
        0
    )), [cartItems])
    const totalPrice = useMemo(() => (cartItems.reduce(
        (total, item) => (total + item.discountedPrice * item.quantity),
        0
    )), [cartItems])

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Bạn đang có {totalItemQuantity} sản phẩm trong giỏ hàng</p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span>{" "}
                            <span>{formattingNumber(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <DialogCart totalPrice={totalPrice} />
                        <Link to="/catalog">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {cartItems.map((cartItem, index) => (
                        <CartItem item={cartItem} key={index} />
                    ))}
                </div>
            </div>
        </Helmet>
    )
}