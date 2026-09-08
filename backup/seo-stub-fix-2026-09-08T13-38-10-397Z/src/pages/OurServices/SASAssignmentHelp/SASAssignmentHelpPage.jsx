import { Helmet } from 'react-helmet-async';
import styles from "./SASAssignmentHelpPage.module.css";

export default function SASAssignmentHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>SASAssignmentHelp</h1>
            <p>
                Professional SASAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
