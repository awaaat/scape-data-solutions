import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { manufacturingForecasting } from "../../../data/serviceContent/manufacturingRetail";

export default function ManufacturingForecastingPage() {
  return <ServiceContentPage {...manufacturingForecasting} />;
}
