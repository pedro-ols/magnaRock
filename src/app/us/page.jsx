import { React } from 'react';

import styles from "./us.module.css"

import Header from "@/components/header";
import Footer from "@/components/footer";
import UsHeroSection from "@/components/us/usHeroSection";

export default function Us() {
    return (
        <div className={styles.container}>
            <Header />
            <UsHeroSection/>
            <div className={styles.titleContainer}>
                <h1 className={styles.usTitle}>Confira os nossos membros</h1>
            </div>
            <Footer />
        </div>
    );
}