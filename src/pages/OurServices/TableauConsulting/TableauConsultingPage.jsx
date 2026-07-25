import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { tableauConsulting } from "../../../data/serviceContent/businessIntelligence";

export default function TableauConsultingPage() {
  return <ServiceContentPage {...tableauConsulting} />;
}
