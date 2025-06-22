import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.loremIpsum}>
        <div>
          <img src="/images/lorem-ipsum.png" alt="Lorem Ipsum Logo" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <img src="/images/lorem-ipsum.png" alt="Lorem Ipsum Logo" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <img src="/images/lorem-ipsum.png" alt="Lorem Ipsum Logo" />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>

      <div className={styles.logo}>
        <div className={styles.logoLeft}>
          <img
            src="/images/hamburger-menu.png"
            alt="Logo"
            className={styles.logoLeftMOBILE}
          />
          <Link href="/">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className={styles.logoImageMOBILE}
            />
          </Link>
        </div>

        <div className={styles.logoCenter}>LOGO</div>

        <div className={styles.logoRight}>
          <img src="/images/search-normal.png" alt="search-normal" />
          <img src="/images/heart.png" alt="heart" />
          <img src="/images/shopping-bag.png" alt="shopping-bag" />
          <img
            src="/images/profile.png"
            alt="profile"
            className={styles.profileMOBILE}
          />
          <div className={styles.language}>
            <p>ENG</p>
            <img src="images/arrow-down.png" alt="arrow-down" />
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <Link href="/">SHOP</Link>
        <Link href="/">SKILLS</Link>
        <Link href="/">STORIES</Link>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT US</Link>
      </nav>
    </header>
  );
}
