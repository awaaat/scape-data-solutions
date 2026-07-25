import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { supplyPlanning } from "../../../data/serviceContent/logisticsSupplyChain";

export default function SupplyPlanningPage() {
  return <ServiceContentPage {...supplyPlanning} />;
}
