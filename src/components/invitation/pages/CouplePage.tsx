import { motion } from 'motion/react';
import groomImage from 'figma:asset/073dda2382589992e0c751149cfb13dd00e41581.png';
import brideImage from 'figma:asset/05ba32129dec69371938f0d89719cf181a3c049a.png';

export default function CouplePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-10" style={{ background: '#fafaf8' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex flex-col"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gray-400 mx-auto mb-6"
        />

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-10"
        >
          <p 
            className="text-gray-400 tracking-wider"
            style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em' }}
          >
            ABOUT US
          </p>
          <p 
            className="text-gray-700 mt-2"
            style={{ fontSize: '0.9rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            우리 소개
          </p>
        </motion.div>

        {/* Main Content - Left/Right Split */}
        <div className="flex-1 flex items-center gap-0">
          {/* Groom - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex flex-col items-center text-center px-6"
          >
            <div className="w-32 h-32 rounded-sm overflow-hidden mb-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <img 
                src={groomImage} 
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
            
            <p 
              className="text-gray-400 tracking-wider mb-1.5"
              style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              GROOM
            </p>
            <h3 
              className="text-gray-800 mb-6"
              style={{ fontSize: '1.5rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400, letterSpacing: '0.03em' }}
            >
              유현욱
            </h3>
            
            <div className="space-y-2 w-full" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>1994년 5월 출생</p>
              <p className="text-gray-700" style={{ fontSize: '0.85rem' }}>ENFJ - 다정다감</p>
              
              <div className="pt-3 pb-2">
                <div className="w-16 h-px bg-gray-300 mx-auto mb-3" />
                <p className="text-gray-400 mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>좋아하는것</p>
                <p className="text-gray-500" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                  F1 · 축구 · 연재
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-px bg-gray-300 self-stretch my-12"
          />

          {/* Bride - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex-1 flex flex-col items-center text-center px-6"
          >
            <div className="w-32 h-32 rounded-sm overflow-hidden mb-6" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <img 
                src={brideImage} 
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
            
            <p 
              className="text-gray-400 tracking-wider mb-1.5"
              style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              BRIDE
            </p>
            <h3 
              className="text-gray-800 mb-6"
              style={{ fontSize: '1.5rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400, letterSpacing: '0.03em' }}
            >
              김연재
            </h3>
            
            <div className="space-y-2 w-full" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>1996년 7월 출생</p>
              <p className="text-gray-700" style={{ fontSize: '0.85rem' }}>INTJ - 용의주도</p>
              
              <div className="pt-3 pb-2">
                <div className="w-16 h-px bg-gray-300 mx-auto mb-3" />
                <p className="text-gray-400 mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>좋아하는것</p>
                <p className="text-gray-500" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                  여행 · 산책 · 현욱
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="h-px bg-gray-400 mx-auto mt-6"
        />
      </motion.div>
    </div>
  );
}