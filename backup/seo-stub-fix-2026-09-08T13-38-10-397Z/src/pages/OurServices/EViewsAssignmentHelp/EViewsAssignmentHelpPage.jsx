import { Helmet } from 'react-helmet-async';
import styles from "./EViewsAssignmentHelpPage.module.css";

export default function EViewsAssignmentHelpPage() {
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
