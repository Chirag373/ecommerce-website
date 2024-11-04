import React from "react";
import styles from "../../styles/trendingSection.module.css";
import { ProductCard } from "@/common components/ProductCard";
import productImage from "../../../public/images/home/product_image.png";


export const RecommendationSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Recently viewed</h2>
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