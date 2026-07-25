import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { predictiveMaintenance } from "../../../data/serviceContent/dataEngineeringAI";

export default function PredictiveMaintenancePage() {
  return <ServiceContentPage {...predictiveMaintenance} />;
}
