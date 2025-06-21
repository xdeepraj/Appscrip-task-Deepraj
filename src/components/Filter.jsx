"use client";

import { useState } from "react";
import styles from "./Filter.module.css";
import { useProductList } from "@/context/ProductListContext";

export default function Filter() {
  const { filteredProducts, setFilters } = useProductList();
  const [showFilter, setShowFilter] = useState(true);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>{filteredProducts.length} ITEMS</h3>

        <div className={styles.filter} onClick={toggleFilter}>
          <img
            src={
              showFilter ? "/images/arrow-left.png" : "/images/arrow-right.png"
            }
            alt="toggle-arrow"
          />
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </div>
      </div>

      <div className={styles.right}>
        RECOMMENDED
        <img src="/images/arrow-down.png" alt="arrow-left" />
      </div>
    </div>
  );
}

// <button
//   onClick={() => setFilters((f) => ({ ...f, category: "electronics" }))}
// >
//   Electronics
// </button>
// <button
//   onClick={() => setFilters((f) => ({ ...f, category: "jewelery" }))}
// >
//   Jewelery
// </button>
