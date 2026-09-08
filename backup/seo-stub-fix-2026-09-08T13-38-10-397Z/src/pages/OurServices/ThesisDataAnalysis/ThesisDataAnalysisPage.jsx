import { Helmet } from 'react-helmet-async';
import styles from "./ThesisDataAnalysisPage.module.css";

export default function ThesisDataAnalysisPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>ThesisDataAnalysis</h1>
            <p>
                Professional ThesisDataAnalysis services by Scape Data Solutions.
            </p>
        </div>
    );
}
