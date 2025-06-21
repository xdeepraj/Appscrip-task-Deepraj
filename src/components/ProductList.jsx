"use client";
import { useProductList } from "@/context/ProductListContext";

export default function ProductList() {
  const { filteredProducts } = useProductList();

  return (
    <div className="grid">
      {filteredProducts.map((product) => (
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
