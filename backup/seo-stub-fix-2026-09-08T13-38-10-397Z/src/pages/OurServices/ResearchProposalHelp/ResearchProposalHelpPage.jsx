import { Helmet } from 'react-helmet-async';
import styles from "./ResearchProposalHelpPage.module.css";

export default function ResearchProposalHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>ResearchProposalHelp</h1>
            <p>
                Professional ResearchProposalHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
