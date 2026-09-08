import { Helmet } from 'react-helmet-async';
import styles from "./SupplyChainAnalyticsPage.module.css";

export default function SupplyChainAnalyticsPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>SupplyChainAnalytics</h1>
            <p>
                Professional SupplyChainAnalytics services by Scape Data Solutions.
            </p>
        </div>
    );
}
