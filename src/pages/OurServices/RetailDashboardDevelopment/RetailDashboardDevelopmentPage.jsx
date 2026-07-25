import { Helmet } from 'react-helmet-async';
import styles from "./RetailDashboardDevelopmentPage.module.css";

export default function RetailDashboardDevelopmentPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>RetailDashboardDevelopment</h1>
            <p>
                Professional RetailDashboardDevelopment services by Scape Data Solutions.
            </p>
        </div>
    );
}
