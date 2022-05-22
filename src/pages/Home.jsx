import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";

import banner from "../assets/images/banner.jpg";

import PolicyController from "../server/controllers/PolicyController";
import ProductController from "../server/controllers/ProductController";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    ProductController.getProductList().then((a) => {
      setProductList(a);
    });
  }, []);

  const [policies, setPolicies] = useState([]);

  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policies.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {ProductController.getProducts(4, productList).map(
              (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.images[0]}
                  img02={item.images[1]}
                  name={item.title}
                  price={Number(item.price)}
                  discountedPrice={Number(item.discountedPrice)}
                  slug={item.slug}
                />
              )
            )}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {ProductController.getProducts(8, productList).map(
              (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.images[0]}
                  img02={item.images[1]}
                  name={item.title}
                  price={Number(item.price)}
                  discountedPrice={Number(item.discountedPrice)}
                  slug={item.slug}
                />
              )
            )}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {ProductController.getProducts(12, productList).map(
              (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.images[0]}
                  img02={item.images[1]}
                  name={item.title}
                  price={Number(item.price)}
                  discountedPrice={Number(item.discountedPrice)}
                  slug={item.slug}
                />
              )
            )}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
