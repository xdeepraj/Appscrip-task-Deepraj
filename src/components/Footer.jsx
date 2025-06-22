import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      {/* Top row */}
      <div className={styles.topRow}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h3>CONTACT US</h3>
          <div className={styles.contactInfo}>
            <p className={styles.general}>+44 221 133 5360</p>
            <img
              src="/images/star.png"
              alt="star"
              className={styles.mobileSeparator}
            />
            <p className={styles.general}>customercare@mettamuse.com</p>
          </div>

          <h3>CURRENCY</h3>
          <div className={styles.general}>
            <img src="images/us-flag.png" alt="us-flag" />
            <img src="images/star.png" alt="star" />
            <span>USD</span>
          </div>
          <p className={styles.transaction}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <h3>mettā muse</h3>
          <img
            src="/images/arrow-down.png"
            alt="arrow-down"
            color="white"
            className={styles.generalMobileSeparator}
          />
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        {/* Middle Column */}
        <div className={styles.middleCol}>
          <h3>QUICK LINKS</h3>
          <img
            src="/images/arrow-down.png"
            alt="arrow-down"
            className={styles.generalMobileSeparator}
          />
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        {/* Right Column */}
        <div className={styles.rightCol}>
          <h3>FOLLOW US</h3>
          <img
            src="/images/arrow-down.png"
            alt="arrow-down"
            className={styles.generalMobileSeparator}
          />
          <img
            src="/images/follow-us.png"
            alt="follow-us"
            className={styles.removeForMobile}
          />

          <div className={styles.metaMuseAcceptsWEB}>
            <h3>mettā muse ACCEPTS</h3>
            <img src="/images/payments.png" alt="follow-us" />
          </div>
        </div>

        <div className={styles.metaMuseAcceptsMOBILE}>
            <h3>mettā muse ACCEPTS</h3>
            <img src="/images/payments.png" alt="follow-us" />
          </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2025 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
