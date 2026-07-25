import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { freightCostAnalytics } from "../../../data/serviceContent/logisticsSupplyChain";

export default function FreightCostAnalyticsPage() {
  return <ServiceContentPage {...freightCostAnalytics} />;
}
