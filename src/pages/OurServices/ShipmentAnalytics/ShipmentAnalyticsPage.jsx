import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { shipmentAnalytics } from "../../../data/serviceContent/logisticsSupplyChain";

export default function ShipmentAnalyticsPage() {
  return <ServiceContentPage {...shipmentAnalytics} />;
}
