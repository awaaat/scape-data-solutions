import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { patientFlowAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function PatientFlowAnalyticsPage() {
  return <ServiceContentPage {...patientFlowAnalytics} />;
}
