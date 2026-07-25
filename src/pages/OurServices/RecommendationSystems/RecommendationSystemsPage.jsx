import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { recommendationSystems } from "../../../data/serviceContent/dataEngineeringAI";

export default function RecommendationSystemsPage() {
  return <ServiceContentPage {...recommendationSystems} />;
}
