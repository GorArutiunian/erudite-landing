import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modal } from './components/Modal';
import { VideoModal } from './components/VideoModal';
import { InvestorDeckForm, DemoForm } from './components/Forms';
import { ProblemStorySection } from './components/sections/ProblemStorySection';
import { ProblemOpportunity } from './components/sections/ProblemOpportunity';
import { ProductOverview } from './components/sections/ProductOverview';
import { ParentDashboard } from './components/sections/ParentDashboard';
import { Traction } from './components/sections/Traction';
import { Pricing } from './components/sections/Pricing';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import type { FormData } from './types';

const AppContent = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'deck' | 'demo' | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setModalType(event.detail);
      setModalOpen(true);
    };

    const handleOpenVideoModal = () => {
      setVideoModalOpen(true);
    };

    window.addEventListener('openModal', handleOpenModal as EventListener);
    window.addEventListener('openVideoModal', handleOpenVideoModal as EventListener);
    return () => {
      window.removeEventListener('openModal', handleOpenModal as EventListener);
      window.removeEventListener('openVideoModal', handleOpenVideoModal as EventListener);
    };
  }, []);

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // In production, this would send to a backend API
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStorySection />
      <ProblemOpportunity />
      <ProductOverview />
      <ParentDashboard />
      <Traction />
      <Pricing />
      <FinalCTA />
      <Footer />

      {/* Modals */}
      <Modal
        isOpen={modalOpen && modalType === 'deck'}
        onClose={() => {
          setModalOpen(false);
          setModalType(null);
        }}
        title={t('modal.deck.title')}
      >
        <InvestorDeckForm onSubmit={handleFormSubmit} />
      </Modal>

      <Modal
        isOpen={modalOpen && modalType === 'demo'}
        onClose={() => {
          setModalOpen(false);
          setModalType(null);
        }}
        title={t('modal.demo.title')}
      >
        <DemoForm onSubmit={handleFormSubmit} />
      </Modal>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        // videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Add real URL when available
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
