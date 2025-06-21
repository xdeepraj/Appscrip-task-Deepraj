export default function ProductList(products) {
  // console.log("products from productList: ", products);
  return (
    <div className="grid">
      {products.products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
