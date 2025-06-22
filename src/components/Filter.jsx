"use client";

import { useState } from "react";
import styles from "./Filter.module.css";
import { useProductList } from "@/context/ProductListContext";

export default function Filter() {
  const { filteredProducts, showFilter, setShowFilter, sortType, setSortType } =
    useProductList();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleFilter = () => setShowFilter((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const handleSortSelect = (option) => {
    setSortType(option);
    setShowDropdown(false);
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

      <div className={styles.sortWrapper}>
        <div className={styles.sortTrigger} onClick={toggleDropdown}>
          {sortType.toUpperCase()}
          <img
            src={
              showDropdown ? "/images/arrow-up.png" : "/images/arrow-down.png"
            }
            alt="toggle-arrow"
          />
        </div>

        {showDropdown && (
          <div className={styles.dropdown}>
            {sortOptions.map((option) => (
              <div
                key={option}
                className={`${styles.dropdownItem} ${
                  sortType === option ? styles.active : ""
                }`}
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
