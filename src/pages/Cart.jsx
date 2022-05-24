import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import DialogCart from "../components/DialogCart";
import { formattingNumber } from "../utils";

const Cart = () => {
    const { value, totalItems, totalPrice } = useSelector((state) => state.cartItems);
    // useEffect(() => {
    //   if (
    //     props.location.search.includes("resultCode=0") ||
    //     props.location.search.includes("resultCode=0")
    //   ) {
    //     dispatch(removeItem());
    //     navigate.push("/");
    //   }
    // }, []);

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Bạn đang có {totalItems} sản phẩm trong giỏ hàng</p>
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
                    {value.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </Helmet>
    );
}

export default Cart;