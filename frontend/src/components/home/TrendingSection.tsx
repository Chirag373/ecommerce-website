import React from "react";
import styles from "../../styles/trendingSection.module.css";
import { ProductCard } from "@/common components/ProductCard";
import productImage from "../../../public/images/home/product_image.png";


export const TrendingSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Shop Now</p>
                <h2>Trending</h2>
            </div>
            <div className={styles.productCard}>
                <ProductCard product_image={productImage} product_title={"demo"} product_status={"in stock"} product_price={22} />
                <ProductCard product_image={productImage} product_title={"demo"} product_status={"in stock"} product_price={22} />
                <ProductCard product_image={productImage} product_title={"demo"} product_status={"in stock"} product_price={22} />
                <ProductCard product_image={productImage} product_title={"demo"} product_status={"in stock"} product_price={22} />
                <ProductCard product_image={productImage} product_title={"demo"} product_status={"in stock"} product_price={22} />
            </div>
        </div>
    )
}