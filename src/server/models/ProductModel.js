export default class ProductModel {
  title;
  description;
  price;
  discountedPrice;
  images;
  category;
  brand;
  priceSegment;
  slug;
  tech_info;
  constructor(
    title,
    description,
    price,
    images,
    category,
    brand,
    slug,
    tech_info
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountedPrice = Math.round(price * 0.8);
    this.images = images;
    this.category = category;
    this.brand = brand;
    this.slug = slug;
    this.tech_info = tech_info;

    if (this.price < 5000000) {
      this.priceSegment = "under-5";
    } else if (this.price >= 5000000 && this.price < 10000000) {
      this.priceSegment = "5-to-10";
    } else if (this.price >= 10000000 && this.price < 20000000) {
      this.priceSegment = "10-to-20";
    } else {
      this.priceSegment = "over-20";
    }
  }
}
