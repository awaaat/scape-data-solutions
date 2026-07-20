// src/App.jsx
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { apiService } from './services/api';

// ─── Core Pages ──────────────────────────────────────────────
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
const ServicesPage = lazy(() => import('./pages/OurServices/ServicesPage'));

// ─── Company & Static ───────────────────────────────────────
import CompanyPage from './pages/Company/CompanyPage';
import WhyUsPage from './pages/WhyUs/WhyUsPage';
import TeamPage from './pages/Team/TeamPage';
const CareersPage = lazy(() => import('./pages/Careers/CareersPage'));
import FAQPage from './pages/FAQ/FAQPage';

// ─── Resources ───────────────────────────────────────────────
import ResourcesPage from './pages/Resources/ResourcesPage';
import ArticlePage from './pages/Resources/ArticlePage';

// ─── Industry & Portfolio ────────────────────────────────────
import IndustryLandingPage from './pages/IndustryLanding/IndustryLandingPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import PortfolioBIPage from './pages/PortfolioBI/PortfolioBIPage';
import PortfolioAIPage from './pages/PortfolioAI/PortfolioAIPage';
import PortfolioPipelinesPage from './pages/PortfolioPipelines/PortfolioPipelinesPage';
import PortfolioMobilePage from './pages/PortfolioMobile/PortfolioMobilePage';

// ─── Others ──────────────────────────────────────────────────
import ClientsPage from './pages/Clients/ClientsPage';
import TestimonialsPage from './pages/Testimonials/TestimonialsPage';
import SitemapPage from './pages/Sitemap/SitemapPage';
import CaseStudiesPage from './pages/CaseStudies/CaseStudiesPage';

// ─── Lazy-Loaded Service Pages (only existing ones) ───────────
const DataCleaningPage = lazy(() => import('./pages/OurServices/DataCleaning/DataCleaningPage'));
const DataVisualizationPage = lazy(() => import('./pages/OurServices/DataVisualizationPage/DataVisualizationPage'));
const DashboardDevelopmentPage = lazy(() => import('./pages/OurServices/DashboardDevelopment/DashboardDevelopmentPage'));
const ExcelDecisionModelingPage = lazy(() => import('./pages/OurServices/ExcelDecisionModeling/ExcelDecisionModelingPage'));

// Academic / Research
const ResearchDataAnalysisPage = lazy(() => import('./pages/OurServices/ResearchDataAnalysis/ResearchDataAnalysisPage'));
const Chapter4AnalysisPage = lazy(() => import('./pages/OurServices/Chapter4Analysis/Chapter4AnalysisPage'));
const SurveyDataAnalysisPage = lazy(() => import('./pages/OurServices/SurveyDataAnalysis/SurveyDataAnalysisPage'));
const SPSSDataAnalysisPage = lazy(() => import('./pages/OurServices/SPSSDataAnalysis/SPSSDataAnalysisPage'));
const ReportWritingSupportPage = lazy(() => import('./pages/OurServices/ReportWritingSupport/ReportWritingSupportPage'));

// Finance
const FraudDetectionPreventionPage = lazy(() => import('./pages/OurServices/FraudDetectionPrevention/FraudDetectionPreventionPage'));
const CreditRiskScoringPage = lazy(() => import('./pages/OurServices/CreditRiskScoring/CreditRiskScoringPage'));
const SalesForecastingDemandPlanningPage = lazy(() => import('./pages/OurServices/SalesForecastingDemandPlanning/SalesForecastingDemandPlanningPage'));
const CustomerChurnLifetimeValuePage = lazy(() => import('./pages/OurServices/CustomerChurnLifetimeValue/CustomerChurnLifetimeValuePage'));
const RegulatoryComplianceAnalyticsPage = lazy(() => import('./pages/OurServices/RegulatoryComplianceAnalytics/RegulatoryComplianceAnalyticsPage'));
const AlgorithmicTradingAnalyticsPage = lazy(() => import('./pages/OurServices/AlgorithmicTradingAnalytics/AlgorithmicTradingAnalyticsPage'));
const PortfolioOptimizationRiskManagementPage = lazy(() => import('./pages/OurServices/PortfolioOptimization/PortfolioOptimizationPage'));
const FinancialStatementAnalysisPage = lazy(() => import('./pages/OurServices/FinancialStatementAnalysis/FinancialStatementAnalysisPage'));
const InsuranceClaimsAnalyticsPage = lazy(() => import('./pages/OurServices/InsuranceClaimsAnalytics/InsuranceClaimsAnalyticsPage'));
const MarketSentimentAnalysisPage = lazy(() => import('./pages/OurServices/MarketSentimentAnalysis/MarketSentimentAnalysisPage'));
const FinancialPlanningAnalysisPage = lazy(() => import('./pages/OurServices/FinancialPlanningAnalysis/FinancialPlanningAnalysisPage'));

// Healthcare
const ReadmissionRiskPredictionPage = lazy(() => import('./pages/OurServices/ReadmissionRiskPrediction/ReadmissionRiskPredictionPage'));
const PopulationHealthAnalyticsPage = lazy(() => import('./pages/OurServices/PopulationHealthAnalytics/PopulationHealthAnalyticsPage'));
const HealthcareCostUtilizationAnalysisPage = lazy(() => import('./pages/OurServices/HealthcareCostAnalytics/HealthcareCostAnalyticsPage'));
const ClinicalPathwayOptimizationPage = lazy(() => import('./pages/OurServices/ClinicalPathwayOptimization/ClinicalPathwayOptimizationPage'));
const PatientExperienceSatisfactionAnalyticsPage = lazy(() => import('./pages/OurServices/PatientExperienceSatisfactionAnalytics/PatientExperienceSatisfactionAnalyticsPage'));
const TelehealthRemoteMonitoringAnalyticsPage = lazy(() => import('./pages/OurServices/TelehealthRemoteMonitoringAnalytics/TelehealthRemoteMonitoringAnalyticsPage'));
const MedicalImagingRadiologyAnalyticsPage = lazy(() => import('./pages/OurServices/MedicalImagingAnalytics/MedicalImagingAnalyticsPage'));
const HealthcareSupplyChainAnalyticsPage = lazy(() => import('./pages/OurServices/HealthcareSupplyChainAnalytics/HealthcareSupplyChainAnalyticsPage'));
const ClinicalTrialAnalyticsPage = lazy(() => import('./pages/OurServices/ClinicalTrialAnalytics/ClinicalTrialAnalyticsPage'));
const HealthcareWorkforceStaffingAnalyticsPage = lazy(() => import('./pages/OurServices/HealthcareWorkforceAnalytics/HealthcareWorkforceAnalyticsPage'));

// Retail & Operations
const SalesPerformanceDashboardPage = lazy(() => import('./pages/OurServices/SalesPerformanceDashboard/SalesPerformanceDashboardPage'));
const InventoryManagementAnalyticsPage = lazy(() => import('./pages/OurServices/InventoryManagementAnalytics/InventoryManagementAnalyticsPage'));
const DemandForecastingPage = lazy(() => import('./pages/OurServices/DemandForecasting/DemandForecastingPage'));
const PricingOptimizationPage = lazy(() => import('./pages/OurServices/PricingOptimization/PricingOptimizationPage'));
const CustomerPurchaseAnalysisPage = lazy(() => import('./pages/OurServices/CustomerPurchaseAnalysis/CustomerPurchaseAnalysisPage'));
const ProductRecommendationsPage = lazy(() => import('./pages/OurServices/ProductRecommendations/ProductRecommendationsPage'));
const PromotionDiscountPerformancePage = lazy(() => import('./pages/OurServices/RetailPromotionAnalytics/RetailPromotionAnalyticsPage'));
const CustomerLoyaltyAnalyticsPage = lazy(() => import('./pages/OurServices/CustomerLoyaltyAnalytics/CustomerLoyaltyAnalyticsPage'));
const StorePerformanceComparisonPage = lazy(() => import('./pages/OurServices/StorePerformanceAnalytics/StorePerformanceAnalyticsPage'));
const TopSellingSlowMovingProductsPage = lazy(() => import('./pages/OurServices/TopSellingSlowMovingProducts/TopSellingSlowMovingProductsPage'));

// Additional confirmed services
const BrandHealthReputationMonitoringPage = lazy(() => import('./pages/OurServices/BrandHealthReputationMonitoring/BrandHealthReputationMonitoringPage'));
const CarrierPerformanceFreightCostAnalyticsPage = lazy(() => import('./pages/OurServices/CarrierPerformanceAnalytics/CarrierPerformanceAnalyticsPage'));
const CurriculumEffectivenessLearningAnalyticsPage = lazy(() => import('./pages/OurServices/LearningAnalytics/LearningAnalyticsPage'));
const CustomerJourneyAnalyticsPage = lazy(() => import('./pages/OurServices/CustomerJourneyAnalytics/CustomerJourneyAnalyticsPage'));
const CustomerSegmentationProfilingPage = lazy(() => import('./pages/OurServices/CustomerSegmentationProfiling/CustomerSegmentationProfilingPage'));
const DemandForecastingInventoryPlanningPage = lazy(() => import('./pages/OurServices/InventoryDemandForecasting/InventoryDemandForecastingPage'));
const FleetManagementTelematicsPage = lazy(() => import('./pages/OurServices/FleetManagementTelematics/FleetManagementTelematicsPage'));
const LastMileDeliveryAnalyticsPage = lazy(() => import('./pages/OurServices/LastMileDeliveryAnalytics/LastMileDeliveryAnalyticsPage'));
const MarketingMixModelingPage = lazy(() => import('./pages/OurServices/MarketingMixModeling/MarketingMixModelingPage'));
const OperationalPerformanceAnalyticsPage = lazy(() => import('./pages/OurServices/OperationalPerformanceAnalytics/OperationalPerformanceAnalyticsPage'));
const PricingAnalyticsOptimizationPage = lazy(() => import('./pages/OurServices/PricingAnalytics/PricingAnalyticsPage'));
const RevenueOperationsAnalyticsPage = lazy(() => import('./pages/OurServices/RevenueOperationsAnalytics/RevenueOperationsAnalyticsPage'));
const RouteOptimizationPlanningPage = lazy(() => import('./pages/OurServices/RouteOptimizationPlanning/RouteOptimizationPlanningPage'));
const StaffBehaviorRetentionPage = lazy(() => import('./pages/OurServices/StaffBehaviorRetention/StaffBehaviorRetentionPage'));
const StudentPerformanceAnalyticsPage = lazy(() => import('./pages/OurServices/StudentPerformanceAnalytics/StudentPerformanceAnalyticsPage'));
const SupplyChainVisibilityTrackingPage = lazy(() => import('./pages/OurServices/SupplyChainVisibility/SupplyChainVisibilityPage'));
const WarehouseOptimizationInventoryManagementPage = lazy(() => import('./pages/OurServices/WarehouseOptimization/WarehouseOptimizationPage'));
const WorkforceHRAnalyticsPage = lazy(() => import('./pages/OurServices/WorkforceAnalytics/WorkforceAnalyticsPage'));
const MarketBasketAnalysisPage = lazy(() => import('./pages/OurServices/MarketBasketAnalysis/MarketBasketAnalysis'));

// ─── Newly wired service pages (previously had no route) ─────
const AIAutomationPage = lazy(() => import('./pages/OurServices/AIAutomation/AIAutomationPage'));
const AIConsultingPage = lazy(() => import('./pages/OurServices/AIConsulting/AIConsultingPage'));
const AMOSSEMAnalysisPage = lazy(() => import('./pages/OurServices/AMOSSEMAnalysis/AMOSSEMAnalysisPage'));
const AcademicEditingPage = lazy(() => import('./pages/OurServices/AcademicEditing/AcademicEditingPage'));
const AcademicFormattingPage = lazy(() => import('./pages/OurServices/AcademicFormatting/AcademicFormattingPage'));
const AcademicProofreadingPage = lazy(() => import('./pages/OurServices/AcademicProofreading/AcademicProofreadingPage'));
const AcademicWritingSupportPage = lazy(() => import('./pages/OurServices/AcademicWritingSupport/AcademicWritingSupportPage'));
const BigDataAssignmentHelpPage = lazy(() => import('./pages/OurServices/BigDataAssignmentHelp/BigDataAssignmentHelpPage'));
const BusinessIntelligencePage = lazy(() => import('./pages/OurServices/BusinessIntelligence/BusinessIntelligencePage'));
const ChatbotDevelopmentPage = lazy(() => import('./pages/OurServices/ChatbotDevelopment/ChatbotDevelopmentPage'));
const ClinicAnalyticsPage = lazy(() => import('./pages/OurServices/ClinicAnalytics/ClinicAnalyticsPage'));
const ClinicalDecisionSupportPage = lazy(() => import('./pages/OurServices/ClinicalDecisionSupport/ClinicalDecisionSupportPage'));
const ComputerVisionSolutionsPage = lazy(() => import('./pages/OurServices/ComputerVisionSolutions/ComputerVisionSolutionsPage'));
const ConferencePaperWritingPage = lazy(() => import('./pages/OurServices/ConferencePaperWriting/ConferencePaperWritingPage'));
const ContentAnalysisServicesPage = lazy(() => import('./pages/OurServices/ContentAnalysisServices/ContentAnalysisServicesPage'));
const CronbachAlphaAnalysisPage = lazy(() => import('./pages/OurServices/CronbachAlphaAnalysis/CronbachAlphaAnalysisPage'));
const CustomerLifetimeValueAnalyticsPage = lazy(() => import('./pages/OurServices/CustomerLifetimeValueAnalytics/CustomerLifetimeValueAnalyticsPage'));
const DataEngineeringPage = lazy(() => import('./pages/OurServices/DataEngineering/DataEngineeringPage'));
const DataMigrationPage = lazy(() => import('./pages/OurServices/DataMigration/DataMigrationPage'));
const DataMiningAssignmentHelpPage = lazy(() => import('./pages/OurServices/DataMiningAssignmentHelp/DataMiningAssignmentHelpPage'));
const DataQualityAssessmentPage = lazy(() => import('./pages/OurServices/DataQualityAssessment/DataQualityAssessmentPage'));
const DataWarehouseDevelopmentPage = lazy(() => import('./pages/OurServices/DataWarehouseDevelopment/DataWarehouseDevelopmentPage'));
const DeepLearningAssignmentHelpPage = lazy(() => import('./pages/OurServices/DeepLearningAssignmentHelp/DeepLearningAssignmentHelpPage'));
const DeepLearningSolutionsPage = lazy(() => import('./pages/OurServices/DeepLearningSolutions/DeepLearningSolutionsPage'));
const DeliveryPerformanceAnalyticsPage = lazy(() => import('./pages/OurServices/DeliveryPerformanceAnalytics/DeliveryPerformanceAnalyticsPage'));
const DissertationStatisticsHelpPage = lazy(() => import('./pages/OurServices/DissertationStatisticsHelp/DissertationStatisticsHelpPage'));
const ETLPipelineDevelopmentPage = lazy(() => import('./pages/OurServices/ETLPipelineDevelopment/ETLPipelineDevelopmentPage'));
const EViewsAssignmentHelpPage = lazy(() => import('./pages/OurServices/EViewsAssignmentHelp/EViewsAssignmentHelpPage'));
const EconometricsAssignmentHelpPage = lazy(() => import('./pages/OurServices/EconometricsAssignmentHelp/EconometricsAssignmentHelpPage'));
const ExcelAssignmentHelpPage = lazy(() => import('./pages/OurServices/ExcelAssignmentHelp/ExcelAssignmentHelpPage'));
const ExperimentalDesignConsultingPage = lazy(() => import('./pages/OurServices/ExperimentalDesignConsulting/ExperimentalDesignConsultingPage'));
const FactorAnalysisHelpPage = lazy(() => import('./pages/OurServices/FactorAnalysisHelp/FactorAnalysisHelpPage'));
const FactoryPerformanceAnalyticsPage = lazy(() => import('./pages/OurServices/FactoryPerformanceAnalytics/FactoryPerformanceAnalyticsPage'));
const FleetAnalyticsPage = lazy(() => import('./pages/OurServices/FleetAnalytics/FleetAnalyticsPage'));
const FreightCostAnalyticsPage = lazy(() => import('./pages/OurServices/FreightCostAnalytics/FreightCostAnalyticsPage'));
const GenerativeAIConsultingPage = lazy(() => import('./pages/OurServices/GenerativeAIConsulting/GenerativeAIConsultingPage'));
const GraphPadPrismHelpPage = lazy(() => import('./pages/OurServices/GraphPadPrismHelp/GraphPadPrismHelpPage'));
const GroundedTheoryAnalysisPage = lazy(() => import('./pages/OurServices/GroundedTheoryAnalysis/GroundedTheoryAnalysisPage'));
const HealthcareBIPage = lazy(() => import('./pages/OurServices/HealthcareBI/HealthcareBIPage'));
const HealthcareDashboardDevelopmentPage = lazy(() => import('./pages/OurServices/HealthcareDashboardDevelopment/HealthcareDashboardDevelopmentPage'));
const HealthcareRevenueAnalyticsPage = lazy(() => import('./pages/OurServices/HealthcareRevenueAnalytics/HealthcareRevenueAnalyticsPage'));
const HospitalAnalyticsPage = lazy(() => import('./pages/OurServices/HospitalAnalytics/HospitalAnalyticsPage'));
const HospitalOperationsAnalyticsPage = lazy(() => import('./pages/OurServices/HospitalOperationsAnalytics/HospitalOperationsAnalyticsPage'));
const JAMOVIAssignmentHelpPage = lazy(() => import('./pages/OurServices/JAMOVIAssignmentHelp/JAMOVIAssignmentHelpPage'));
const JASPAssignmentHelpPage = lazy(() => import('./pages/OurServices/JASPAssignmentHelp/JASPAssignmentHelpPage'));
const JournalFormattingPage = lazy(() => import('./pages/OurServices/JournalFormatting/JournalFormattingPage'));
const JournalManuscriptEditingPage = lazy(() => import('./pages/OurServices/JournalManuscriptEditing/JournalManuscriptEditingPage'));
const JournalPublicationSupportPage = lazy(() => import('./pages/OurServices/JournalPublicationSupport/JournalPublicationSupportPage'));
const JournalSubmissionSupportPage = lazy(() => import('./pages/OurServices/JournalSubmissionSupport/JournalSubmissionSupportPage'));
const LLMDevelopmentPage = lazy(() => import('./pages/OurServices/LLMDevelopment/LLMDevelopmentPage'));
const LookerStudioConsultingPage = lazy(() => import('./pages/OurServices/LookerStudioConsulting/LookerStudioConsultingPage'));
const MATLABAssignmentHelpPage = lazy(() => import('./pages/OurServices/MATLABAssignmentHelp/MATLABAssignmentHelpPage'));
const MATLABDataAnalysisPage = lazy(() => import('./pages/OurServices/MATLABDataAnalysis/MATLABDataAnalysisPage'));
const MATLABProgrammingAssignmentHelpPage = lazy(() => import('./pages/OurServices/MATLABProgrammingAssignmentHelp/MATLABProgrammingAssignmentHelpPage'));
const MATLABSimulationHelpPage = lazy(() => import('./pages/OurServices/MATLABSimulationHelp/MATLABSimulationHelpPage'));
const MLOpsConsultingPage = lazy(() => import('./pages/OurServices/MLOpsConsulting/MLOpsConsultingPage'));
const MachineLearningAssignmentHelpPage = lazy(() => import('./pages/OurServices/MachineLearningAssignmentHelp/MachineLearningAssignmentHelpPage'));
const MachineLearningConsultingPage = lazy(() => import('./pages/OurServices/MachineLearningConsulting/MachineLearningConsultingPage'));
const ManufacturingAnalyticsPage = lazy(() => import('./pages/OurServices/ManufacturingAnalytics/ManufacturingAnalyticsPage'));
const ManufacturingForecastingPage = lazy(() => import('./pages/OurServices/ManufacturingForecasting/ManufacturingForecastingPage'));
const ManufacturingKPIsPage = lazy(() => import('./pages/OurServices/ManufacturingKPIs/ManufacturingKPIsPage'));
const MedicalClaimsAnalyticsPage = lazy(() => import('./pages/OurServices/MedicalClaimsAnalytics/MedicalClaimsAnalyticsPage'));
const MetaAnalysisDataAnalysisPage = lazy(() => import('./pages/OurServices/MetaAnalysisDataAnalysis/MetaAnalysisDataAnalysisPage'));
const MetaAnalysisServicesPage = lazy(() => import('./pages/OurServices/MetaAnalysisServices/MetaAnalysisServicesPage'));
const MinitabAssignmentHelpPage = lazy(() => import('./pages/OurServices/MinitabAssignmentHelp/MinitabAssignmentHelpPage'));
const MixedMethodsResearchPage = lazy(() => import('./pages/OurServices/MixedMethodsResearch/MixedMethodsResearchPage'));
const NVivoAnalysisHelpPage = lazy(() => import('./pages/OurServices/NVivoAnalysisHelp/NVivoAnalysisHelpPage'));
const NaturalLanguageProcessingPage = lazy(() => import('./pages/OurServices/NaturalLanguageProcessing/NaturalLanguageProcessingPage'));
const OriginProAssignmentHelpPage = lazy(() => import('./pages/OurServices/OriginProAssignmentHelp/OriginProAssignmentHelpPage'));
const PLSSEMAnalysisPage = lazy(() => import('./pages/OurServices/PLSSEMAnalysis/PLSSEMAnalysisPage'));
const PatientFlowAnalyticsPage = lazy(() => import('./pages/OurServices/PatientFlowAnalytics/PatientFlowAnalyticsPage'));
const PowerBIAssignmentHelpPage = lazy(() => import('./pages/OurServices/PowerBIAssignmentHelp/PowerBIAssignmentHelpPage'));
const PowerBIConsultingPage = lazy(() => import('./pages/OurServices/PowerBIConsulting/PowerBIConsultingPage'));
const PredictiveAnalyticsPage = lazy(() => import('./pages/OurServices/PredictiveAnalytics/PredictiveAnalyticsPage'));
const PredictiveMaintenancePage = lazy(() => import('./pages/OurServices/PredictiveMaintenance/PredictiveMaintenancePage'));
const PrincipalComponentAnalysisPage = lazy(() => import('./pages/OurServices/PrincipalComponentAnalysis/PrincipalComponentAnalysisPage'));
const ProductionAnalyticsPage = lazy(() => import('./pages/OurServices/ProductionAnalytics/ProductionAnalyticsPage'));
const PublicationReadyManuscriptPage = lazy(() => import('./pages/OurServices/PublicationReadyManuscript/PublicationReadyManuscriptPage'));
const PyTorchAssignmentHelpPage = lazy(() => import('./pages/OurServices/PyTorchAssignmentHelp/PyTorchAssignmentHelpPage'));
const PythonAssignmentHelpPage = lazy(() => import('./pages/OurServices/PythonAssignmentHelp/PythonAssignmentHelpPage'));
const QualitativeDataAnalysisPage = lazy(() => import('./pages/OurServices/QualitativeDataAnalysis/QualitativeDataAnalysisPage'));
const QualityControlAnalyticsPage = lazy(() => import('./pages/OurServices/QualityControlAnalytics/QualityControlAnalyticsPage'));
const QuestionnaireDesignHelpPage = lazy(() => import('./pages/OurServices/QuestionnaireDesignHelp/QuestionnaireDesignHelpPage'));
const QuestionnaireValidationPage = lazy(() => import('./pages/OurServices/QuestionnaireValidation/QuestionnaireValidationPage'));
const RProgrammingAssignmentHelpPage = lazy(() => import('./pages/OurServices/RProgrammingAssignmentHelp/RProgrammingAssignmentHelpPage'));
const RStudioAssignmentHelpPage = lazy(() => import('./pages/OurServices/RStudioAssignmentHelp/RStudioAssignmentHelpPage'));
const RecommendationSystemsPage = lazy(() => import('./pages/OurServices/RecommendationSystems/RecommendationSystemsPage'));
const RegressionAnalysisHelpPage = lazy(() => import('./pages/OurServices/RegressionAnalysisHelp/RegressionAnalysisHelpPage'));
const ResearchDesignConsultingPage = lazy(() => import('./pages/OurServices/ResearchDesignConsulting/ResearchDesignConsultingPage'));
const ResearchGapAnalysisPage = lazy(() => import('./pages/OurServices/ResearchGapAnalysis/ResearchGapAnalysisPage'));
const ResearchMethodologySupportPage = lazy(() => import('./pages/OurServices/ResearchMethodologySupport/ResearchMethodologySupportPage'));
const ResearchPaperEditingPage = lazy(() => import('./pages/OurServices/ResearchPaperEditing/ResearchPaperEditingPage'));
const ResearchPaperWritingPage = lazy(() => import('./pages/OurServices/ResearchPaperWriting/ResearchPaperWritingPage'));
const ResearchProposalHelpPage = lazy(() => import('./pages/OurServices/ResearchProposalHelp/ResearchProposalHelpPage'));
const RetailAnalyticsPage = lazy(() => import('./pages/OurServices/RetailAnalytics/RetailAnalyticsPage'));
const RetailDashboardDevelopmentPage = lazy(() => import('./pages/OurServices/RetailDashboardDevelopment/RetailDashboardDevelopmentPage'));
const RetailPricingAnalyticsPage = lazy(() => import('./pages/OurServices/RetailPricingAnalytics/RetailPricingAnalyticsPage'));
const RetailRevenueAnalyticsPage = lazy(() => import('./pages/OurServices/RetailRevenueAnalytics/RetailRevenueAnalyticsPage'));
const RetailSalesAnalyticsPage = lazy(() => import('./pages/OurServices/RetailSalesAnalytics/RetailSalesAnalyticsPage'));
const SASAssignmentHelpPage = lazy(() => import('./pages/OurServices/SASAssignmentHelp/SASAssignmentHelpPage'));
const SQLAssignmentHelpPage = lazy(() => import('./pages/OurServices/SQLAssignmentHelp/SQLAssignmentHelpPage'));
const ScaleReliabilityAnalysisPage = lazy(() => import('./pages/OurServices/ScaleReliabilityAnalysis/ScaleReliabilityAnalysisPage'));
const ScientificManuscriptEditingPage = lazy(() => import('./pages/OurServices/ScientificManuscriptEditing/ScientificManuscriptEditingPage'));
const ScientificResearchConsultingPage = lazy(() => import('./pages/OurServices/ScientificResearchConsulting/ScientificResearchConsultingPage'));
const ScientificResearchDataAnalysisPage = lazy(() => import('./pages/OurServices/ScientificResearchDataAnalysis/ScientificResearchDataAnalysisPage'));
const ScientificResearchSupportPage = lazy(() => import('./pages/OurServices/ScientificResearchSupport/ScientificResearchSupportPage'));
const ScientificResearchWritingPage = lazy(() => import('./pages/OurServices/ScientificResearchWriting/ScientificResearchWritingPage'));
const ScopingReviewSupportPage = lazy(() => import('./pages/OurServices/ScopingReviewSupport/ScopingReviewSupportPage'));
const ShipmentAnalyticsPage = lazy(() => import('./pages/OurServices/ShipmentAnalytics/ShipmentAnalyticsPage'));
const StataAssignmentHelpPage = lazy(() => import('./pages/OurServices/StataAssignmentHelp/StataAssignmentHelpPage'));
const StatisticalAnalysisConsultingPage = lazy(() => import('./pages/OurServices/StatisticalAnalysisConsulting/StatisticalAnalysisConsultingPage'));
const StructuralEquationModelingPage = lazy(() => import('./pages/OurServices/StructuralEquationModeling/StructuralEquationModelingPage'));
const SupplyChainAnalyticsPage = lazy(() => import('./pages/OurServices/SupplyChainAnalytics/SupplyChainAnalyticsPage'));
const SupplyPlanningPage = lazy(() => import('./pages/OurServices/SupplyPlanning/SupplyPlanningPage'));
const SurveyDataCleaningPage = lazy(() => import('./pages/OurServices/SurveyDataCleaning/SurveyDataCleaningPage'));
const SystematicLiteratureReviewPage = lazy(() => import('./pages/OurServices/SystematicLiteratureReview/SystematicLiteratureReviewPage'));
const SystematicReviewDataAnalysisPage = lazy(() => import('./pages/OurServices/SystematicReviewDataAnalysis/SystematicReviewDataAnalysisPage'));
const TableauAssignmentHelpPage = lazy(() => import('./pages/OurServices/TableauAssignmentHelp/TableauAssignmentHelpPage'));
const TableauConsultingPage = lazy(() => import('./pages/OurServices/TableauConsulting/TableauConsultingPage'));
const TechnicalReportWritingPage = lazy(() => import('./pages/OurServices/TechnicalReportWriting/TechnicalReportWritingPage'));
const TensorFlowAssignmentHelpPage = lazy(() => import('./pages/OurServices/TensorFlowAssignmentHelp/TensorFlowAssignmentHelpPage'));
const ThematicAnalysisServicesPage = lazy(() => import('./pages/OurServices/ThematicAnalysisServices/ThematicAnalysisServicesPage'));
const ThesisDataAnalysisPage = lazy(() => import('./pages/OurServices/ThesisDataAnalysis/ThesisDataAnalysisPage'));
const TimeSeriesAnalysisHelpPage = lazy(() => import('./pages/OurServices/TimeSeriesAnalysisHelp/TimeSeriesAnalysisHelpPage'));
const TransportAnalyticsPage = lazy(() => import('./pages/OurServices/TransportAnalytics/TransportAnalyticsPage'));
const WarehouseAnalyticsPage = lazy(() => import('./pages/OurServices/WarehouseAnalytics/WarehouseAnalyticsPage'));

const AppContent = () => {
    const location = useLocation();

    useEffect(() => {
        const pageName = location.pathname.replace('/', '') || 'home';
        apiService.trackPageView(pageName);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={styles.app}>
            <main className={styles.main}>
                <ErrorBoundary>
                    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />

                            <Route path="/company" element={<CompanyPage />} />
                            <Route path="/why-us" element={<WhyUsPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/faq" element={<FAQPage />} />

                            <Route path="/resources" element={<ResourcesPage />} />
                            <Route path="/resources/:slug" element={<ArticlePage />} />

                            <Route path="/dental-analytics" element={<IndustryLandingPage dataKey="dental-analytics" />} />
                            <Route path="/veterinary-analytics" element={<IndustryLandingPage dataKey="veterinary-analytics" />} />
                            <Route path="/medical-practice-analytics" element={<IndustryLandingPage dataKey="medical-practice-analytics" />} />

                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/portfolio/bi" element={<PortfolioBIPage />} />
                            <Route path="/portfolio/ai" element={<PortfolioAIPage />} />
                            <Route path="/portfolio/pipelines" element={<PortfolioPipelinesPage />} />
                            <Route path="/portfolio/mobile" element={<PortfolioMobilePage />} />

                            <Route path="/clients" element={<ClientsPage />} />
                            <Route path="/testimonials" element={<TestimonialsPage />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />

                            {/* Service Routes */}
                            <Route path="/services/data-cleaning" element={<DataCleaningPage />} />
                            <Route path="/services/data-visualization" element={<DataVisualizationPage />} />
                            <Route path="/services/dashboard-development" element={<DashboardDevelopmentPage />} />
                            <Route path="/services/excel-decision-modeling" element={<ExcelDecisionModelingPage />} />

                            <Route path="/services/research-data-analysis" element={<ResearchDataAnalysisPage />} />
                            <Route path="/services/chapter-4-analysis" element={<Chapter4AnalysisPage />} />
                            <Route path="/services/survey-data-analysis" element={<SurveyDataAnalysisPage />} />
                            <Route path="/services/spss-data-analysis" element={<SPSSDataAnalysisPage />} />
                            <Route path="/services/report-writing-support" element={<ReportWritingSupportPage />} />

                            <Route path="/services/fraud-detection-prevention" element={<FraudDetectionPreventionPage />} />
                            <Route path="/services/credit-risk-scoring" element={<CreditRiskScoringPage />} />
                            <Route path="/services/sales-forecasting-demand-planning" element={<SalesForecastingDemandPlanningPage />} />
                            <Route path="/services/customer-churn-lifetime-value" element={<CustomerChurnLifetimeValuePage />} />
                            <Route path="/services/regulatory-compliance-analytics" element={<RegulatoryComplianceAnalyticsPage />} />
                            <Route path="/services/algorithmic-trading-analytics" element={<AlgorithmicTradingAnalyticsPage />} />
                            <Route path="/services/portfolio-optimization-risk-management" element={<PortfolioOptimizationRiskManagementPage />} />
                            <Route path="/services/financial-statement-analysis" element={<FinancialStatementAnalysisPage />} />
                            <Route path="/services/insurance-claims-analytics" element={<InsuranceClaimsAnalyticsPage />} />
                            <Route path="/services/market-sentiment-analysis" element={<MarketSentimentAnalysisPage />} />
                            <Route path="/services/financial-planning-analysis" element={<FinancialPlanningAnalysisPage />} />

                            <Route path="/services/readmission-risk-prediction" element={<ReadmissionRiskPredictionPage />} />
                            <Route path="/services/population-health-analytics" element={<PopulationHealthAnalyticsPage />} />
                            <Route path="/services/healthcare-cost-utilization-analysis" element={<HealthcareCostUtilizationAnalysisPage />} />
                            <Route path="/services/clinical-pathway-optimization" element={<ClinicalPathwayOptimizationPage />} />
                            <Route path="/services/patient-experience-satisfaction-analytics" element={<PatientExperienceSatisfactionAnalyticsPage />} />
                            <Route path="/services/telehealth-remote-monitoring-analytics" element={<TelehealthRemoteMonitoringAnalyticsPage />} />
                            <Route path="/services/medical-imaging-radiology-analytics" element={<MedicalImagingRadiologyAnalyticsPage />} />
                            <Route path="/services/healthcare-supply-chain-analytics" element={<HealthcareSupplyChainAnalyticsPage />} />
                            <Route path="/services/clinical-trial-analytics" element={<ClinicalTrialAnalyticsPage />} />
                            <Route path="/services/healthcare-workforce-staffing-analytics" element={<HealthcareWorkforceStaffingAnalyticsPage />} />

                            <Route path="/services/sales-performance-dashboard" element={<SalesPerformanceDashboardPage />} />
                            <Route path="/services/inventory-management-analytics" element={<InventoryManagementAnalyticsPage />} />
                            <Route path="/services/demand-forecasting" element={<DemandForecastingPage />} />
                            <Route path="/services/pricing-optimization" element={<PricingOptimizationPage />} />
                            <Route path="/services/customer-purchase-analysis" element={<CustomerPurchaseAnalysisPage />} />
                            <Route path="/services/product-recommendations" element={<ProductRecommendationsPage />} />
                            <Route path="/services/promotion-discount-performance" element={<PromotionDiscountPerformancePage />} />
                            <Route path="/services/customer-loyalty-analytics" element={<CustomerLoyaltyAnalyticsPage />} />
                            <Route path="/services/store-performance-comparison" element={<StorePerformanceComparisonPage />} />
                            <Route path="/services/top-selling-slow-moving-products" element={<TopSellingSlowMovingProductsPage />} />

                            <Route path="/services/brand-health-reputation-monitoring" element={<BrandHealthReputationMonitoringPage />} />
                            <Route path="/services/carrier-performance-freight-cost-analytics" element={<CarrierPerformanceFreightCostAnalyticsPage />} />
                            <Route path="/services/curriculum-effectiveness-learning-analytics" element={<CurriculumEffectivenessLearningAnalyticsPage />} />
                            <Route path="/services/customer-journey-analytics" element={<CustomerJourneyAnalyticsPage />} />
                            <Route path="/services/customer-segmentation-profiling" element={<CustomerSegmentationProfilingPage />} />
                            <Route path="/services/demand-forecasting-inventory-planning" element={<DemandForecastingInventoryPlanningPage />} />
                            <Route path="/services/fleet-management-telematics" element={<FleetManagementTelematicsPage />} />
                            <Route path="/services/last-mile-delivery-analytics" element={<LastMileDeliveryAnalyticsPage />} />
                            <Route path="/services/marketing-mix-modeling" element={<MarketingMixModelingPage />} />
                            <Route path="/services/operational-performance-analytics" element={<OperationalPerformanceAnalyticsPage />} />
                            <Route path="/services/pricing-analytics-optimization" element={<PricingAnalyticsOptimizationPage />} />
                            <Route path="/services/revenue-operations-analytics" element={<RevenueOperationsAnalyticsPage />} />
                            <Route path="/services/route-optimization-planning" element={<RouteOptimizationPlanningPage />} />
                            <Route path="/services/staff-behavior-retention" element={<StaffBehaviorRetentionPage />} />
                            <Route path="/services/student-performance-analytics" element={<StudentPerformanceAnalyticsPage />} />
                            <Route path="/services/supply-chain-visibility-tracking" element={<SupplyChainVisibilityTrackingPage />} />
                            <Route path="/services/warehouse-optimization-inventory-management" element={<WarehouseOptimizationInventoryManagementPage />} />
                            <Route path="/services/workforce-hr-analytics" element={<WorkforceHRAnalyticsPage />} />
                            <Route path="/services/market-basket-analysis" element={<MarketBasketAnalysisPage />} />

                            {/* ─── Newly wired service routes ─────────────────────── */}
                            <Route path="/services/ai-automation" element={<AIAutomationPage />} />
                            <Route path="/services/ai-consulting" element={<AIConsultingPage />} />
                            <Route path="/services/amos-sem-analysis" element={<AMOSSEMAnalysisPage />} />
                            <Route path="/services/academic-editing" element={<AcademicEditingPage />} />
                            <Route path="/services/academic-formatting" element={<AcademicFormattingPage />} />
                            <Route path="/services/academic-proofreading" element={<AcademicProofreadingPage />} />
                            <Route path="/services/academic-writing-support" element={<AcademicWritingSupportPage />} />
                            <Route path="/services/big-data-assignment-help" element={<BigDataAssignmentHelpPage />} />
                            <Route path="/services/business-intelligence" element={<BusinessIntelligencePage />} />
                            <Route path="/services/chatbot-development" element={<ChatbotDevelopmentPage />} />
                            <Route path="/services/clinic-analytics" element={<ClinicAnalyticsPage />} />
                            <Route path="/services/clinical-decision-support" element={<ClinicalDecisionSupportPage />} />
                            <Route path="/services/computer-vision-solutions" element={<ComputerVisionSolutionsPage />} />
                            <Route path="/services/conference-paper-writing" element={<ConferencePaperWritingPage />} />
                            <Route path="/services/content-analysis-services" element={<ContentAnalysisServicesPage />} />
                            <Route path="/services/cronbach-alpha-analysis" element={<CronbachAlphaAnalysisPage />} />
                            <Route path="/services/customer-lifetime-value-analytics" element={<CustomerLifetimeValueAnalyticsPage />} />
                            <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
                            <Route path="/services/data-migration" element={<DataMigrationPage />} />
                            <Route path="/services/data-mining-assignment-help" element={<DataMiningAssignmentHelpPage />} />
                            <Route path="/services/data-quality-assessment" element={<DataQualityAssessmentPage />} />
                            <Route path="/services/data-warehouse-development" element={<DataWarehouseDevelopmentPage />} />
                            <Route path="/services/deep-learning-assignment-help" element={<DeepLearningAssignmentHelpPage />} />
                            <Route path="/services/deep-learning-solutions" element={<DeepLearningSolutionsPage />} />
                            <Route path="/services/delivery-performance-analytics" element={<DeliveryPerformanceAnalyticsPage />} />
                            <Route path="/services/dissertation-statistics-help" element={<DissertationStatisticsHelpPage />} />
                            <Route path="/services/etl-pipeline-development" element={<ETLPipelineDevelopmentPage />} />
                            <Route path="/services/eviews-assignment-help" element={<EViewsAssignmentHelpPage />} />
                            <Route path="/services/econometrics-assignment-help" element={<EconometricsAssignmentHelpPage />} />
                            <Route path="/services/excel-assignment-help" element={<ExcelAssignmentHelpPage />} />
                            <Route path="/services/experimental-design-consulting" element={<ExperimentalDesignConsultingPage />} />
                            <Route path="/services/factor-analysis-help" element={<FactorAnalysisHelpPage />} />
                            <Route path="/services/factory-performance-analytics" element={<FactoryPerformanceAnalyticsPage />} />
                            <Route path="/services/fleet-analytics" element={<FleetAnalyticsPage />} />
                            <Route path="/services/freight-cost-analytics" element={<FreightCostAnalyticsPage />} />
                            <Route path="/services/generative-ai-consulting" element={<GenerativeAIConsultingPage />} />
                            <Route path="/services/graphpad-prism-help" element={<GraphPadPrismHelpPage />} />
                            <Route path="/services/grounded-theory-analysis" element={<GroundedTheoryAnalysisPage />} />
                            <Route path="/services/healthcare-bi" element={<HealthcareBIPage />} />
                            <Route path="/services/healthcare-dashboard-development" element={<HealthcareDashboardDevelopmentPage />} />
                            <Route path="/services/healthcare-revenue-analytics" element={<HealthcareRevenueAnalyticsPage />} />
                            <Route path="/services/hospital-analytics" element={<HospitalAnalyticsPage />} />
                            <Route path="/services/hospital-operations-analytics" element={<HospitalOperationsAnalyticsPage />} />
                            <Route path="/services/jamovi-assignment-help" element={<JAMOVIAssignmentHelpPage />} />
                            <Route path="/services/jasp-assignment-help" element={<JASPAssignmentHelpPage />} />
                            <Route path="/services/journal-formatting" element={<JournalFormattingPage />} />
                            <Route path="/services/journal-manuscript-editing" element={<JournalManuscriptEditingPage />} />
                            <Route path="/services/journal-publication-support" element={<JournalPublicationSupportPage />} />
                            <Route path="/services/journal-submission-support" element={<JournalSubmissionSupportPage />} />
                            <Route path="/services/llm-development" element={<LLMDevelopmentPage />} />
                            <Route path="/services/looker-studio-consulting" element={<LookerStudioConsultingPage />} />
                            <Route path="/services/matlab-assignment-help" element={<MATLABAssignmentHelpPage />} />
                            <Route path="/services/matlab-data-analysis" element={<MATLABDataAnalysisPage />} />
                            <Route path="/services/matlab-programming-assignment-help" element={<MATLABProgrammingAssignmentHelpPage />} />
                            <Route path="/services/matlab-simulation-help" element={<MATLABSimulationHelpPage />} />
                            <Route path="/services/mlops-consulting" element={<MLOpsConsultingPage />} />
                            <Route path="/services/machine-learning-assignment-help" element={<MachineLearningAssignmentHelpPage />} />
                            <Route path="/services/machine-learning-consulting" element={<MachineLearningConsultingPage />} />
                            <Route path="/services/manufacturing-analytics" element={<ManufacturingAnalyticsPage />} />
                            <Route path="/services/manufacturing-forecasting" element={<ManufacturingForecastingPage />} />
                            <Route path="/services/manufacturing-kp-is" element={<ManufacturingKPIsPage />} />
                            <Route path="/services/medical-claims-analytics" element={<MedicalClaimsAnalyticsPage />} />
                            <Route path="/services/meta-analysis-data-analysis" element={<MetaAnalysisDataAnalysisPage />} />
                            <Route path="/services/meta-analysis-services" element={<MetaAnalysisServicesPage />} />
                            <Route path="/services/minitab-assignment-help" element={<MinitabAssignmentHelpPage />} />
                            <Route path="/services/mixed-methods-research" element={<MixedMethodsResearchPage />} />
                            <Route path="/services/nvivo-analysis-help" element={<NVivoAnalysisHelpPage />} />
                            <Route path="/services/natural-language-processing" element={<NaturalLanguageProcessingPage />} />
                            <Route path="/services/originpro-assignment-help" element={<OriginProAssignmentHelpPage />} />
                            <Route path="/services/pls-sem-analysis" element={<PLSSEMAnalysisPage />} />
                            <Route path="/services/patient-flow-analytics" element={<PatientFlowAnalyticsPage />} />
                            <Route path="/services/power-bi-assignment-help" element={<PowerBIAssignmentHelpPage />} />
                            <Route path="/services/power-bi-consulting" element={<PowerBIConsultingPage />} />
                            <Route path="/services/predictive-analytics" element={<PredictiveAnalyticsPage />} />
                            <Route path="/services/predictive-maintenance" element={<PredictiveMaintenancePage />} />
                            <Route path="/services/principal-component-analysis" element={<PrincipalComponentAnalysisPage />} />
                            <Route path="/services/production-analytics" element={<ProductionAnalyticsPage />} />
                            <Route path="/services/publication-ready-manuscript" element={<PublicationReadyManuscriptPage />} />
                            <Route path="/services/pytorch-assignment-help" element={<PyTorchAssignmentHelpPage />} />
                            <Route path="/services/python-assignment-help" element={<PythonAssignmentHelpPage />} />
                            <Route path="/services/qualitative-data-analysis" element={<QualitativeDataAnalysisPage />} />
                            <Route path="/services/quality-control-analytics" element={<QualityControlAnalyticsPage />} />
                            <Route path="/services/questionnaire-design-help" element={<QuestionnaireDesignHelpPage />} />
                            <Route path="/services/questionnaire-validation" element={<QuestionnaireValidationPage />} />
                            <Route path="/services/r-programming-assignment-help" element={<RProgrammingAssignmentHelpPage />} />
                            <Route path="/services/rstudio-assignment-help" element={<RStudioAssignmentHelpPage />} />
                            <Route path="/services/recommendation-systems" element={<RecommendationSystemsPage />} />
                            <Route path="/services/regression-analysis-help" element={<RegressionAnalysisHelpPage />} />
                            <Route path="/services/research-design-consulting" element={<ResearchDesignConsultingPage />} />
                            <Route path="/services/research-gap-analysis" element={<ResearchGapAnalysisPage />} />
                            <Route path="/services/research-methodology-support" element={<ResearchMethodologySupportPage />} />
                            <Route path="/services/research-paper-editing" element={<ResearchPaperEditingPage />} />
                            <Route path="/services/research-paper-writing" element={<ResearchPaperWritingPage />} />
                            <Route path="/services/research-proposal-help" element={<ResearchProposalHelpPage />} />
                            <Route path="/services/retail-analytics" element={<RetailAnalyticsPage />} />
                            <Route path="/services/retail-dashboard-development" element={<RetailDashboardDevelopmentPage />} />
                            <Route path="/services/retail-pricing-analytics" element={<RetailPricingAnalyticsPage />} />
                            <Route path="/services/retail-revenue-analytics" element={<RetailRevenueAnalyticsPage />} />
                            <Route path="/services/retail-sales-analytics" element={<RetailSalesAnalyticsPage />} />
                            <Route path="/services/sas-assignment-help" element={<SASAssignmentHelpPage />} />
                            <Route path="/services/sql-assignment-help" element={<SQLAssignmentHelpPage />} />
                            <Route path="/services/scale-reliability-analysis" element={<ScaleReliabilityAnalysisPage />} />
                            <Route path="/services/scientific-manuscript-editing" element={<ScientificManuscriptEditingPage />} />
                            <Route path="/services/scientific-research-consulting" element={<ScientificResearchConsultingPage />} />
                            <Route path="/services/scientific-research-data-analysis" element={<ScientificResearchDataAnalysisPage />} />
                            <Route path="/services/scientific-research-support" element={<ScientificResearchSupportPage />} />
                            <Route path="/services/scientific-research-writing" element={<ScientificResearchWritingPage />} />
                            <Route path="/services/scoping-review-support" element={<ScopingReviewSupportPage />} />
                            <Route path="/services/shipment-analytics" element={<ShipmentAnalyticsPage />} />
                            <Route path="/services/stata-assignment-help" element={<StataAssignmentHelpPage />} />
                            <Route path="/services/statistical-analysis-consulting" element={<StatisticalAnalysisConsultingPage />} />
                            <Route path="/services/structural-equation-modeling" element={<StructuralEquationModelingPage />} />
                            <Route path="/services/supply-chain-analytics" element={<SupplyChainAnalyticsPage />} />
                            <Route path="/services/supply-planning" element={<SupplyPlanningPage />} />
                            <Route path="/services/survey-data-cleaning" element={<SurveyDataCleaningPage />} />
                            <Route path="/services/systematic-literature-review" element={<SystematicLiteratureReviewPage />} />
                            <Route path="/services/systematic-review-data-analysis" element={<SystematicReviewDataAnalysisPage />} />
                            <Route path="/services/tableau-assignment-help" element={<TableauAssignmentHelpPage />} />
                            <Route path="/services/tableau-consulting" element={<TableauConsultingPage />} />
                            <Route path="/services/technical-report-writing" element={<TechnicalReportWritingPage />} />
                            <Route path="/services/tensorflow-assignment-help" element={<TensorFlowAssignmentHelpPage />} />
                            <Route path="/services/thematic-analysis-services" element={<ThematicAnalysisServicesPage />} />
                            <Route path="/services/thesis-data-analysis" element={<ThesisDataAnalysisPage />} />
                            <Route path="/services/time-series-analysis-help" element={<TimeSeriesAnalysisHelpPage />} />
                            <Route path="/services/transport-analytics" element={<TransportAnalyticsPage />} />
                            <Route path="/services/warehouse-analytics" element={<WarehouseAnalyticsPage />} />

                            {/* Legacy href aliases for existing cards pointing at renamed pages */}
                            <Route path="/services/research-methodology-consulting" element={<ResearchMethodologySupportPage />} />
                            <Route path="/services/statistical-consulting" element={<StatisticalAnalysisConsultingPage />} />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

function App() {
    return (
        <HelmetProvider>
            <Router>
                <AppContent />
            </Router>
        </HelmetProvider>
    );
}

export default App;