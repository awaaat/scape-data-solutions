import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { computerVisionSolutions } from "../../../data/serviceContent/dataEngineeringAI";

export default function ComputerVisionSolutionsPage() {
  return <ServiceContentPage {...computerVisionSolutions} />;
}
