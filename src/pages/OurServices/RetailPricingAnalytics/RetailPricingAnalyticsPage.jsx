import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailPricingAnalytics } from "../../../data/serviceContent/manufacturingRetail";

export default function RetailPricingAnalyticsPage() {
  return <ServiceContentPage {...retailPricingAnalytics} />;
}
