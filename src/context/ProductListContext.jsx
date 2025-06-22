"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ProductListContext = createContext();

export function ProductListProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    priceRange: [0, 10000],
  });
  const [showFilter, setShowFilter] = useState(true);
  const [sortType, setSortType] = useState("Recommended");

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

    switch (sortType) {
      case "PRICE: HIGH TO LOW":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "PRICE: LOW TO HIGH":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "NEWEST FIRST":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "POPULAR":
        filtered.sort((a, b) => b.rating?.count - a.rating?.count);
        break;
      case "RECOMMENDED":
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products, sortType]);

  return (
    <ProductListContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        setFilters,
        showFilter,
        setShowFilter,
        sortType,
        setSortType,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}

export function useProductList() {
  return useContext(ProductListContext);
}
