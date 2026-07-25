import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { fleetAnalytics } from "../../../data/serviceContent/logisticsSupplyChain";

export default function FleetAnalyticsPage() {
  return <ServiceContentPage {...fleetAnalytics} />;
}
