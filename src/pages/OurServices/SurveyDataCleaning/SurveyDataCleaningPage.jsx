import { Helmet } from 'react-helmet-async';
import styles from "./SurveyDataCleaningPage.module.css";

export default function SurveyDataCleaningPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>SurveyDataCleaning</h1>
            <p>
                Professional SurveyDataCleaning services by Scape Data Solutions.
            </p>
        </div>
    );
}
