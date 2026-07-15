import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.action";

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const metadata = {
  title: "Home",
};
const HomePage = async () => {
  // await delay(1000);
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
