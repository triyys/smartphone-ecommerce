import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
    decreaseItem,
    removeItem,
    addItem,
} from "../../redux/shopping-cart/cartItemsSlice";
import { formattingNumber } from "../../utils";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    //   const [item, setItem] = useState(props.item);
    //   const [quantity, setQuantity] = useState(props.item.quantity);

    const updateQuantity = (opt) => {
        if (opt === "+") {
            console.log("item: ", item);
            dispatch(addItem(item));
            //   item += 1
        }
        if (opt === "-") {
            dispatch(decreaseItem(item));
            //   setQuantity((quantity) => quantity - 1);
        }
    };

    const removeCartItem = () => {
        dispatch(removeItem(item.slug));
        // setItem(null);
    };

    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.image01} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${item.slug}`}>{`${item.name}`}</Link>
                </div>
                <div className="cart__item__info__price">
                    {formattingNumber(item.discountedPrice)}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("-")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {item.quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("+")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__del">
                    <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
                </div>
            </div>
        </div>
    );
}