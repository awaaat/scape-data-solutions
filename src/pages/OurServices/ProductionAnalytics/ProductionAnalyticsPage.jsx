import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { productionAnalytics } from "../../../data/serviceContent/manufacturingRetail";

export default function ProductionAnalyticsPage() {
  return <ServiceContentPage {...productionAnalytics} />;
}
