import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { dataQualityAssessment } from "../../../data/serviceContent/dataEngineeringAI";

export default function DataQualityAssessmentPage() {
  return <ServiceContentPage {...dataQualityAssessment} />;
}
