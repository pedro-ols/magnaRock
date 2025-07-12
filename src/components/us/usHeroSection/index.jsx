import styles from "./usHeroSection.module.css";

export default function UsHeroSection() {
    return (
        <section className={styles.usHeroSection}>
            <div className={styles.usIntroduction}>
                <h1 className={styles.usIntroductionText}>Conheça-nos</h1>
            </div>
        </section>
    );
}