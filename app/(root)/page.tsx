import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Suspense } from "react";
import Loading from "../loading";

const Homepage = async () => {

  const latestProducts = await getLatestProducts();

  return (
    <div className="space-y-8">
      <h1 className="h2-bold">Latest Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductList title="Newest Arrivals" data={latestProducts} />
      </Suspense>
    </div>
  );
};

export default Homepage;
