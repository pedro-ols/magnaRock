import styles from './homeHeroSection.module.css';

export default function HomeHeroSection() {
    const medias = [
        {
            id: 1,
            name: "Instagram",
            url: "https://www.instagram.com/magnarockbanda/",
            icon: "/images/instagram-logo.png"
        },
        {
            id: 2,
            name: "Facebook",
            url: null,
            icon: "/images/facebook-icon.png"
        },
        {
            id: 3,
            name: "YouTube",
            url: null,
            icon: "/images/youtube-icon.png"
        },
        {
            id: 4,
            name: "Tiktok",
            url: null,
            icon: "/images/tiktok-logo.png"
        }
    ]
    return (
        <section className={styles.homeHeroSection}>
            <div className={styles.bannersContainer}>
                <div className={styles.introducingBanner}>
                    <div className={styles.bannerLogo}>
                        <img src="/images/logotype.png" alt="Logo da banda" className={styles.bannerLogoImage} />
                    </div>
                    <div className={styles.bannerTitle}>
                        <h1 style={{ color: "var(--text-color)", opacity: "90%", fontSize: "3rem", textShadow: "5px 5px 8px rgba(0,0,0,1)" }}> Conheça a </h1>
                        <h1 style={{ color: "var(--text-color)", fontSize: "3rem", textShadow: "5px 5px 8px rgba(0,0,0,1)" }}> Magnarock </h1>
                    </div>
                </div>
                <div className={styles.mediasBanner}>
                    {medias.filter(media => media.url !== null).map((media) => (
                        <div className={styles.mediaItem} key={media.id}>
                            <a href={media.url} target="blank" className={styles.mediaLink}>
                                <img src={media.icon} alt={media.name} className={styles.mediaImage}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}