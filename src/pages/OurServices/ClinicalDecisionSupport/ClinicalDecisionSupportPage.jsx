import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { clinicalDecisionSupport } from "../../../data/serviceContent/healthcareAnalytics";

export default function ClinicalDecisionSupportPage() {
  return <ServiceContentPage {...clinicalDecisionSupport} />;
}
