import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { dataEngineering } from "../../../data/serviceContent/dataEngineeringAI";

export default function DataEngineeringPage() {
  return <ServiceContentPage {...dataEngineering} />;
}
