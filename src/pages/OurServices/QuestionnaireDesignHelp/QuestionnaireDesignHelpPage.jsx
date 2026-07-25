import { Helmet } from 'react-helmet-async';
import styles from "./QuestionnaireDesignHelpPage.module.css";

export default function QuestionnaireDesignHelpPage() {
    return (
        <div className={styles.container}>
            <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
            <h1>QuestionnaireDesignHelp</h1>
            <p>
                Professional QuestionnaireDesignHelp services by Scape Data Solutions.
            </p>
        </div>
    );
}
