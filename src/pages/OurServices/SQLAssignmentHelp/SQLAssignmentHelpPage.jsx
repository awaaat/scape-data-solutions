import { Helmet } from 'react-helmet-async';
import styles from "./SQLAssignmentHelpPage.module.css";

export default function SQLAssignmentHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>SQLAssignmentHelp</h1>
            <p>
                Professional SQLAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
