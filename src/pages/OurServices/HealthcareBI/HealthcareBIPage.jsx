import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { healthcareBI } from "../../../data/serviceContent/healthcareAnalytics";

export default function HealthcareBIPage() {
  return <ServiceContentPage {...healthcareBI} />;
}
