import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
    decreaseItem,
    removeItem,
    addItem,
} from "../../redux/shopping-cart/cartItemsSlice";
import { formattingNumber } from "../../utils";

export default function CartItem({ item }) {
    const { image01, slug, name, discountedPrice, quantity } = item
    const dispatch = useDispatch();

    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={image01} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${slug}`}>{`${name}`}</Link>
                </div>
                <div className="cart__item__info__price">
                    {formattingNumber(discountedPrice)}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => dispatch(decreaseItem(item))}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => dispatch(addItem(item))}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__del">
                    <i className="bx bx-trash" onClick={() => dispatch(removeItem(item))}></i>
                </div>
            </div>
        </div>
    );
}