'use client';

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import image1 from "../../../public/images/home/d61ef11b1f46353f.webp";

export const CarouselSection = () => {
    return (
        <>
            <Carousel
                showArrows={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
            >
                <div>
                    <Image src={image1} alt="image 1" style={{ width: "100%" }} />
                </div>
                <div>
                    <Image src={image1} alt="image 1" />
                </div>
                <div>
                    <Image src={image1} alt="image 1" />
                </div>
            </Carousel>
        </>
    )
}