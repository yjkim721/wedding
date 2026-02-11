import { motion } from 'motion/react';

export default function DatePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12" style={{ background: '#fafaf8' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gray-400 mx-auto mb-12"
        />

        {/* Main date display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <p 
            className="text-gray-400 tracking-wider mb-4"
            style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em' }}
          >
            WEDDING DAY
          </p>
          
          <div className="mb-8">
            <p 
              className="text-gray-800 mb-2"
              style={{ fontSize: '2.5rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              6 · 28
            </p>
            <p 
              className="text-gray-600"
              style={{ fontSize: '1rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
            >
              2026
            </p>
          </div>

          <div className="space-y-2">
            <p 
              className="text-gray-700"
              style={{ fontSize: '0.95rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}
            >
              토요일 오후 다섯시
            </p>
          </div>
        </motion.div>

        {/* Venue information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="border-t border-b border-gray-300 py-8 px-6">
            <p 
              className="text-gray-800 mb-3"
              style={{ fontSize: '1.1rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400, letterSpacing: '0.05em' }}
            >
              더베르G
            </p>
            <p 
              className="text-gray-500 leading-relaxed"
              style={{ fontSize: '0.8rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
            >
              서울특별시 영등포구 국회대로 612<br />
              코레일리테일빌딩 2층
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-12"
        >
          <div className="text-center">
            <p className="text-gray-500 mb-2" style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.1em' }}>
              GROOM
            </p>
            <p className="text-gray-800 mb-2" style={{ fontSize: '0.95rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}>
              유현욱
            </p>
            <a 
              href="tel:010-9277-9959" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              style={{ fontSize: '0.75rem', fontFamily: "'Noto Serif KR', serif" }}
            >
              010-9277-9959
            </a>
          </div>
          
          <div className="w-px bg-gray-300" />
          
          <div className="text-center">
            <p className="text-gray-500 mb-2" style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.1em' }}>
              BRIDE
            </p>
            <p className="text-gray-800 mb-2" style={{ fontSize: '0.95rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}>
              김연재
            </p>
            <a 
              href="tel:010-2550-7505" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              style={{ fontSize: '0.75rem', fontFamily: "'Noto Serif KR', serif" }}
            >
              010-2550-7505
            </a>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="h-px bg-gray-400 mx-auto mt-12"
        />
      </motion.div>
    </div>
  );
}