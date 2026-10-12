/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FieldStudySection } from './components/FieldStudySection';
import { ResearchQuestionSection } from './components/ResearchQuestionSection';
import { NgtTriangleSection } from './components/NgtTriangleSection';
import { OneResourceSection } from './components/OneResourceSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { CustomerSegmentsSection } from './components/CustomerSegmentsSection';
import { CustomerJourneySection } from './components/CustomerJourneySection';
import { SurveyDashboardSection } from './components/SurveyDashboardSection';
import { EvidenceTriangulationSection } from './components/EvidenceTriangulationSection';
import { PoliticalEconomySection } from './components/PoliticalEconomySection';
import { ChallengesSection } from './components/ChallengesSection';
import { ConsultingNotesSection } from './components/ConsultingNotesSection';
import { ReflectionSection } from './components/ReflectionSection';
import { EvidenceGallerySection } from './components/EvidenceGallerySection';
import { MiniQuizSection } from './components/MiniQuizSection';
import { ReportSourcesSection } from './components/ReportSourcesSection';
import { AboutCompanionSection } from './components/AboutCompanionSection';
import { Footer } from './components/Footer';
import { FullReportModal } from './components/FullReportModal';
import { EvidenceLightboxProvider } from './context/EvidenceLightboxContext';
import { EvidenceLightboxModal } from './components/EvidenceLightboxModal';
import { FontFamilyMode, FontSizeMode, LineHeightMode, ContrastMode } from './types';
import { useGsapAnimations } from './hooks/useGsapAnimations';

export default function App() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [fontFamilyMode, setFontFamilyMode] = useState<FontFamilyMode>('vietnam');
  const [fontSizeMode, setFontSizeMode] = useState<FontSizeMode>('md');
  const [lineHeightMode, setLineHeightMode] = useState<LineHeightMode>('standard');
  const [contrastMode, setContrastMode] = useState<ContrastMode>('natural');

  // Trigger smooth GSAP scroll-triggered & entrance animations
  useGsapAnimations();

  return (
    <EvidenceLightboxProvider>
      <div
        className={`min-h-screen bg-[#FBFBF7] text-[#1A1F1A] flex flex-col font-body font-mode-${fontFamilyMode} font-size-${fontSizeMode} leading-${lineHeightMode} contrast-${contrastMode} selection:bg-[#164E37]/15 selection:text-[#164E37] transition-colors duration-200`}
      >
        {/* Strict 3-zone Header with Reading Progress & Comprehensive Typography Controls */}
        <Navbar
          onOpenReportModal={() => setIsReportModalOpen(true)}
          fontFamilyMode={fontFamilyMode}
          onChangeFontFamily={setFontFamilyMode}
          fontSizeMode={fontSizeMode}
          onChangeFontSize={setFontSizeMode}
          lineHeightMode={lineHeightMode}
          onChangeLineHeight={setLineHeightMode}
          contrastMode={contrastMode}
          onChangeContrast={setContrastMode}
        />

        {/* Main Storyline Sections */}
        <main className="flex-1">
          {/* SECTION 01 — HERO (TT10) */}
          <HeroSection onOpenReportModal={() => setIsReportModalOpen(true)} />

          {/* SECTION 02 — THE FIELD STUDY (TD07 + SK01) */}
          <FieldStudySection />

          {/* SECTION 03 — THE RESEARCH QUESTION */}
          <ResearchQuestionSection />

          {/* SECTION 04 — VŨ KHÍ SỐ 1: TAM GIÁC N–G–T (TT05 main + TD04 supporting) */}
          <NgtTriangleSection />

          {/* SECTION 05 — ONE RESOURCE, THREE VALUES (TT05 + TD04) */}
          <OneResourceSection />

          {/* SECTION 06 & 07 — BUSINESS MODEL MAP (TD05 4 groups) & VALUE CREATION LOOP */}
          <BusinessModelSection />

          {/* SECTION 08 — CUSTOMER SEGMENTS (TD03 2 columns) & COMMUNICATION CHANNELS (TD02) */}
          <CustomerSegmentsSection />

          {/* SECTION 09 & 10 — CUSTOMER JOURNEY (TT02, TT08, TT03) & AGRICULTURAL SPACE (TT01, TT03, TT09) */}
          <CustomerJourneySection />

          {/* SECTION 11 — SURVEY DASHBOARD (WOW MOMENT #3 · Pure Charts/KPIs, No Photos) */}
          <SurveyDashboardSection />

          {/* SECTION 12 — EVIDENCE TRIANGULATION (TD04 + TT05 + Survey) */}
          <EvidenceTriangulationSection />

          {/* SECTION 13 — A POLITICAL ECONOMY PERSPECTIVE */}
          <PoliticalEconomySection />

          {/* SECTION 14 — OPERATIONAL CHALLENGES (TD01 3 cards) & VISION/MISSION/VALUES (TD06) */}
          <ChallengesSection />

          {/* SECTION 15 — CONSULTING NOTES */}
          <ConsultingNotesSection />

          {/* SECTION 16 — BEFORE / FIELD / AFTER (SK01 + TT10) */}
          <ReflectionSection />

          {/* SECTION 17 — FIELD EVIDENCE GALLERY (18 items: SK01, TD01–TD07, TT01–TT10) */}
          <EvidenceGallerySection />

          {/* SECTION 18 — MINI QUIZ */}
          <MiniQuizSection />

          {/* SECTION 19 — REPORT & SOURCES */}
          <ReportSourcesSection onOpenReportModal={() => setIsReportModalOpen(true)} />

          {/* SECTION 20 — ABOUT THIS DIGITAL COMPANION (Authorship, Provenance, AI Transparency) */}
          <AboutCompanionSection />
        </main>

        {/* Academic Editorial Footer */}
        <Footer onOpenReportModal={() => setIsReportModalOpen(true)} />

        {/* Full Report Reader & Printable PDF Modal */}
        <FullReportModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
        />

        {/* Global Evidence Lightbox Modal for High-Res Inspection */}
        <EvidenceLightboxModal />
      </div>
    </EvidenceLightboxProvider>
  );
}
