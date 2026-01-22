import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Database, BookOpen, Shield, Star, TrendingUp, Users, Zap, Globe, LineChart, PieChart, Brain, Target, Clock, Award, Play, Sparkles } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const HomepageContainer = styled.div`
  padding-top: 40px;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem 4rem;
  overflow: hidden;
`;

const HeroParallaxBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%);
  pointer-events: none;
  transition: transform 0.1s ease-out;
`;

const HeroContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroTextContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  transition: transform 0.3s ease-out;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 1.5rem;
`;

const BadgeIcon = styled.div`
  width: 16px;
  height: 16px;
  color: #60a5fa;
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const HeroTitleHighlight = styled.span`
  display: block;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.5rem;
`;

const CursorBlink = styled.span`
  animation: ${blink} 1s step-end infinite;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const HeroCtaButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CtaPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 2.25rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.5);
  }
`;

const CtaSecondary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 2.25rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const CtaContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CtaIcon = styled.div`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

const TrustIndicators = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  font-size: 0.875rem;
  color: #94a3b8;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TrustIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #22c55e;
`;

const HeroStatsPanel = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StatIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: #e2e8f0;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.1);
`;

const HeroImageFloat = styled.div`
  animation: ${float} 3s ease-in-out infinite;
`;

const SocialProofBar = styled.div`
  background: linear-gradient(135deg, #16a34a 0%, #14b8a6 100%);
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const SocialProofContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ProofItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

const ProofIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const ProofStar = styled.div`
  fill: #fbbf24;
  color: #fbbf24;
`;

const ProofDivider = styled.div`
  height: 24px;
  width: 1px;
  background: rgba(255, 255, 255, 0.3);
`;

const FullwidthImageSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const FullwidthImageOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FullwidthBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const FullwidthOverlayGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 58, 138, 0.75) 100%);
`;

const FullwidthOverlayContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 2rem;
`;

const FullwidthTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

const FullwidthText = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  max-width: 700px;
`;

const FullwidthCtaBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  color: #1e3a8a;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.3);
  }
`;

const BtnIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const ServicesSection = styled.section`
  padding: 6rem 1.5rem;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 0%, rgba(30, 58, 138, 0.5) 100%);
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #cbd5e1;
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 480px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.4);
  }
`;

const ServiceCardActive = styled(ServiceCard)`
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.5);
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const ServiceOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.4) 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ServiceContent = styled.div`
  color: white;
  position: relative;
  z-index: 2;
`;

const ServiceIcon = styled.div.attrs<{ gradient: string }>(({ gradient }) => ({
  className: `bg-gradient-to-br ${gradient}`,
}))`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
`;

const IconSvg = styled.div`
  width: 32px;
  height: 32px;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: #e2e8f0;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

const ServiceFeatures = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s ease;
  margin: 1rem 0;
`;

const FeaturesVisible = styled(ServiceFeatures)`
  max-height: 200px;
  opacity: 1;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
  font-size: 0.875rem;
  color: #cbd5e1;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

const FeatureIcon = styled.div`
  width: 16px;
  height: 16px;
  color: #22c55e;
`;

const ServiceMetrics = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MetricItem = styled.div`
  text-align: left;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
`;

const MetricImpact = styled.div`
  color: #22c55e;
`;

const MetricLabel = styled.div`
  font-size: 0.75rem;
  color: #cbd5e1;
`;

const ServiceCta = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CtaActive = styled(ServiceCta)`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
  }
`;

const ServiceCtaIcon = styled.div`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

const SplitSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 500px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SplitSectionReverse = styled(SplitSection)`
  direction: rtl;

  > * {
    direction: ltr;
  }
`;

const SplitImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 400px;
`;

const SplitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const SplitContent = styled.div`
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(15, 23, 42, 0.8);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SplitTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const SplitText = styled.p`
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const SplitFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const SplitFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const FeatureCheckIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #22c55e;
`;

const SplitCtaBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 1.125rem 2.25rem;
  border-radius: 10px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4);
  }
`;

const BtnArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

const SecurityBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(34, 197, 94, 0.5);
  }
`;

const SecurityIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #22c55e;
`;

const BenefitsSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const BenefitsBgWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const BenefitsBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BenefitsOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 58, 138, 0.88) 100%);
`;

const BenefitsContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const BenefitsTitle = styled.h2`
  color: white;
`;

const BenefitsSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    background: white;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
`;

const BenefitText = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 1.5rem;
  background: rgba(15, 23, 42, 0.5);
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 24px;
  max-width: 900px;
  margin: 3rem auto 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const TestimonialStars = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const StarIcon = styled.div`
  width: 32px;
  height: 32px;
`;

const StarFilled = styled.div`
  fill: #fbbf24;
  color: #fbbf24;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: #e2e8f0;
`;

const TestimonialAuthorSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AuthorAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.div`
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-bottom: 0.125rem;
`;

const AuthorCompany = styled.div`
  font-size: 0.875rem;
  color: #94a3b8;
`;

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const TestimonialDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const DotActive = styled(TestimonialDot)`
  background: #3b82f6;
  width: 32px;
  border-radius: 6px;
`;

const FinalCtaSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const CtaBgWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const CtaBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CtaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.9) 100%);
`;

const CtaContentBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  color: white;
`;

const CtaMainTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaTitleHighlight = styled.span`
  display: block;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CtaMainText = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
  line-height: 1.7;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const CtaButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CtaBtnPrimary = styled.button`
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(34, 197, 94, 0.6);
  }
`;

const CtaBtnSecondary = styled.button`
  background: transparent;
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const CtaBtnIcon = styled.div`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
`;

const CtaGuarantee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-top: 1rem;
`;

const GuaranteeIcon = styled.div`
  width: 18px;
  height: 18px;
  color: #22c55e;
`;

const ClientLogosSection = styled.section`
  padding: 4rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
`;

const ClientLogosTitle = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ClientLogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
`;

const ClientLogo = styled.img`
  height: 48px;
  width: auto;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 1.5rem;
  background: rgba(15, 23, 42, 0.7);
`;

const ProcessTimeline = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-1px);
  }
`;

const ProcessStep = styled.div`
  position: relative;
  padding: 2rem;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    &:hover {
      transform: translateX(0) scale(1.03);
    }
  }
`;

const StepNumberWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 2rem;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StepContent = styled.div`
  padding-left: 4rem;

  @media (min-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
`;

const StepDescription = styled.p`
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
`;

const FaqSection = styled.section`
  padding: 6rem 1.5rem;
  background: rgba(30, 58, 138, 0.3);
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
  }
`;

const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const FaqIcon = styled.div`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
`;

const FaqIconOpen = styled(FaqIcon)`
  transform: rotate(180deg);
`;

const FaqAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  padding: 0 2rem;
  color: #cbd5e1;
  font-size: 1.125rem;
  line-height: 1.7;
`;

const FaqAnswerOpen = styled(FaqAnswer)`
  max-height: 500px;
  padding: 0 2rem 1.5rem;
`;

const AnimateSlideInLeft = styled.div`
  animation: ${slideInLeft} 0.6s ease-out;
`;

const AnimateSlideInRight = styled.div`
  animation: ${slideInRight} 0.6s ease-out;
`;

const LoadingSkeleton = styled.div`
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Typing animation
  useEffect(() => {
    const text = 'Strategic Advantage';
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setTypedText(text.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: BarChart3,
      color: '#3b82f6',
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Business Intelligence & Analytics',
      description: 'Transform raw data into interactive dashboards and actionable insights that drive informed decision-making.',
      features: ['Custom Dashboards', 'Real-time Reporting', 'KPI Tracking', 'Predictive Analytics'],
      metric: '98% accuracy',
      impact: '3x faster insights',
      image: '/Images/site-images/dashboard-1.jpg'
    },
    {
      icon: BookOpen,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-500',
      title: 'Professional Writing Services',
      description: 'Expert content creation, technical documentation, and data storytelling that communicates insights effectively.',
      features: ['Data Storytelling', 'Technical Writing', 'Business Reports', 'Copywriting'],
      metric: '85% engagement',
      impact: '2.5x conversions',
      image: '/Images/site-images/data-image-2.jpg'
    },
    {
      icon: Database,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-500',
      title: 'Data Engineering & Integration',
      description: 'Build robust data pipelines that centralize information from multiple sources for seamless access.',
      features: ['ETL Automation', 'Cloud Migration', 'API Integration', 'Real-time Sync'],
      metric: '99.9% uptime',
      impact: '70% cost savings',
      image: '/Images/site-images/dashboard-2.jpg'
    },
    {
      icon: Brain,
      color: '#8b5cf6',
      gradient: 'from-violet-500 to-purple-500',
      title: 'AI & Machine Learning',
      description: 'Deploy intelligent models that predict outcomes, automate decisions, and uncover hidden patterns.',
      features: ['Predictive Models', 'NLP Solutions', 'Computer Vision', 'AutoML'],
      metric: '92% accuracy',
      impact: '5x ROI',
      image: '/Images/site-images/dashboard-3.jpg'
    },
    {
      icon: LineChart,
      color: '#ec4899',
      gradient: 'from-pink-500 to-rose-500',
      title: 'Advanced Analytics',
      description: 'Leverage statistical modeling and AI to discover insights that give you a competitive advantage.',
      features: ['Customer Segmentation', 'Churn Prediction', 'Demand Forecasting', 'A/B Testing'],
      metric: '90% precision',
      impact: '4x revenue',
      image: '/Images/site-images/data-image-1.jpg'
    }
  ];

  const stats = [
    { value: 180, label: 'Projects Delivered', color: '#3b82f6', icon: Target },
    { value: 35, label: 'Enterprise Clients', color: '#10b981', icon: Users },
    { value: 85, label: 'Client Retention', color: '#8b5cf6', icon: Award },
    { value: 12, label: 'Years Experience', color: '#f59e0b', icon: Clock }
  ];

  const testimonials = [
    {
      text: "Their analytics and writing services revolutionized our reporting. Now our insights are not just data – they're compelling stories that drive action.",
      author: "James Kariuki",
      title: "Director of Operations",
      company: "Regional Tech Group",
      rating: 5,
      color: '#bfdbfe'
    },
    {
      text: "The combination of ML predictions and professional writing helped us communicate complex ideas simply to stakeholders.",
      author: "Sarah Mitchell",
      title: "VP of Finance",
      company: "Continental Manufacturing",
      rating: 5,
      color: '#bbf7d0'
    },
    {
      text: "Outstanding data strategy consulting paired with top-notch writing services. Perfect for our global needs.",
      author: "Dr. Amina Hassan",
      title: "Chief Data Officer",
      company: "Healthcare Network Africa",
      rating: 5,
      color: '#e9d5ff'
    }
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, idx) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setAnimatedStats(prev => {
          const next = [...prev];
          next[idx] = Math.floor(current);
          return next;
        });
      }, 30);
    });
  }, []);

  return (
    <HomepageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroParallaxBg
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />

        <HeroContentWrapper>
          <HeroGrid>
            <HeroTextContent style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <HeroBadge>
                <Star style={{ width: 16, height: 16, color: '#60a5fa' }} />
                <span>Trusted by 35+ Enterprise Clients</span>
              </HeroBadge>

              <HeroTitle>
                Transform Your Data Into
                <HeroTitleHighlight>
                  {typedText}
                  <CursorBlink>|</CursorBlink>
                </HeroTitleHighlight>
              </HeroTitle>

              <HeroSubtitle>
                Expert analytics and professional writing services that turn complex data into clear, actionable insights. We help you make better decisions faster.
              </HeroSubtitle>

              <HeroCtaButtons>
                <CtaPrimary>
                  <CtaContent>
                    Get Started
                    <ArrowRight style={{ width: 20, height: 20 }} />
                  </CtaContent>
                </CtaPrimary>

                <CtaSecondary>
                  <CtaContent>
                    <Play style={{ width: 20, height: 20 }} />
                    View Demo
                  </CtaContent>
                </CtaSecondary>
              </HeroCtaButtons>

              <TrustIndicators>
                <TrustItem>
                  <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
                  <span>Free Consultation</span>
                </TrustItem>
                <TrustItem>
                  <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
                  <span>Quick Turnaround</span>
                </TrustItem>
                <TrustItem>
                  <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
                  <span>Proven Results</span>
                </TrustItem>
              </TrustIndicators>
            </HeroTextContent>

            <HeroStatsPanel style={{ transform: `translateY(-${scrollY * 0.05}px)` }}>
              <StatsGrid>
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <StatCard key={idx} style={{ borderTop: `4px solid ${stat.color}` }}>
                      <Icon style={{ width: 32, height: 32, color: stat.color, marginBottom: '0.75rem' }} />
                      <StatNumber style={{ color: stat.color }}>
                        {animatedStats[idx]}+
                      </StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatCard>
                  );
                })}
              </StatsGrid>

              <HeroImageWrapper>
                <HeroImage src="/Images/site-images/chart-1.jpg" alt="Interactive Analytics Dashboard" />
              </HeroImageWrapper>
            </HeroStatsPanel>
          </HeroGrid>
        </HeroContentWrapper>
      </HeroSection>

      {/* Social Proof Bar */}
      <SocialProofBar>
        <SocialProofContent>
          <ProofItem>
            <Star style={{ width: 20, height: 20, fill: '#fbbf24', color: '#fbbf24' }} />
            <span>4.9/5 Client Rating</span>
          </ProofItem>
          <ProofDivider />
          <ProofItem>
            <Users style={{ width: 20, height: 20 }} />
            <span>180+ Projects Delivered</span>
          </ProofItem>
          <ProofDivider />
          <ProofItem>
            <Globe style={{ width: 20, height: 20 }} />
            <span>Global Service Coverage</span>
          </ProofItem>
        </SocialProofContent>
      </SocialProofBar>

      {/* Full Width Interactive Image Section */}
      <FullwidthImageSection>
        <FullwidthImageOverlay>
          <FullwidthBgImage
            src="/Images/site-images/dashboard-1.jpg"
            alt="Data Analytics Visualization"
            style={{
              transform: hoveredCard === 'fullwidth' ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <FullwidthOverlayGradient />
          <FullwidthOverlayContent
            onMouseEnter={() => setHoveredCard('fullwidth')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FullwidthTitle>Discover Insights That Captivate</FullwidthTitle>
            <FullwidthText>
              Transform boring reports into narratives that hook your audience and drive decisions
            </FullwidthText>
            <FullwidthCtaBtn>
              <Sparkles style={{ width: 20, height: 20 }} />
              Explore Our Services
              <ArrowRight style={{ width: 20, height: 20 }} />
            </FullwidthCtaBtn>
          </FullwidthOverlayContent>
        </FullwidthImageOverlay>
      </FullwidthImageSection>

      {/* Interactive Services Grid */}
      <ServicesSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Comprehensive Data Solutions</SectionTitle>
            <SectionSubtitle>
              Click each card to explore how we blend data science with persuasive storytelling
            </SectionSubtitle>
          </SectionHeader>

          <ServicesGrid>
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeService === idx;

              const ServiceCardComponent = isActive ? ServiceCardActive : ServiceCard;

              const FeaturesComponent = isActive ? FeaturesVisible : ServiceFeatures;

              const CtaComponent = isActive ? CtaActive : ServiceCta;

              return (
                <ServiceCardComponent
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setHoveredCard(`service-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <ServiceImageWrapper>
                    <ServiceImage
                      src={service.image}
                      alt={service.title}
                      style={{
                        transform: hoveredCard === `service-${idx}` ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                        filter: isActive ? 'brightness(0.4)' : 'brightness(0.6)'
                      }}
                    />
                    <ServiceOverlay>
                      <ServiceContent>
                        <ServiceIcon gradient={service.gradient}
                          style={{
                            transform: hoveredCard === `service-${idx}` ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                          }}
                        >
                          <Icon style={{ width: 32, height: 32, color: 'white' }} />
                        </ServiceIcon>

                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>

                        <FeaturesComponent>
                          {service.features.map((feature, fidx) => (
                            <FeatureItem key={fidx}>
                              <ChevronRight style={{ width: 16, height: 16, color: '#22c55e' }} />
                              <span>{feature}</span>
                            </FeatureItem>
                          ))}
                        </FeaturesComponent>

                        <ServiceMetrics>
                          <MetricItem>
                            <MetricValue style={{ color: service.color }}>
                              {service.metric}
                            </MetricValue>
                            <MetricLabel>Success Rate</MetricLabel>
                          </MetricItem>
                          <MetricItem>
                            <MetricImpact>{service.impact}</MetricImpact>
                            <MetricLabel>Impact</MetricLabel>
                          </MetricItem>
                        </ServiceMetrics>

                        <CtaComponent>
                          {isActive ? 'Get Started' : 'Learn More'}
                          <ArrowRight style={{ width: 20, height: 20 }} />
                        </CtaComponent>
                      </ServiceContent>
                    </ServiceOverlay>
                  </ServiceImageWrapper>
                </ServiceCardComponent>
              );
            })}
          </ServicesGrid>
        </SectionContainer>
      </ServicesSection>

      {/* Split Section with Interactive Images */}
      <SplitSection>
        <SplitImageContainer
          onMouseEnter={() => setHoveredCard('split-1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <SplitImage
            src="/Images/site-images/data-image-2.jpg"
            alt="Data Processing"
            style={{
              transform: hoveredCard === 'split-1' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </SplitImageContainer>
        <SplitContent>
          <SplitTitle>From Data Overload to Persuasive Power</SplitTitle>
          <SplitText>
            Transform raw numbers into magnetic stories that captivate stakeholders and spark immediate action.
          </SplitText>
          <SplitFeatures>
            <SplitFeatureItem>
              <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
              Dynamic Data Pipelines
            </SplitFeatureItem>
            <SplitFeatureItem>
              <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
              Interactive Dashboards
            </SplitFeatureItem>
            <SplitFeatureItem>
              <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
              AI-Powered Predictions
            </SplitFeatureItem>
            <SplitFeatureItem>
              <CheckCircle style={{ width: 20, height: 20, color: '#22c55e' }} />
              Compelling Report Writing
            </SplitFeatureItem>
          </SplitFeatures>
          <SplitCtaBtn>
            Discover More
            <ArrowRight style={{ width: 20, height: 20 }} />
          </SplitCtaBtn>
        </SplitContent>
      </SplitSection>

      {/* Reverse Split Section */}
      <SplitSectionReverse>
        <SplitContent>
          <SplitTitle>Enterprise-Grade Security Meets Storytelling</SplitTitle>
          <SplitText>
            Protect your data while we craft narratives that build trust and engagement.
          </SplitText>
          <SecurityBadges>
            <SecurityBadge>
              <Shield style={{ width: 20, height: 20, color: '#22c55e' }} />
              <span>SOC 2 Compliant</span>
            </SecurityBadge>
            <SecurityBadge>
              <Shield style={{ width: 20, height: 20, color: '#22c55e' }} />
              <span>GDPR Ready</span>
            </SecurityBadge>
            <SecurityBadge>
              <Shield style={{ width: 20, height: 20, color: '#22c55e' }} />
              <span>256-bit Encryption</span>
            </SecurityBadge>
          </SecurityBadges>
        </SplitContent>
        <SplitImageContainer
          onMouseEnter={() => setHoveredCard('split-2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <SplitImage
            src="/Images/site-images/data-image-3.jpg"
            alt="Security Visualization"
            style={{
              transform: hoveredCard === 'split-2' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </SplitImageContainer>
      </SplitSectionReverse>

      {/* Benefits Section with Background Image */}
      <BenefitsSection>
        <BenefitsBgWrapper>
          <BenefitsBgImage src="/Images/site-images/dashboard-2.jpg" alt="Background" />
          <BenefitsOverlay />
        </BenefitsBgWrapper>
        <BenefitsContainer>
          <SectionHeader>
            <BenefitsTitle as={SectionTitle}>Why Choose Us</BenefitsTitle>
            <BenefitsSubtitle as={SectionSubtitle}>
              Proven expertise delivering measurable results
            </BenefitsSubtitle>
          </SectionHeader>

          <BenefitsGrid>
            <BenefitCard>
              <TrendingUp style={{ width: 48, height: 48, color: '#3b82f6' }} />
              <BenefitTitle>Proven ROI</BenefitTitle>
              <BenefitText>30%+ efficiency gains in first quarter</BenefitText>
            </BenefitCard>

            <BenefitCard>
              <Zap style={{ width: 48, height: 48, color: '#10b981' }} />
              <BenefitTitle>Rapid Delivery</BenefitTitle>
              <BenefitText>Working prototypes in days, not months</BenefitText>
            </BenefitCard>

            <BenefitCard>
              <Users style={{ width: 48, height: 48, color: '#8b5cf6' }} />
              <BenefitTitle>Expert Team</BenefitTitle>
              <BenefitText>Data scientists and professional writers</BenefitText>
            </BenefitCard>

            <BenefitCard>
              <Shield style={{ width: 48, height: 48, color: '#f59e0b' }} />
              <BenefitTitle>Secure & Compliant</BenefitTitle>
              <BenefitText>Enterprise-grade security standards</BenefitText>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsContainer>
      </BenefitsSection>

      {/* Testimonials */}
      <TestimonialsSection>
        <SectionContainer>
          <SectionTitle>What Our Clients Say</SectionTitle>

          <TestimonialCard>
            <TestimonialStars>
              {[...Array(5)].map((_, i) => (
                <Star key={i} style={{ width: 32, height: 32, fill: '#fbbf24', color: '#fbbf24' }} />
              ))}
            </TestimonialStars>

            <TestimonialQuote>
              "{testimonials[activeTestimonial].text}"
            </TestimonialQuote>

            <TestimonialAuthorSection>
              <AuthorAvatar style={{ backgroundColor: testimonials[activeTestimonial].color }} />
              <AuthorInfo>
                <AuthorName>{testimonials[activeTestimonial].author}</AuthorName>
                <AuthorTitle>{testimonials[activeTestimonial].title}</AuthorTitle>
                <AuthorCompany>{testimonials[activeTestimonial].company}</AuthorCompany>
              </AuthorInfo>
            </TestimonialAuthorSection>

            <TestimonialDots>
              {testimonials.map((_, idx) => (
                <TestimonialDot
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  as={idx === activeTestimonial ? DotActive : 'button'}
                />
              ))}
            </TestimonialDots>
          </TestimonialCard>
        </SectionContainer>
      </TestimonialsSection>

      {/* Final CTA with Background Image */}
      <FinalCtaSection>
        <CtaBgWrapper>
          <CtaBgImage src="/Images/site-images/dashboard-3.jpg" alt="Background" />
          <CtaOverlay />
        </CtaBgWrapper>
        <CtaContentBox>
          <CtaMainTitle>
            Ready to Transform Your
            <CtaTitleHighlight>
              Data Into Decisions?
            </CtaTitleHighlight>
          </CtaMainTitle>

          <CtaMainText>
            Join 180+ companies leveraging our analytics and writing expertise to drive growth
          </CtaMainText>

          <CtaButtonsWrapper>
            <CtaBtnPrimary>
              Get Started Today
              <ArrowRight style={{ width: 20, height: 20 }} />
            </CtaBtnPrimary>

            <CtaBtnSecondary>
              Schedule Consultation
            </CtaBtnSecondary>
          </CtaButtonsWrapper>

          <CtaGuarantee>
            <Shield style={{ width: 18, height: 18, color: '#22c55e' }} />
            <span>No Long-term Contracts</span>
            <Zap style={{ width: 18, height: 18, color: '#22c55e' }} />
            <span>Quick Response Time</span>
          </CtaGuarantee>
        </CtaContentBox>
      </FinalCtaSection>
    </HomepageContainer>
  );
};

export default HomePage;