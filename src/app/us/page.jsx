import { React } from 'react';

import styles from "./us.module.css"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Us() {
    return (
        <div className={styles.container}>
            <Header />
            
            <Footer />
        </div>
    );
}