import styles from './homeHeroSection.module.css';

export default function HomeHeroSection() {
    return (
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
    );
}