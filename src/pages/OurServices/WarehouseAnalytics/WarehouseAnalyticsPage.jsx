import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { warehouseAnalytics } from "../../../data/serviceContent/logisticsSupplyChain";

export default function WarehouseAnalyticsPage() {
  return <ServiceContentPage {...warehouseAnalytics} />;
}
