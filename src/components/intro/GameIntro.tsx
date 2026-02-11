import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const BW_BACKGROUND = "https://images.unsplash.com/photo-1759143041571-02e6463dc2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHZpbGxhZ2UlMjBjb3VudHJ5c2lkZSUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwNzc0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const COLOR_BACKGROUND = "https://images.unsplash.com/photo-1747068104590-adb5a81f1df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNwcmluZyUyMG1lYWRvdyUyMHJvbWFudGljfGVufDF8fHx8MTc3MDc3NDI3Nnww&ixlib=rb-4.1.0&q=80&w=1080";

export default function GameIntro() {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);
  const [charactersWalking, setCharactersWalking] = useState(false);
  const [charactersMet, setCharactersMet] = useState(false);
  const [showColorBg, setShowColorBg] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('wedding-visited');
    if (hasVisited === 'true') {
      navigate('/invitation');
    }
  }, [navigate]);

  const handleGameStart = () => {
    setGameStarted(true);
    setCharactersWalking(true);

    // Characters walking
    setTimeout(() => {
      setCharactersMet(true);
    }, 2000);

    // Color transition and impact
    setTimeout(() => {
      setShowColorBg(true);
      setShake(true);
      
      // Vibration (if supported)
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }

      // Remove shake
      setTimeout(() => {
        setShake(false);
      }, 500);

      // Navigate to main page
      setTimeout(() => {
        localStorage.setItem('wedding-visited', 'true');
        navigate('/invitation');
      }, 1500);
    }, 3000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence>
        {!showColorBg && (
          <motion.div
            key="bw-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={BW_BACKGROUND}
              alt="배경"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {showColorBg && (
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${shake ? 'animate-shake' : ''}`}
        >
          <ImageWithFallback
            src={COLOR_BACKGROUND}
            alt="컬러 배경"
            className="w-full h-full object-cover"
          />
          {/* Flash effect */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white"
          />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {!gameStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              className="mb-8 font-serif text-white"
              style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.1em' }}
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 30px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Story
            </motion.h1>
            <Button
              onClick={handleGameStart}
              className="px-12 py-6 bg-white/90 hover:bg-white text-black backdrop-blur-sm"
              style={{ fontSize: '1.2rem', letterSpacing: '0.2em' }}
            >
              GAME START
            </Button>
          </motion.div>
        )}

        {/* Characters Animation */}
        {charactersWalking && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Groom (from left) */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: charactersMet ? -30 : 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute"
            >
              <div className="w-20 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-600 rounded-full" />
              </div>
            </motion.div>

            {/* Bride (from right) */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: charactersMet ? 30 : 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute"
            >
              <div className="w-20 h-32 bg-gradient-to-b from-pink-200 to-pink-400 rounded-full relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-pink-300 rounded-full" />
              </div>
            </motion.div>

            {/* Heart when they meet */}
            {charactersMet && !showColorBg && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute text-6xl"
              >
                💕
              </motion.div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translate(0, 0); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-4px, 4px); }
          20%, 40%, 60%, 80% { transform: translate(4px, -4px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  );
}
