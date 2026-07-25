import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailRevenueAnalytics } from "../../../data/serviceContent/manufacturingRetail";

export default function RetailRevenueAnalyticsPage() {
  return <ServiceContentPage {...retailRevenueAnalytics} />;
}
