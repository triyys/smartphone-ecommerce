import React, { useCallback, useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import CheckBox from "../components/CheckBox";

import productData from "../assets/fake-data/products";
import brand from "../assets/fake-data/brand";
import priceSegment from "../assets/fake-data/priceSegment";
import category from "../assets/fake-data/category";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";
import ProductController from "../server/controllers/ProductController";

const Catalog = () => {
  const initFilter = {
    brand: [],
    priceSegment: [],
    category: [],
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    ProductController.getProductList().then((a) => {
      setProductList(a);
    });
  }, []);

  //const productList = productData.getAllProducts()

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "BRAND":
          setFilter({ ...filter, brand: [...filter.brand, item.brand] });
          break;
        case "PRICE":
          setFilter({
            ...filter,
            priceSegment: [...filter.priceSegment, item.priceSegment],
          });
          break;
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.category],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "BRAND":
          const newBrand = filter.brand.filter((e) => e !== item.brand);
          setFilter({ ...filter, brand: newBrand });
          break;
        case "PRICE":
          const newPrice = filter.priceSegment.filter(
            (e) => e !== item.priceSegment
          );
          setFilter({ ...filter, priceSegment: newPrice });
          break;
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.category
          );
          setFilter({ ...filter, category: newCategory });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.brand.length > 0) {
      temp = temp.filter((e) => filter.brand.includes(e.brand));
    }

    if (filter.priceSegment.length > 0) {
      temp = temp.filter((e) => filter.priceSegment.includes(e.priceSegment));
    }

    if (filter.category.length > 0) {
      temp = temp.filter((e) => {
        const check = e.category.find((category) =>
          filter.category.includes(category)
        );
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");
  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div
            className="catalog__filter__close"
            onClick={() => showHideFilter()}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Hãng</div>
            <div className="catalog__filter__widget__content">
              {brand.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("BRAND", input.checked, item)
                    }
                    checked={filter.brand.includes(item.brand)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Giá</div>
            <div className="catalog__filter__widget__content">
              {priceSegment.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("PRICE", input.checked, item)
                    }
                    checked={filter.priceSegment.includes(item.priceSegment)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Hiệu năng và pin
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.category)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            bộ lọc
          </Button>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
