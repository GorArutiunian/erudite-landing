import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, PlayCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string; // YouTube/Vimeo embed URL (optional)
  posterImage?: string; // Poster image URL (optional)
}

export const VideoModal = ({ isOpen, onClose, videoUrl, posterImage }: VideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Store the previously focused element and restore it on close
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus the modal when opened
      setTimeout(() => {
        modalRef.current?.focus();
      }, 100);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Product Demo Video"
            className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="relative w-full max-w-5xl mx-auto bg-primary-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Container */}
              <div className="aspect-video relative">
                {videoUrl ? (
                  // Embed actual video
                  <iframe
                    src={videoUrl}
                    title="Erudite Product Demo"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Placeholder state
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900">
                    {posterImage ? (
                      <img 
                        src={posterImage} 
                        alt="Video poster" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                    ) : (
                      // Abstract placeholder background
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
                          <defs>
                            <linearGradient id="video-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#0066FF" />
                              <stop offset="100%" stopColor="#22B14C" />
                            </linearGradient>
                          </defs>
                          <circle cx="200" cy="150" r="100" fill="url(#video-grad)" opacity="0.3" />
                          <circle cx="600" cy="300" r="150" fill="url(#video-grad)" opacity="0.2" />
                          <circle cx="400" cy="200" r="80" fill="url(#video-grad)" opacity="0.4" />
                        </svg>
                      </div>
                    )}
                    
                    <div className="relative z-10 text-center">
                      {/* Play icon placeholder */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30"
                      >
                        <PlayCircle className="w-16 h-16 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        Demo Video Coming Soon
                      </h3>
                      <p className="text-white/70 text-lg max-w-md mx-auto">
                        We're preparing an exciting 60-second demo showcasing Erudite's features.
                      </p>
                      
                      {/* Placeholder video info */}
                      <div className="mt-8 flex items-center justify-center space-x-6 text-white/50 text-sm">
                        <span className="flex items-center">
                          <Play className="w-4 h-4 mr-1" />
                          60 seconds
                        </span>
                        <span>HD Quality</span>
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info Bar */}
              <div className="bg-primary-950 px-6 py-4 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">Erudite Product Demo</h4>
                  <p className="text-white/60 text-sm">See how kids learn with Erudite</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// WATCH DEMO BUTTON COMPONENT
// (Can be used in Hero or elsewhere)
// ============================================

interface WatchDemoButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const WatchDemoButton = ({ 
  onClick, 
  variant = 'secondary', 
  size = 'md',
  className = '' 
}: WatchDemoButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all rounded-lg";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-primary-700 hover:bg-primary-800 text-white shadow-md hover:shadow-lg",
    secondary: "bg-white dark:bg-primary-800 border-2 border-primary-700 text-primary-700 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-700",
    ghost: "bg-transparent hover:bg-primary-50 dark:hover:bg-primary-800 text-primary-700 dark:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="Watch 60-second demo video"
    >
      <Play className="w-5 h-5 mr-2" />
      Watch 60s Demo
    </button>
  );
};

export default VideoModal;
