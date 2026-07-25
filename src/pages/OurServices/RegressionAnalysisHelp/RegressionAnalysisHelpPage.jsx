import { Helmet } from 'react-helmet-async';
import styles from "./RegressionAnalysisHelpPage.module.css";

export default function RegressionAnalysisHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>RegressionAnalysisHelp</h1>
            <p>
                Professional RegressionAnalysisHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
