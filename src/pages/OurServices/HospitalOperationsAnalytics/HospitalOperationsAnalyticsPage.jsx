import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { hospitalOperationsAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function HospitalOperationsAnalyticsPage() {
  return <ServiceContentPage {...hospitalOperationsAnalytics} />;
}
