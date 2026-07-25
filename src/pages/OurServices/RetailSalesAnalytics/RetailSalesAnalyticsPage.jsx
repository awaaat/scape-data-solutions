import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailSalesAnalytics } from "../../../data/serviceContent/manufacturingRetail";

export default function RetailSalesAnalyticsPage() {
  return <ServiceContentPage {...retailSalesAnalytics} />;
}
