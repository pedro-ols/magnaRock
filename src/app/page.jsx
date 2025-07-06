import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src="/images/logotype.png" alt="Logo" className={styles.headerLogoImage} />
        </div>
        <nav className={styles.navContainer}>
          <a href="/us" className={styles.navItem}><h1 className={styles.navText}>Nós</h1></a>
          <a href="/gallery" className={styles.navItem}><h1 className={styles.navText}>Galeria</h1></a>
          <a href="/contact" className={styles.navItem}><h1 className={styles.navText}>Contate-nos</h1></a>
        </nav>
      </header>
      <div className={styles.homeHeroSection}>
        <div className={styles.bannersContainer}>
          <div className={styles.introducingBanner}>
            <div className={styles.bannerLogo}>
              <img src="/images/logotype.png" alt="Logo" className={styles.bannerLogoImage} />
            </div>
            <div className={styles.bannerTitle}>
              <h1 style={{ color: "var(--text-color)", opacity: "90%", fontSize: "3rem", textShadow: "5px 5px 8px rgba(0,0,0,1)" }}> Conheça a </h1>
              <h1 style={{ color: "var(--text-color)", fontSize: "3rem", textShadow: "5px 5px 8px rgba(0,0,0,1)" }}> Magnarock </h1>
            </div>
          </div>
          <div className={styles.mediasBanner}>
          </div>
        </div>
      </div>
    </div>
  );
}
