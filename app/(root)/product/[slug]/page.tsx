import ProductImage from "@/components/shared/product/product-image";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSingleProductBySlug } from "@/lib/actions/product.action";
import { notFound } from "next/navigation";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  console.log(slug);
  const product = await getSingleProductBySlug(slug);
  if (!product) notFound();
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Image Coulmn */}
        <div className="col-span-2">
          <ProductImage images={product.images} />
        </div>
        {/* Details Column */}
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <p>
              {product.rating} of {product.numReviews} reviews
            </p>
            <ProductPrice
              price={Number(product.price)}
              className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
            />
          </div>
          <div className="flex flex-col gap-1 mt-10">
            <p className="font-bold">Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/* Action Card */}
        <div className="col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="mb-4 flex justify-between">
                <p className="font-bold">Price:</p>
                <ProductPrice price={Number(product.price)} />
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Status:</p>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="mt-4">
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
