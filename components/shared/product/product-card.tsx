import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            priority={true}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="px-4 grid gap-4">
        <p className="text-sm font-light">{product.brand}</p>
        <h2 className="font-bold">{product.name}</h2>
        <div className="flex items-center justify-between">
          <p>{product.rating} stars</p>
          <ProductPrice price={Number(product.price)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
