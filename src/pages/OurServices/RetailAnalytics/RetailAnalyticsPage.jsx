import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailAnalytics } from "../../../data/serviceContent/manufacturingRetail";
import styles from "./RetailAnalyticsPage.module.css";

export default function RetailAnalyticsPage() {
  return (
    <div className={styles.page}>
      <ServiceContentPage {...retailAnalytics} />
    </div>
  );
}
