import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { predictiveAnalytics } from "../../../data/serviceContent/dataEngineeringAI";

export default function PredictiveAnalyticsPage() {
  return <ServiceContentPage {...predictiveAnalytics} />;
}
