"use client";

import { useProductList } from "@/context/ProductListContext";
import styles from "./ProductList.module.css";
import { useState } from "react";

export default function ProductList() {
  const { filteredProducts, showFilter } = useProductList();

  const [selectedOptions, setSelectedOptions] = useState({});

  const filterTopics = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  const filterOptions = ["Men", "Women", "Baby & kids"];

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (topic) => {
    setOpenSections((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const handleCheckboxChange = (topic, option) => {
    setSelectedOptions((prev) => {
      const current = prev[topic] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];

      return {
        ...prev,
        [topic]: updated,
      };
    });
  };

  const renderSelectionSummary = (topic) => {
    const selected = selectedOptions[topic] || [];
    if (selected.length === 0 || selected.length === filterOptions.length) {
      return <div className={styles.summary}>All</div>;
    }
    return <div className={styles.summary}>{selected.join(", ")}</div>;
  };

  return (
    <div className={styles.wrapper}>
      {showFilter && (
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarHeading}>CUSTOMIZBLE</h4>

          <div className={styles.filter}>
            {filterTopics.map((topic) => (
              <div key={topic} className={styles.filterSection}>
                <div
                  className={styles.filterHeader}
                  onClick={() => toggleSection(topic)}
                >
                  <span>{topic}</span>
                  <img
                    src={
                      openSections[topic]
                        ? "/images/arrow-up.png"
                        : "/images/arrow-down.png"
                    }
                    alt="toggle"
                    className={styles.arrowIcon}
                  />
                </div>

                {renderSelectionSummary(topic)}

                {openSections[topic] && (
                  <>
                    <div
                      className={styles.unselectAll}
                      onClick={() =>
                        setSelectedOptions((prev) => ({
                          ...prev,
                          [topic]: [],
                        }))
                      }
                    >
                      Unselect All
                    </div>

                    {filterOptions.map((option) => (
                      <label
                        key={`${topic}-${option}`}
                        className={styles.checkboxLabel}
                      >
                        <input
                          type="checkbox"
                          checked={(selectedOptions[topic] || []).includes(
                            option
                          )}
                          onChange={() => handleCheckboxChange(topic, option)}
                        />
                        {option}
                      </label>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </aside>
      )}

      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <h2 className={styles.title}>{product.title}</h2>

            <div className={styles.price}>
              <p>${product.price}</p>
              <img src="images/heart.png" alt="heart" />
            </div>

            <p className={styles.signIn}>
              <u>Sign in</u> or <u>Create an account</u> to buy.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
