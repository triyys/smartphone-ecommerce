import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";
import DialogCart from "../components/DialogCart";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cartItems.value);

  const totalProducts = useSelector((state) => state.cartItems.totalItems);

  const totalPrice = useSelector((state) => state.cartItems.totalPrice);
  const dispatch = useDispatch();

  let navigate = useNavigate();
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
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
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
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
