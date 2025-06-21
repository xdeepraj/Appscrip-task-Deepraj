"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ProductListContext = createContext();

export function ProductListProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    priceRange: [0, 1000],
  });
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store",
        });
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data); // default to all
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    filtered = filtered.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <ProductListContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        setFilters,
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}

export function useProductList() {
  return useContext(ProductListContext);
}
