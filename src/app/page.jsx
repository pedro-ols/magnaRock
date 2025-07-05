import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src="#" alt="Logo" className={styles.headerLogoImage} />
        </div>
        <nav className={styles.navContainer}>
          <a href="/us" className={styles.navItem}><h1 className={styles.navText}>Nós</h1></a>
          <a href="/gallery" className={styles.navItem}><h1 className={styles.navText}>Galeria</h1></a>
          <a href="/contact" className={styles.navItem}><h1 className={styles.navText}>Contate-nos</h1></a>
        </nav>
      </header>
      <div className={styles.homeHeroSection}>
        <div className={styles.introducingBanner}>
          <img src="#" alt="Logo" className={styles.bannerLogoImage}/>
          <h1 style={{ color: "var(--text-color)", opacity: "80%" }}>Conheça a </h1>
          <h1 style={{ color: "var(--text-color)" }}>Magnarock</h1>
        </div>
      </div>
    </div>
  );
}
