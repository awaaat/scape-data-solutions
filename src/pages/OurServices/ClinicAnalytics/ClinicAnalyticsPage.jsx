import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { clinicAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function ClinicAnalyticsPage() {
  return <ServiceContentPage {...clinicAnalytics} />;
}
