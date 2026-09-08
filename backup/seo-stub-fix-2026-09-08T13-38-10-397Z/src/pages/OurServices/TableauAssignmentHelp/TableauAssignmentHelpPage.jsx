import { Helmet } from 'react-helmet-async';
import styles from "./TableauAssignmentHelpPage.module.css";

export default function TableauAssignmentHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>TableauAssignmentHelp</h1>
            <p>
                Professional TableauAssignmentHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
