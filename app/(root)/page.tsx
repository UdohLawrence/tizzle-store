import ProductList from "@/components/shared/product/product-list";
//import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {

  const latestProducts = await getLatestProducts();

  return (
    <div className="space-y-8">
      <h1 className="h2-bold">Latest Products</h1>
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  );
};

export default Homepage;
