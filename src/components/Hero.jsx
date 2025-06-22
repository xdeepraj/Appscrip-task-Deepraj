import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.discoverMobile}>HOME | SHOP</div>

      <div className={styles.discoverForMobile}>
        <div className={styles.discover}>DISCOVER OUR PRODUCTS</div>
        <div className={styles.discoverParaMOBILE}>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est </p>
          <p>posuere rhoncus scelerisque. Dolor integer </p>
          <p>scelerisque nibh amet mi ut elementum dolor.</p>
        </div>

        <div className={styles.discoverParaWEB}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          </p>
          <p>
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
    </div>
  );
}
