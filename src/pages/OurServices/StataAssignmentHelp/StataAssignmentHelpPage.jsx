import { Helmet } from 'react-helmet-async';
import styles from "./StataAssignmentHelpPage.module.css";

export default function StataAssignmentHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>StataAssignmentHelp</h1>
            <p>
                Professional StataAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
