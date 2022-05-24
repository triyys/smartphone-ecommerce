import { useState, useEffect } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/Product/ProductCard";
import ProductView from "../components/Product/ProductView";

//import productData from '../assets/fake-data/products'
import ProductController from "../server/controllers/ProductController";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState();
    const { slug } = useParams();
    
    useEffect(() => {
        ProductController
            .getProductById(slug)
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [slug]);

    const relatedProducts = [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <>
            {product && <Helmet title={product.title}>
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
            </Helmet>}
        </>
    );
}

export default Product;