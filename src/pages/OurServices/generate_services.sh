#!/bin/bash

set -e

rename() {
    if [ -d "$1" ] && [ ! -d "$2" ]; then
        mv "$1" "$2"
        echo "Renamed $1 -> $2"
    fi
}

# ===========================
# RENAME EXISTING PAGES
# ===========================

rename HealthcareCostUtilizationAnalysis HealthcareCostAnalytics
rename HealthcareWorkforceStaffingAnalytics HealthcareWorkforceAnalytics
rename MedicalImagingRadiologyAnalytics MedicalImagingAnalytics
rename PromotionDiscountPerformance RetailPromotionAnalytics
rename PortfolioOptimizationRiskManagement PortfolioOptimization
rename CarrierPerformanceFreightCostAnalytics CarrierPerformanceAnalytics
rename CurriculumEffectivenessLearningAnalytics LearningAnalytics
rename ReportWritingSupport TechnicalReportWriting
rename ResearchMethodologyConsulting ResearchMethodologySupport
rename StatisticalConsulting StatisticalAnalysisConsulting
rename StorePerformanceComparison StorePerformanceAnalytics
rename SupplyChainVisibilityTracking SupplyChainVisibility
rename WarehouseOptimizationInventoryManagement WarehouseOptimization
rename WorkforceHRAnalytics WorkforceAnalytics
rename PricingAnalyticsOptimization PricingAnalytics
rename DemandForecastingInventoryPlanning InventoryDemandForecasting
rename CustomerChurnLifetimeValue CustomerLifetimeValueAnalytics

# ===========================
# NEW PAGES
# ===========================

services=(
AIConsulting
MachineLearningConsulting
PredictiveAnalytics
GenerativeAIConsulting
DeepLearningSolutions
ComputerVisionSolutions
NaturalLanguageProcessing
RecommendationSystems
ChatbotDevelopment
AIAutomation
MLOpsConsulting
LLMDevelopment
BusinessIntelligence
PowerBIConsulting
TableauConsulting
LookerStudioConsulting
DataEngineering
DataWarehouseDevelopment
ETLPipelineDevelopment
DataMigration
DataQualityAssessment
RetailAnalytics
RetailSalesAnalytics
RetailPricingAnalytics
RetailRevenueAnalytics
RetailDashboardDevelopment
HospitalAnalytics
ClinicAnalytics
HealthcareBI
HealthcareRevenueAnalytics
PatientFlowAnalytics
HospitalOperationsAnalytics
MedicalClaimsAnalytics
ClinicalDecisionSupport
BedUtilizationAnalytics
HealthcareDashboardDevelopment
ManufacturingAnalytics
ProductionAnalytics
PredictiveMaintenance
QualityControlAnalytics
ManufacturingForecasting
FactoryPerformanceAnalytics
SupplyPlanning
ManufacturingKPIs
FleetAnalytics
ShipmentAnalytics
WarehouseAnalytics
DeliveryPerformanceAnalytics
FreightCostAnalytics
TransportAnalytics
SupplyChainAnalytics
PythonAssignmentHelp
RProgrammingAssignmentHelp
SQLAssignmentHelp
ExcelAssignmentHelp
PowerBIAssignmentHelp
TableauAssignmentHelp
MachineLearningAssignmentHelp
DeepLearningAssignmentHelp
TensorFlowAssignmentHelp
PyTorchAssignmentHelp
DataMiningAssignmentHelp
BigDataAssignmentHelp
RegressionAnalysisHelp
TimeSeriesAnalysisHelp
EconometricsAssignmentHelp
ThesisDataAnalysis
DissertationStatisticsHelp
ResearchProposalHelp
QuestionnaireDesignHelp
SurveyDataCleaning
QualitativeDataAnalysis
NVivoAnalysisHelp
AMOSSEMAnalysis
StataAssignmentHelp
RStudioAssignmentHelp
SASAssignmentHelp
)

for service in "${services[@]}"; do

    if [ -d "$service" ]; then
        continue
    fi

    mkdir -p "$service"

cat > "$service/index.jsx" <<EOT
import styles from "./index.module.css";

export default function ${service}() {
    return (
        <div className={styles.container}>
            <h1>${service//([A-Z])/ \1}</h1>
            <p>
                Professional ${service//([A-Z])/ \1} services by Scape Data Solutions.
            </p>
        </div>
    );
}
EOT

cat > "$service/index.module.css" <<EOT
.container{
    max-width:1200px;
    margin:auto;
    padding:2rem;
}
EOT

echo "Created $service"

done

echo
echo "Done."
echo "Total folders:"
find . -maxdepth 1 -type d | wc -l

