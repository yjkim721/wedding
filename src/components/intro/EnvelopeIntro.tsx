import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';

export default function EnvelopeIntro() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('wedding-visited');
    if (hasVisited === 'true') {
      navigate('/invitation');
    }
  }, [navigate]);

  const handleOpen = () => {
    setShowButton(false);
    setIsOpen(true);

    // Navigate after envelope animation
    setTimeout(() => {
      localStorage.setItem('wedding-visited', 'true');
      navigate('/invitation');
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50 flex items-center justify-center">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12 text-center"
            >
              <motion.div
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(212, 165, 116, 0.3)',
                    '0 0 20px rgba(212, 165, 116, 0.5)',
                    '0 0 10px rgba(212, 165, 116, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <p 
                  className="text-primary/70 tracking-widest mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem' }}
                >
                  WEDDING INVITATION
                </p>
                <h1 
                  className="text-primary"
                  style={{ 
                    fontFamily: "'Noto Serif KR', serif", 
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    letterSpacing: '0.1em'
                  }}
                >
                  유현욱 ♥ 김연재
                </h1>
              </motion.div>
              
              <Button
                onClick={handleOpen}
                className="bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-10 py-6 shadow-lg"
                style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '1rem',
                  letterSpacing: '0.3em'
                }}
              >
                초대장 열기
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Envelope */}
        <div className="relative w-80 h-56">
          {/* Envelope body */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-amber-100 to-rose-100 rounded-lg shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #f5e6d3 0%, #f9e4d4 100%)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}
          >
            {/* Decorative seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shadow-lg flex items-center justify-center border-4 border-amber-200"
              >
                <span className="text-2xl">💕</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-32 origin-top"
            style={{
              background: 'linear-gradient(135deg, #d4a574 0%, #c99366 100%)',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Card inside */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -100, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 w-64 h-80 bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #fffdf9 100%)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,1)'
                }}
              >
                <div className="text-center">
                  {/* Decorative top */}
                  <div className="mb-6">
                    <svg width="80" height="20" viewBox="0 0 80 20" className="mx-auto opacity-40">
                      <path d="M0 10 Q 20 0, 40 10 T 80 10" stroke="#d4a574" fill="none" strokeWidth="1"/>
                    </svg>
                  </div>

                  <p 
                    className="text-primary/60 mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.8rem', letterSpacing: '0.2em' }}
                  >
                    WEDDING DAY
                  </p>
                  <p 
                    className="text-primary mb-2"
                    style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '1.3rem', fontWeight: 300 }}
                  >
                    유현욱 ♥ 김연재
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">2026. 06. 28</p>

                  {/* Decorative bottom */}
                  <div>
                    <svg width="80" height="20" viewBox="0 0 80 20" className="mx-auto opacity-40">
                      <path d="M0 10 Q 20 20, 40 10 T 80 10" stroke="#d4a574" fill="none" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
