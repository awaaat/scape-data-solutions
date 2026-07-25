import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { healthcareDashboardDevelopment } from "../../../data/serviceContent/healthcareAnalytics";

export default function HealthcareDashboardDevelopmentPage() {
  return <ServiceContentPage {...healthcareDashboardDevelopment} />;
}
