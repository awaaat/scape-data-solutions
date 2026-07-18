#!/bin/bash

set -e

fix() {
    folder="$1"
    old="$2"
    new="$3"

    [ -d "$folder" ] || return

    if [ -f "$folder/${old}Page.jsx" ]; then
        mv "$folder/${old}Page.jsx" "$folder/${new}Page.jsx"
    fi

    if [ -f "$folder/${old}Page.module.css" ]; then
        mv "$folder/${old}Page.module.css" "$folder/${new}Page.module.css"
    fi

    if [ -f "$folder/${old}Page.module.css.bak12" ]; then
        mv "$folder/${old}Page.module.css.bak12" "$folder/${new}Page.module.css.bak12"
    fi

    if [ -f "$folder/${new}Page.jsx" ]; then
        sed -i "s/${old}Page/${new}Page/g" "$folder/${new}Page.jsx"
        sed -i "s/${old}Page.module.css/${new}Page.module.css/g" "$folder/${new}Page.jsx"
        sed -i "s/${old}/${new}/g" "$folder/${new}Page.jsx"
    fi

    echo "✔ Fixed $folder"
}

fix HealthcareCostAnalytics HealthcareCostUtilizationAnalysis HealthcareCostAnalytics
fix HealthcareWorkforceAnalytics HealthcareWorkforceStaffingAnalytics HealthcareWorkforceAnalytics
fix MedicalImagingAnalytics MedicalImagingRadiologyAnalytics MedicalImagingAnalytics
fix RetailPromotionAnalytics PromotionDiscountPerformance RetailPromotionAnalytics
fix PortfolioOptimization PortfolioOptimizationRiskManagement PortfolioOptimization
fix CarrierPerformanceAnalytics CarrierPerformanceFreightCostAnalytics CarrierPerformanceAnalytics
fix LearningAnalytics CurriculumEffectivenessLearningAnalytics LearningAnalytics
fix TechnicalReportWriting ReportWritingSupport TechnicalReportWriting
fix ResearchMethodologySupport ResearchMethodologyConsulting ResearchMethodologySupport
fix StatisticalAnalysisConsulting StatisticalConsulting StatisticalAnalysisConsulting
fix StorePerformanceAnalytics StorePerformanceComparison StorePerformanceAnalytics
fix SupplyChainVisibility SupplyChainVisibilityTracking SupplyChainVisibility
fix WarehouseOptimization WarehouseOptimizationInventoryManagement WarehouseOptimization
fix WorkforceAnalytics WorkforceHRAnalytics WorkforceAnalytics
fix PricingAnalytics PricingAnalyticsOptimization PricingAnalytics
fix InventoryDemandForecasting DemandForecastingInventoryPlanning InventoryDemandForecasting
fix CustomerLifetimeValueAnalytics CustomerChurnLifetimeValue CustomerLifetimeValueAnalytics

echo
echo "Done."
