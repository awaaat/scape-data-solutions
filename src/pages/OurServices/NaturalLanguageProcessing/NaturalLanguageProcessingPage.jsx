import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { naturalLanguageProcessing } from "../../../data/serviceContent/dataEngineeringAI";

export default function NaturalLanguageProcessingPage() {
  return <ServiceContentPage {...naturalLanguageProcessing} />;
}
