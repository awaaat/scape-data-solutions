import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
import { dataMigration } from "../../../data/serviceContent/dataEngineeringAI";

export default function DataMigrationPage() {
  return <ServiceContentPage {...dataMigration} />;
}
