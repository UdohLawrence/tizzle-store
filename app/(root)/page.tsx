import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {

  return (
    <div className="space-y-8">
      <h1 className="h2-bold">Latest Products</h1>
      <ProductList title="Newest Arrivals" data={sampleData.products} />
    </div>
  );
};

export default Homepage;
