import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverPage from './pages/CoverPage';
import MessagePage from './pages/MessagePage';
import DatePage from './pages/DatePage';
import CouplePage from './pages/CouplePage';
import TimelinePage from './pages/TimelinePage';
import MapPage from './pages/MapPage';
import RsvpAccountPage from './pages/RsvpAccountPage';
import SharePage from './pages/SharePage';

const pages = [
  CoverPage,
  DatePage,
  MessagePage,
  CouplePage,
  TimelinePage,
  MapPage,
  RsvpAccountPage,
  SharePage,
];

export default function PageFlipInvitation() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const nextPage = currentPage + newDirection;
    if (nextPage >= 0 && nextPage < pages.length) {
      setDirection(newDirection);
      setCurrentPage(nextPage);
    }
  };

  const handleSliderChange = (value: number[]) => {
    const newPage = value[0];
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      rotateY: direction > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#e8e5e0' }}>
      {/* Instagram Story Style Progress Bars */}
      <div className="absolute top-4 left-0 right-0 z-50 px-6">
        <div className="flex gap-1.5 max-w-md mx-auto">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1);
                setCurrentPage(index);
              }}
              className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden relative"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-white/30" />
              
              {/* Filled portion for completed pages */}
              {index < currentPage && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white/90"
                />
              )}
              
              {/* Animated fill for current page */}
              {index === currentPage && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white/90"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {currentPage > 0 && (
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {currentPage < pages.length - 1 && (
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Page content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              rotateY: { duration: 0.4 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ perspective: 1000 }}
          >
            <div 
              className="w-full max-w-md h-[85vh] max-h-[800px] bg-white rounded-lg shadow-2xl overflow-auto"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
              }}
            >
              <CurrentPageComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-sm text-gray-600">
        {currentPage + 1} / {pages.length}
      </div>
    </div>
  );
}