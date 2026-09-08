import { Helmet } from 'react-helmet-async';
import styles from "./QualitativeDataAnalysisPage.module.css";

export default function QualitativeDataAnalysisPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>QualitativeDataAnalysis</h1>
            <p>
                Professional QualitativeDataAnalysis services by Scape Data Solutions.
            </p>
        </div>
    );
}
