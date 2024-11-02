import React from "react";
import styles from "../styles/productCard.module.css";
import Image, { StaticImageData } from "next/image";

interface Product {
    product_image: StaticImageData,
    product_title: string,
    product_status: string,
    product_price: number,
}

export const ProductCard: React.FC<Product> = ({ product_image, product_title, product_status, product_price }) => {
    return (
        <div className={styles.container}>
            <Image src={product_image} alt="image 1" />
            <h3>{product_title}</h3>
            <div className={styles.productStatusPriceContainer}>
                <span>{product_status}</span>
                <p>{product_price}</p>
            </div>
        </div>
    )
}