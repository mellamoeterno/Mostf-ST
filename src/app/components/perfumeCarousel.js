"use client";

import { Carousel } from "@material-tailwind/react";
import { useRef } from "react";
import Link from "next/link";

export default function ProductCarousel() {

   return (
    <Carousel className="rounded-xl">
      <Link href= 
    "/perfumes/signSweet"
    ><img
        src= "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/sign1_vjli1f.jpg"
      /></Link>
      <Link href= 
    "/perfumes/cocoWomen"
    ><img
        src=     "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/coco1_psfbjr.jpg"
      /></Link>
      <Link href= 
    "/perfumes/hcc"
    ><img
        src= "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/hcc1_q6glzx.jpg"
      /></Link>
    </Carousel>
  );
}