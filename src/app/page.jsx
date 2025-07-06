import styles from './page.module.css';
import Header from "@/components/header";
import HomeHeroSection from "@/components/homeHeroSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <HomeHeroSection/>
    </div>
  );
}
