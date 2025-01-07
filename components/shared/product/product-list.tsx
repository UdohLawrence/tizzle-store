const ProductList = ({ data, title }: { data: any; title?: string}) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {data.map((product: any) => (
            <>{ product.name }</>
          ))}
        </div>
      ) : (
          <div>
            <p>No product found</p>
          </div>
      )}
    </div>
  )
}

export default ProductList;