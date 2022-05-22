import React, { useCallback, useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

//import productData from '../assets/fake-data/products'
import ProductController from "../server/controllers/ProductController";

const Product = (props) => {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState();

  const get = async () => {
    await ProductController.getProductList().then((a) => {
      setProductList(a);
      setProduct(a.find((e) => e.slug === props.match.params.slug));
      //   console.log(product);
    });
  };

  useEffect(() => {
    get();
  }, []);
  //const product = getProductBySlug(props.match.params.slug)
  const relatedProducts = []; //productData.getProducts(8)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (product !== undefined) {
    return (
      <Helmet title={product.title}>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  product={item}
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  discountedPrice={Number(item.discountedPrice)}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    );
  } else return <div></div>;
};

export default Product;
