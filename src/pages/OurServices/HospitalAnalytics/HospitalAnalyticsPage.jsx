import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { hospitalAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function HospitalAnalyticsPage() {
  return <ServiceContentPage {...hospitalAnalytics} />;
}
