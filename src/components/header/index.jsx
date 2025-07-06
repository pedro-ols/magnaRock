import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="/images/logotype.png" alt="Logo da banda" className={styles.headerLogoImage} />
            </div>
            <nav className={styles.navContainer}>
                <a href="/us" className={styles.navItem}><h1 className={styles.navText}>Nós</h1></a>
                <a href="/gallery" className={styles.navItem}><h1 className={styles.navText}>Galeria</h1></a>
                <a href="/contact" className={styles.navItem}><h1 className={styles.navText}>Contate-nos</h1></a>
            </nav>
        </header>
    )
}