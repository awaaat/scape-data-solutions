import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailSalesAnalytics } from "../../../data/serviceContent/manufacturingRetail";
import styles from "./RetailSalesAnalyticsPage.module.css";

export default function RetailSalesAnalyticsPage() {
  return (
    <div className={styles.page}>
      <ServiceContentPage {...retailSalesAnalytics} />
    </div>
  );
}
