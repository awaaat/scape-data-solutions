import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { retailAnalytics } from "../../../data/serviceContent/manufacturingRetail";

export default function RetailAnalyticsPage() {
  return <ServiceContentPage {...retailAnalytics} />;
}
