import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

// import { set } from "../redux/product-modal/productModalSlice";
import { addItem } from "../../redux/shopping-cart/cartItemsSlice";

import Button from "../Button";

import { formattingNumber } from "../../utils";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const product = {
    name: props.name,
    price: props.price,
    slug: props.slug,
    discountedPrice: props.discountedPrice,
    quantity: 1,
    image01: props.img01,
  };
  const handleAddtoCart = () => {
    if (dispatch(addItem(product))) {
      alert("Success");
    } else {
      alert("Fail");
    }
  };
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {formattingNumber(props.discountedPrice)}
          <span className="product-card__price__old">
            <del>{formattingNumber(props.price)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          onClick={handleAddtoCart}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
