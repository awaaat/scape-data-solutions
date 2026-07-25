import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { healthcareRevenueAnalytics } from "../../../data/serviceContent/healthcareAnalytics";

export default function HealthcareRevenueAnalyticsPage() {
  return <ServiceContentPage {...healthcareRevenueAnalytics} />;
}
