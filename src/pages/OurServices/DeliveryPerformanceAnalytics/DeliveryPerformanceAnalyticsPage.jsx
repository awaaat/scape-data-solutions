import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { deliveryPerformanceAnalytics } from "../../../data/serviceContent/logisticsSupplyChain";

export default function DeliveryPerformanceAnalyticsPage() {
  return <ServiceContentPage {...deliveryPerformanceAnalytics} />;
}
