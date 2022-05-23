import { db } from '../../configs/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductModel from '../models/ProductModel';

export default class ProductController {
    static async getProductList() {
        try {
            const allProducts = [];
            const productQuerySnapshot = await getDocs(collection(db, 'products'));

            productQuerySnapshot.docs.forEach((product) => {
                allProducts.push(new ProductModel(
                    product.get('title'),
                    product.get('description'),
                    Number(product.get('price')),
                    product.get('images'),
                    product.get('category'),
                    product.get('brand'),
                    product.id,
                    product.get('tech_info')
                ));
            });

            return allProducts;
        } catch (error) {
            return null;
        }
    }
    static getProducts = (count, products) => {
        const max = products.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return products.slice(start, start + count)
    }
}