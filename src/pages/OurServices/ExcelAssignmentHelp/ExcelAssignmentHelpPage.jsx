import { Helmet } from 'react-helmet-async';
import styles from "./ExcelAssignmentHelpPage.module.css";

export default function ExcelAssignmentHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>ExcelAssignmentHelp</h1>
            <p>
                Professional ExcelAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
