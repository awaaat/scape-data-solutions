import { Helmet } from 'react-helmet-async';
import styles from "./JournalFormattingPage.module.css";

export default function JournalFormattingPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>PythonAssignmentHelp</h1>
            <p>
                Professional PythonAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
