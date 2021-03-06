import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addItem } from '../../redux/shopping-cart/cartItemsSlice'
import { remove } from '../../redux/product-modal/productModalSlice'

import CustomButton from '../CustomButton'
import TechnicalInfoTable from './TechnicalInfoTable'
import { PRIVATE_ROUTE } from '../../constants/paths'
import { categoryDictionary, formattingNumber } from '../../utils'

const ProductView = ({ product }) => {
    const {
        images,
        slug,
        discountedPrice,
        price,
        title,
        description,
        tech_info,
        brand,
        category
    } = product
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [previewImg, setPreviewImg] = useState(images[0])
    const [isExpandedDescription, setIsExpandedDescription] = useState(false)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setQuantity(1)
    }, [])

    useEffect(() => {
        setPreviewImg(images[0])
    }, [images])

    const newItem = useMemo(() => ({
        slug,
        discountedPrice,
        quantity,
        price,
        name: title,
        image01: images[0],
    }), [slug, discountedPrice, quantity, price, title, images])

    const addToCart = () => {
        if (dispatch(addItem(newItem))) {
            alert("Success")
        } else {
            alert("Fail")
        }
    }

    const goToCart = () => {
        if (dispatch(addItem(newItem))) {
            dispatch(remove())
            navigate(PRIVATE_ROUTE.CART)
        } else {
            alert("Fail")
        }
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div
                        className="product__images__list__item"
                        onClick={() => setPreviewImg(images[0])}
                    >
                        <img src={images[0]} alt="" />
                    </div>
                    <div
                        className="product__images__list__item"
                        onClick={() => setPreviewImg(images[1])}
                    >
                        <img src={images[1]} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div
                    className={`product-description ${isExpandedDescription ? "expand" : ""}`}
                >
                    <div className="product-description__title">Chi ti???t s???n ph???m</div>
                    <div
                        className="product-description__content"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    <div className="product-description__toggle">
                        <CustomButton
                            size="sm"
                            onClick={() => setIsExpandedDescription(!isExpandedDescription)}
                        >
                            {isExpandedDescription ? "Thu g???n" : "Xem th??m"}
                        </CustomButton>
                    </div>
                    <div className="product-description__title">Th??ng s??? k??? thu???t</div>
                    <TechnicalInfoTable tech_info={tech_info}/>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {formattingNumber(Number(discountedPrice))}
                    </span>
                    <span className="product-card__price product-card__price__old">
                        <del>{formattingNumber(Number(price))}</del>
                    </span>
                </div>
                <h2 className="product__info__item">H??ng: {brand}</h2>
                <div className="product__info__item">
                    {category.map((item, index) => (
                        <span
                            key={index}
                            className="product__info__item__category"
                        >
                            {categoryDictionary[item]}
                        </span>
                    ))}
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">S??? l?????ng</div>
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <CustomButton onClick={() => addToCart()}>th??m v??o gi???</CustomButton>
                    <CustomButton onClick={() => goToCart()}>mua ngay</CustomButton>
                </div>
            </div>
            <div
                className={`product-description mobile ${isExpandedDescription ? "expand" : ""}`}
            >
                <div className="product-description__title">Chi ti???t s???n ph???m</div>
                <div
                    className="product-description__content"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                <div className="product-description__toggle">
                    <CustomButton
                        size="sm"
                        onClick={() => setIsExpandedDescription(!isExpandedDescription)}
                    >
                        {isExpandedDescription ? "Thu g???n" : "Xem th??m"}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
}

export default ProductView