import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { medicalClaimsAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function MedicalClaimsAnalyticsPage() {
  return <ServiceContentPage {...medicalClaimsAnalytics} />;
}
