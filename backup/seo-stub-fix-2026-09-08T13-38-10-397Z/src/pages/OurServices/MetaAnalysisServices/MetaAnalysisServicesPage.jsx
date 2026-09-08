import { Helmet } from 'react-helmet-async';
import styles from "./MetaAnalysisServicesPage.module.css";

export default function MetaAnalysisServicesPage() {
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
