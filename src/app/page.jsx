import styles from './page.module.css';
import Header from "@/components/header";
import HomeHeroSection from "@/components/home/homeHeroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <HomeHeroSection/>
      <Footer/>
    </div>
  );
}
