"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt="product images"
        className="min-h-[300] object-cover object-center"
      />
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "border cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500",
            )}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={images[current]}
              width={100}
              height={100}
              alt="product images"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
