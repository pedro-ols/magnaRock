import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src="#" alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navContainer}>
          <a href="/us" className={styles.navItem}><h1 className={styles.navText}>Nós</h1></a>
          <a href="/gallery" className={styles.navItem}><h1 className={styles.navText}>Galeria</h1></a>
          <a href="/contact" className={styles.navItem}><h1 className={styles.navText}>Contate-nos</h1></a>
        </nav>
      </header>
      <div className={styles.homeHeroSection}>
        <div className={styl}></div>
      </div>
    </div>
  );
}
