import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { manufacturingKPIs } from "../../../data/serviceContent/manufacturingRetail";

export default function ManufacturingKPIsPage() {
  return <ServiceContentPage {...manufacturingKPIs} />;
}
