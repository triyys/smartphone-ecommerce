import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
// import { capitalize } from "@mui/material";
import category from "../assets/fake-data/category";

const ProductView = (props) => {
  const dispatch = useDispatch();
  let image01 = null;
  let image02 = null;
  let product = props.product;
  //console.log(product.images)

  if (product === undefined) {
    product = {
      title: "",
      discountedPrice: "",
      images: [
        "https://cdn.tgdd.vn/Files/2016/12/09/923744/khongxacdinh_213x379.jpg",
        "https://cdn.tgdd.vn/Files/2016/12/09/923744/khongxacdinh_213x379.jpg",
      ],
      categorySlug: "",
      slug: "",
      size: [],
      description: "",
      tech_info: {},
    };
  }

  //console.log(typeof(product.images), product.images)

  const [previewImg, setPreviewImg] = useState(product.images[0]);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.images[0]);
    setQuantity(1);
    setSize(undefined);
  }, [product]);

  const addToCart = () => {
    let newItem = {
      slug: product.slug,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      price: product.price,
      name: product.title,
      image01: product.images[0],
    };
    if (dispatch(addItem(newItem))) {
      alert("Success");
    } else {
      alert("Fail");
    }
  };

  const goToCart = () => {
    let newItem = {
      slug: product.slug,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      price: product.price,
      name: product.title,
      image01: product.images[0],
    };
    if (dispatch(addItem(newItem))) {
      dispatch(remove());
      props.history.push("/cart");
    } else {
      alert("Fail");
    }
  };
  const styletable = {
    width: 100,
  };
  const stylecolleft = {
    width: 30,
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.images[0])}
          >
            <img src={product.images[0]} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.images[1])}
          >
            <img src={product.images[1]} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
          <div className="product-description__title">Thông số kỹ thuật</div>
          <table className="product-description__content expand">
            <tr>
              <th>Hệ điều hành</th>
              <td>{product.tech_info.OS}</td>
            </tr>
            <tr>
              <th>RAM</th>
              <td>{product.tech_info.RAM}</td>
            </tr>
            <tr>
              <th>ROM</th>
              <td>{product.tech_info.ROM}</td>
            </tr>
            <tr>
              <th>Bluetooth</th>
              <td>{product.tech_info.bluetooth}</td>
            </tr>
            <tr>
              <th>Chipset</th>
              <td>{product.tech_info.chipset}</td>
            </tr>
            <tr>
              <th>Camera trước</th>
              <td>{product.tech_info.front_camera}</td>
            </tr>
            <tr>
              <th>Camera sau</th>
              <td>{product.tech_info.rear_camera}</td>
            </tr>
            <tr>
              <th>Dung lượng pin</th>
              <td>{product.tech_info.pin}</td>
            </tr>
            <tr>
              <th>Độ phân giải</th>
              <td>{product.tech_info.screen_resolution}</td>
            </tr>
            <tr>
              <th>Kích cỡ màn hình</th>
              <td>{product.tech_info.screen_size}</td>
            </tr>
            <tr>
              <th>Công nghệ màn hình</th>
              <td>{product.tech_info.screen_tech}</td>
            </tr>
            <tr>
              <th>Khe sim</th>
              <td>{product.tech_info.sim}</td>
            </tr>
            <tr>
              <th>Kích cỡ</th>
              <td>{product.tech_info.size}</td>
            </tr>
            <tr>
              <th>Trọng lượng</th>
              <td>{product.tech_info.weight}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(Number(product.discountedPrice))}
          </span>
          <span className="product-card__price__old">
            <del>{numberWithCommas(Number(product.price))}</del>
          </span>
        </div>
        <h2 className="product__info__item">Hãng: {product.brand}</h2>
        <h2 className="product__info__item">{product.category}</h2>

        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
