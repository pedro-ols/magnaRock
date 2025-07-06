import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTopBar} />
            <div className={styles.footerTopContent}>
                <div className={styles.footerLogo}>
                    <img src="/images/logotype.png" alt="Logo da banda" />
                </div>
                <div className={styles.footerBreakBar} />
            </div>
            <div className={styles.footerContent}>
                <h3 className={styles.greetings}>Seja bem-vindo à MagnaRock</h3>
                <h4 className={styles.contactMail}>magnarockbanda@gmail.com</h4>
                <div className={styles.creditsContainer}>
                    <h5 className={styles.creditsText}>Desenvolvido por:</h5>
                    <a className={styles.creditsName} href="https://github.com/pedro-ols">Pedro Santos</a>
                </div>
            </div>
        </footer>
    )
}