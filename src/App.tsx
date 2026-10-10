/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResearchGisPage } from './pages/ResearchGisPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectModal } from './components/ProjectModal';
import { RfpModal } from './components/RfpModal';
import { PublicationModal } from './components/PublicationModal';
import { Project, PROJECTS_DATA, Publication } from './data/companyData';
import { Language } from './data/translations';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lang, setLang] = useState<Language>('FA');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [rfpOpen, setRfpOpen] = useState<boolean>(false);

  // Sync HTML dir and lang attributes with current language
  useEffect(() => {
    if (lang === 'FA') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'fa';
      document.title = 'مهندسین مشاور پویا طرح پارس | PTP Co';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.title = 'PTP Co — Pouya Tarh Pars Consulting Engineers';
    }
  }, [lang]);

  // Sync window hash for deep navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'projects', 'research', 'careers', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenProjectById = (projectId: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleOpenPublication = (pub: Publication) => {
    setSelectedPublication(pub);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'FA' : 'EN'));
  };

  return (
    <div
      dir={lang === 'FA' ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col bg-slate-50 text-slate-800 transition-colors duration-150"
    >
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenRfp={() => setRfpOpen(true)}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProject={handleOpenProject}
            onOpenRfp={() => setRfpOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenRfp={() => setRfpOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenRfp={() => setRfpOpen(true)}
            onOpenProjectById={handleOpenProjectById}
            lang={lang}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsPage
            onOpenProject={handleOpenProject}
            onOpenRfp={() => setRfpOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'research' && (
          <ResearchGisPage
            onOpenPublication={handleOpenPublication}
            onOpenRfp={() => setRfpOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'careers' && (
          <CareersPage
            lang={lang}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            lang={lang}
          />
        )}

        {!['home', 'about', 'services', 'projects', 'research', 'careers', 'contact'].includes(currentTab) && (
          <NotFoundPage
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}
      </main>

      {/* Multi-Column Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRfp={() => setRfpOpen(true)}
        lang={lang}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenRfp={() => setRfpOpen(true)}
        lang={lang}
      />

      <RfpModal
        isOpen={rfpOpen}
        onClose={() => setRfpOpen(false)}
        lang={lang}
      />

      <PublicationModal
        publication={selectedPublication}
        onClose={() => setSelectedPublication(null)}
        lang={lang}
      />
    </div>
  );
}
